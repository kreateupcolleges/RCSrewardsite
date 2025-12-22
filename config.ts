
import { BatchConfig } from './types';

/**
 * ============================================================================
 *  INSTITUTION CONFIGURATION
 *  Update this section to customize the portal for your college.
 * ============================================================================
 */
export const INSTITUTION_CONFIG = {
  // Display Name appearing in the Header
  name: "RCS Portal", 
  
  // URL to the college logo (Direct link to image)
  // Using Google Drive ID: 1jKlSs6QDTSQuf0LlZ9Yu5rPZVIv8G-oM
  // We use the 'thumbnail' endpoint with size parameter (sz=w500) as it is reliable for embedding.
  logoUrl: "https://drive.google.com/thumbnail?id=1jKlSs6QDTSQuf0LlZ9Yu5rPZVIv8G-oM&sz=w500" 
};

/**
 *  ADMIN AUTHENTICATION SHEET
 *  Sheet containing columns: Email Address, Password, Name, Department
 */
export const ADMIN_AUTH_CONFIG = {
  id: "1rkHuqB0EgAhdJhs15O_kZzVjJ2HfqQNPeI1NEqQQ67Y",
  name: "Admin_Credentials"
};


/**
 * ============================================================================
 *  ACADEMIC DATA CONFIGURATION
 *  Manage Sheets, Batches, and Subject Definitions here.
 * ============================================================================
 */

