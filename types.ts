
export interface Student {
  [key: string]: string | number;
}

export interface SheetConfig {
  id: string;
  name: string; // The tab name in Google Sheets
}

export interface InternalSheetConfig {
  [department: string]: SheetConfig;
}

// Configuration for a specific subject
export interface SubjectRule {
  code: string;
  type: 'Theory' | 'Lab' | 'Lab + Theory';
  maxMarks: number;
}

// Configuration for subjects within a batch
export interface BatchSubjectConfig {
  // Default max marks if a specific subject isn't found
  defaultMaxMarks: {
    Theory: number;
    Lab: number;
    "Lab + Theory": number;
  };
  // Specific definitions per department
  departments: {
    [deptName: string]: SubjectRule[];
  };
}

export interface BatchConfig {
  id: string;
  label: string;
  rewardSheets: {
    [internalId: string]: SheetConfig;
  };
  internalMarksSheets: {
    [internalId: string]: InternalSheetConfig;
  };
  // New: Configuration for parsing marks
  subjectConfig: BatchSubjectConfig;
  // New: Semester definitions
  semesters: {
    [semesterId: string]: {
      label: string;
      internals: string[]; // e.g. ["IP1", "IP2"]
    };
  };
}

export interface ActivityRow {
  headerName: string;
  displayName: string;
  dateStart: string;
  dateEnd: string;
  forWho: string;
  year: string;
  category: string;
  maxPoints: number | null;
  points: number;
}

export interface SubjectMark {
  code: string;
  type: string;
  marks: number;
  rp: number;
  max: number;
}

export interface SearchParams {
  batchId: string;
  semesterId: string;
  internalId: string; // Used as "Scope"
  regNo: string;
  email: string;
  name: string;
  department: string;
  activity: string;
}

export interface Stats {
  avgPoints: number;
  studentPoints: number;
  remainingPoints: number;
}
