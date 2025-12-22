import { Student, SheetConfig, ActivityRow, SubjectMark, BatchSubjectConfig } from '../types';
import { CATEGORY_CODES, SYSTEM_HEADER_LABELS } from '../config';

// Helper to normalize header strings for comparison
export const normalizeLabel = (label: string): string => 
  (label || "").toString().trim().toLowerCase();

const isSystemHeader = (hdr: string) => SYSTEM_HEADER_LABELS.includes(normalizeLabel(hdr));

/**
 * Fetches data from a public Google Sheet using the GViz API.
 */
export const fetchSheetData = async (config: SheetConfig): Promise<{ headers: string[], rows: Student[] }> => {
  const url = `https://docs.google.com/spreadsheets/d/${config.id}/gviz/tq?sheet=${encodeURIComponent(config.name)}`;
  
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch sheet. Status: ${res.status}`);
    
    const text = await res.text();
    // GViz API returns JSON wrapped in a function call "google.visualization.Query.setResponse(...)"
    // We strip that wrapper to get raw JSON.
    const jsonString = text.substring(47).slice(0, -2);
    const json = JSON.parse(jsonString);

    const headers = json.table.cols.map((c: any) => c.label?.trim() || "").filter(Boolean);
    const rows = (json.table.rows || []).map((r: any) => {
      const obj: Student = {};
      headers.forEach((h: string, i: number) => {
        obj[h] = r.c[i]?.v ?? "";
      });
      return obj;
    });

    return { headers, rows };
  } catch (error) {
    console.error("Sheet fetch error:", error);
    throw error;
  }
};

/**
 * Parses a raw column header (e.g., "RP_Hackathon_2023_Winner") into metadata.
 */
export const parseActivityHeader = (name: string): Partial<ActivityRow> => {
  const raw = String(name || '').trim();
  const tokens = raw.split('_').map(t => t.trim()).filter(t => t.length > 0);
  
  // Default structure
  const meta: any = { 
    raw, 
    forWho: '', 
    year: '', 
    dateStart: '', 
    dateEnd: '', 
    displayName: raw, 
    category: 'OT', 
    maxPoints: null 
  };

  if (tokens.length < 6) {
    meta.displayName = raw.replace(/^RP_/i, '').replace(/_/g, ' ');
    return meta;
  }

  let idx = 0;
  if (tokens[0].toUpperCase() === 'RP') idx = 1;
  
  meta.forWho = tokens[idx] || ''; idx++;
  meta.year = tokens[idx] || ''; idx++;
  
  // Date parsing logic
  const dateToken = tokens[idx] || '';
  if (dateToken.toLowerCase().indexOf('to') !== -1 || (tokens[idx + 1] && tokens[idx + 1].toLowerCase() === 'to')) {
    if (dateToken.toLowerCase().indexOf('to') !== -1 && dateToken.indexOf('_To_') !== -1) {
      const parts = dateToken.split('_To_');
      meta.dateStart = parts[0];
      meta.dateEnd = parts[1];
      idx++;
    } else if (tokens[idx + 1] && tokens[idx + 1].toLowerCase() === 'to') {
      meta.dateStart = tokens[idx];
      meta.dateEnd = tokens[idx + 2];
      idx += 3;
    } else {
      const parts = dateToken.split(/to/i);
      meta.dateStart = parts[0].replace(/[_\-]/g, '.').trim();
      meta.dateEnd = parts[1].replace(/[_\-]/g, '.').trim();
      idx++;
    }
  } else {
    meta.dateStart = dateToken;
    meta.dateEnd = dateToken;
    idx++;
  }

  // Category and Max Points
  let categoryIdx = -1;
  for (let i = tokens.length - 1; i >= idx; i--) {
    if (CATEGORY_CODES.includes(tokens[i].toUpperCase())) {
      categoryIdx = i;
      break;
    }
  }

  if (categoryIdx !== -1) {
    meta.category = tokens[categoryIdx].toUpperCase();
    const legacyMaxToken = tokens[tokens.length - 2];
    const maxN = Number(legacyMaxToken);
    meta.maxPoints = isNaN(maxN) ? null : maxN;

    if (categoryIdx > idx) {
       meta.displayName = tokens.slice(idx, categoryIdx).join(' ');
    } else {
       meta.displayName = tokens.slice(idx, tokens.length - 2).join(' ');
    }
  } else {
     meta.displayName = tokens.slice(idx).join(' ');
  }

  return meta;
};

/**
 * Parses internal marks using Config if available, falling back to heuristics.
 */
export const parseInternalMarks = (
  headers: string[], 
  row: Student, 
  dept: string, 
  config: BatchSubjectConfig
): { subjects: SubjectMark[], totals: any } => {
  const subjects: SubjectMark[] = [];
  const normalizedMap = new Map(headers.map(c => [normalizeLabel(c), c]));

  // Get configured subjects for this department
  const configuredSubjects = config.departments[dept] || [];

  const findRPColumn = (baseHeader: string) => {
    const baseNorm = normalizeLabel(baseHeader);
    const tries = [baseNorm + "_rp", baseNorm + " rp", baseNorm + "rp"];
    for (const t of tries) if (normalizedMap.has(t)) return normalizedMap.get(t);
    return headers.find(h => normalizeLabel(h).endsWith("_rp") && normalizeLabel(h).includes(baseNorm));
  };

  // 1. First, try to find columns matching configured subjects
  if (configuredSubjects.length > 0) {
    configuredSubjects.forEach(subRule => {
      // Find the header in the sheet that matches the config code
      const sheetHeader = headers.find(h => normalizeLabel(h) === normalizeLabel(subRule.code)) 
                       || headers.find(h => normalizeLabel(h).includes(normalizeLabel(subRule.code)));

      if (sheetHeader) {
        const rpHeader = findRPColumn(sheetHeader);
        const marksVal = Number(row[sheetHeader]) || 0;
        const rpVal = rpHeader ? (Number(row[rpHeader]) || 0) : 0;
        
        // Use Max Mark from Config, but ensure it's at least as high as obtained mark
        let finalMax = subRule.maxMarks;
        if (finalMax < marksVal) finalMax = marksVal;

        subjects.push({
          code: sheetHeader, // Use actual header name
          type: subRule.type,
          marks: marksVal,
          rp: rpVal,
          max: finalMax
        });
      }
    });
  }

  // 2. Fallback: If no configured subjects were found (or list was empty), use Heuristics
  if (subjects.length === 0) {
    const potentialSubjects = headers.filter(h => {
      const n = normalizeLabel(h);
      if (isSystemHeader(h)) return false;
      if (n.includes('total') || n.includes('allocated') || n.includes('balance') || n.includes('reward')) return false;
      return /[a-z]/.test(n) && /\d/.test(n) && n.length >= 4 && !n.endsWith("_rp");
    });

    potentialSubjects.forEach(subHeader => {
      const rpHeader = findRPColumn(subHeader);
      const marksVal = Number(row[subHeader]) || 0;
      const rpVal = rpHeader ? (Number(row[rpHeader]) || 0) : 0;

      // Heuristic Type Detection
      const n = normalizeLabel(subHeader);
      let type: any = 'Theory';
      if (n.includes("lab+theory") || n.includes("lab + theory")) type = 'Lab + Theory';
      else if (n.includes("lab")) type = 'Lab';

      // Use Batch Defaults
      let finalMax = config.defaultMaxMarks[type as keyof typeof config.defaultMaxMarks] || 15;
      if (finalMax < marksVal) finalMax = marksVal;

      subjects.push({
        code: subHeader,
        type,
        marks: marksVal,
        rp: rpVal,
        max: finalMax
      });
    });
  }

  return { subjects, totals: {} };
};