export const BATCHES: BatchConfig[] = [
  {
    id: 'batch-2025-2028',
    label: 'Batch 2025 - 2028 (1st Year)',
    rewardSheets: {
      IP1: { id: "1SjZM-7RS3W4t_fideh5cRFr36PPI7RpraIiLXHVYpX4", name: "RCS_1styear_IP1_RewardsSplit" },
      IP2: { id: "1cJc1Vc2PSAo6-SEcXlcsZadYqhUlGJSX_8R4jUnjzHA", name: "RCS_1styear_IP2_RewardsSplit" }
    },
    internalMarksSheets: {
      IP1: {
        "B.Sc  AIML": { id: "1CGE8KivSD-Rt-LjBm21ln3VOPsfuK1_rw87eH7i0JBk", name: "B.Sc  AIML" },
        "B.Sc  CS with AI": { id: "1KBx6BkJVBx4pJvn5rMSUw4Uql-Lvkp1r8V13EIIIUuM", name: "B.Sc  CS with AI" },
        "B.Sc CS": { id: "1t4vis7wBV7GsfFSMIV3zjyGS3m9NXOWCt-hNXKRabMA", name: "B.Sc CS" },
        "B.Sc DCFS": { id: "1bHrKLS2-sDcTKaQ3MaNN4BzHlrLM2Bb0waE839XGeAY", name: "B.Sc DCFS" },
        "B.Sc DS": { id: "1REu8iGo0gUzLfKlmLpU4Rl1ffdWwp38ar7Hu0-BUU8s", name: "B.Sc DS" },
        "B.Sc DSA": { id: "1OIuwHVlEYxxC6ZF-H6A264qU0utpYS72o_1PHZGn5Tc", name: "B.Sc DSA" },
        "B.Sc IT": { id: "1ZhgQe-wUxZYGwb5GT8wtVRcXIP6uO8vs-j3LCE2TLpo", name: "B.Sc IT" }
      },
      IP2: {
        "B.Sc  AIML": { id: "1eHcJZfiiu9lam-7a4baHew0qT_zTwuwa8DaQLH_mxp4", name: "B.Sc  AIML" },
        "B.Sc  CS with AI": { id: "1Z1iK7UpOCj3AkB8eGF0O5P2Chhf4p5oDar2mhStX96s", name: "B.Sc  CS with AI" },
        "B.Sc CS": { id: "1w-9Nxy6X1pMTB-I5-XmfML-3_mojk821GU8YTOXozsU", name: "B.Sc CS" },
        "B.Sc DCFS": { id: "1sUdFzj8_LXS3NGAnrRzyg7dLodeuUMntv6tQgjy94rM", name: "B.Sc DCFS" },
        "B.Sc DS": { id: "1usnswuhn5E3kN4tEa4kRrsc_HPCXwSchnx58-XioTEk", name: "B.Sc DS" },
        "B.Sc DSA": { id: "1v_ucgOpVWSO5zf-BUnaKGsBw-3YV50Z1Kiln_r593pg", name: "B.Sc DSA" },
        "B.Sc IT": { id: "1BZ9VS712RmF9R6MgxJZWwPiKmOWyVe9X8HKAzoacym4", name: "B.Sc IT" }
      }
    },
    semesters: {
      "1": { label: "Semester 1", internals: ["IP1", "IP2"] }
    },
    // Configuration for Subjects and Max Marks
    subjectConfig: {
      defaultMaxMarks: {
        Theory: 15,
        Lab: 15,
        "Lab + Theory": 15
      },
      departments: {
        "B.Sc CS": [
          { code: "25BCS1CA", type: "Theory", maxMarks: 15 },
          { code: "25BCS1CP", type: "Lab", maxMarks: 15 },
          { code: "25BCS1AA", type: "Theory", maxMarks: 15 },
          { code: "25BCS1ZA", type: "Theory", maxMarks: 15 },
          { code: "25BCS11T", type: "Theory", maxMarks: 15 },
          { code: "25BCS12E", type: "Theory", maxMarks: 15 }
        ],
        "B.Sc  CS with AI": [
          { code: "25BAR1CA", type: "Theory", maxMarks: 15 },
          { code: "25BAR1CP", type: "Lab", maxMarks: 15 },
          { code: "25BAR1AA", type: "Theory", maxMarks: 15 },
          { code: "25BAR1ZA", type: "Theory", maxMarks: 15 },
          { code: "25BCS11T", type: "Theory", maxMarks: 15 },
          { code: "25BCS12E", type: "Theory", maxMarks: 15 }
        ],
        "B.Sc  AIML": [
          { code: "25BAM1CA", type: "Theory", maxMarks: 15 },
          { code: "25BAM1CP", type: "Lab", maxMarks: 15 },
          { code: "25BAM1AA", type: "Theory", maxMarks: 15 },
          { code: "25BAM1ZA", type: "Theory", maxMarks: 15 },
          { code: "25BCS11T", type: "Theory", maxMarks: 15 },
          { code: "25BCS12E", type: "Theory", maxMarks: 15 }
        ],
        "B.Sc DSA": [
          { code: "25BDA1CA", type: "Theory", maxMarks: 15 },
          { code: "25BDA1CP", type: "Lab", maxMarks: 15 },
          { code: "25BDA1AA", type: "Theory", maxMarks: 15 },
          { code: "25BDA1ZA", type: "Theory", maxMarks: 15 },
          { code: "25BCS11T", type: "Theory", maxMarks: 15 },
          { code: "25BCS12E", type: "Theory", maxMarks: 15 }
        ],
        "B.Sc DS": [
          { code: "25BDS1CA", type: "Theory", maxMarks: 15 },
          { code: "25BDS1CP", type: "Lab", maxMarks: 15 },
          { code: "25BDS1AA", type: "Theory", maxMarks: 15 },
          { code: "25BDS1ZA", type: "Theory", maxMarks: 15 },
          { code: "25BCS11T", type: "Theory", maxMarks: 15 },
          { code: "25BCS12E", type: "Theory", maxMarks: 15 }
        ],
        "B.Sc IT": [
          { code: "25BIT1CA", type: "Theory", maxMarks: 15 },
          { code: "25BIT1CP", type: "Lab", maxMarks: 15 },
          { code: "25BIT1AA", type: "Theory", maxMarks: 15 },
          { code: "25BIT1ZA", type: "Theory", maxMarks: 15 },
          { code: "25BCS11T", type: "Theory", maxMarks: 15 },
          { code: "25BCS12E", type: "Theory", maxMarks: 15 }
        ],
        "B.Sc DCFS": [
          { code: "25BDC1CA", type: "Theory", maxMarks: 15 },
          { code: "25BDC1CP", type: "Lab", maxMarks: 15 },
          { code: "25BDC1AA", type: "Theory", maxMarks: 15 },
          { code: "25BDC1ZA", type: "Theory", maxMarks: 15 },
          { code: "25BCS11T", type: "Theory", maxMarks: 15 },
          { code: "25BCS12E", type: "Theory", maxMarks: 15 }
        ]
      }
    }
  },
];

export const CATEGORY_CODES = ['CD', 'PCDP', 'SM', 'AC', 'RPA', 'SPL', 'OT'];
export const SYSTEM_HEADER_LABELS = ["email address", "name", "register no", "department", "total"];
