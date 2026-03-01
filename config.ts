
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
 *  ELITE STUDENT AUTHENTICATION SHEET
 *  Sheet containing columns: Email Address, Name, Register No, Department, Password
 */
export const ELITE_AUTH_CONFIG = {
  id: "1nIkD73XZ9uykJ_LRJM0GGBJCd73nUh0_xf2-_PGKeVI",
  name: "Sheet1" 
};


/**
 * ============================================================================
 *  ACADEMIC DATA CONFIGURATION
 *  Manage Sheets, Batches, and Subject Definitions here.
 * ============================================================================
 */

export const BATCHES: BatchConfig[] = [
  // --------------------------------------------------------------------------
  // BATCH 1: 2025 - 2028 (1st Year)
  // --------------------------------------------------------------------------
  {
    id: 'batch-2025-2028',
    label: 'Batch 2025 - 2028 (1st Year)',
    semesters: {
      "1": { 
        label: "Semester 1", 
        internals: ["IP1", "IP2"],
        
        // --- SEMESTER 1 SHEETS ---
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

        // --- SEMESTER 1 SUBJECTS ---
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
        // --- END SEMESTER 1 ---
              // ============================================================
      // SEMESTER 2 (NEW — SAMPLE DATA, CHANGE SHEET IDs)
      // ============================================================

      "2": {

        label: "Semester 2",

        internals: ["IP1", "IP2"],

        rewardSheets: {

          IP1: {
            id: "1cByligzZTzKQQgJA1KTkiEHT1ggeFLibdoFJdHXI4Bw",
            name: "Semester2_IP1_Rewards"
          },

          IP2: {
            id: "PASTE_SEM2_IP2_REWARD_SHEET_ID",
            name: "Semester2_IP2_Rewards"
          }

        },


        internalMarksSheets: {

        IP1: {
            "B.Sc  AIML": { id: "1fX3C0pqWoJ1NtxpH2TT8kRCrJwOZnQ1IumxifGgnr8Q", name: "B.Sc  AIML" },
            "B.Sc  CS with AI": { id: "14a6Wad24n2yGvuuJE1W8qMkvKqzbG9C24dGrnmaJZMI", name: "B.Sc  CS with AI" },
            "B.Sc CS": { id: "134Xxcovbetu9Ftp0byVoHlcVUNlz6t6OKpnbKI1ISHw", name: "B.Sc CS" },
            "B.Sc DCFS": { id: "1j9EYqC52mTdVymkuSpphqVJJ_Tb1xFVwc2U2oBO_mLY", name: "B.Sc DCFS" },
            "B.Sc DS": { id: "1iWG670KusT54z5nj_UoWldhsm9XJGmf4w-rmjPwEfoc", name: "B.Sc DS" },
            "B.Sc DSA": { id: "1toZUWr1dfEknSrWIl65FLyV24VnXs5nzXVFQJBHs9VY", name: "B.Sc DSA" },
            "B.Sc IT": { id: "1yFS1h8Xd3c0JozHspL81sDdj6iIm0yriqCg0FewlteM", name: "B.Sc IT" }
          },


          IP2: {

            "B.Sc CS": {
              id: "PASTE_SEM2_IP2_CS_INTERNAL_SHEET_ID",
              name: "B.Sc CS"
            },

            "B.Sc IT": {
              id: "PASTE_SEM2_IP2_IT_INTERNAL_SHEET_ID",
              name: "B.Sc IT"
            }

          }

        },


        subjectConfig: {

          defaultMaxMarks: {
            Theory: 15,
            Lab: 15,
            "Lab + Theory": 15
          },

          departments: {

            "B.Sc CS": [
    { code: "25BCS2CA", type: "Theory", maxMarks: 15 },
    { code: "25BCS2CP", type: "Lab", maxMarks: 15 },
    { code: "25BCS2AA", type: "Theory", maxMarks: 15 },
    { code: "25BCS2EA", type: "Theory", maxMarks: 15 },
    { code: "25BCS21T", type: "Theory", maxMarks: 15 },
    { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  ],

  "B.Sc  CS with AI": [
    { code: "25BAR2CA", type: "Theory", maxMarks: 15 },
    { code: "25BAR2CP", type: "Lab", maxMarks: 15 },
    { code: "25BAR2AA", type: "Theory", maxMarks: 15 },
    { code: "25BAR2EA", type: "Theory", maxMarks: 15 },
    { code: "25BCS21T", type: "Theory", maxMarks: 15 },
    { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  ],

  "B.Sc  AIML": [
    { code: "25BAM2CA", type: "Theory", maxMarks: 15 },
    { code: "25BAM2CP", type: "Lab", maxMarks: 15 },
    { code: "25BAM2AA", type: "Theory", maxMarks: 15 },
    { code: "25BAM2EA", type: "Theory", maxMarks: 15 },
    { code: "25BCS21T", type: "Theory", maxMarks: 15 },
    { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  ],

  "B.Sc DSA": [
    { code: "25BDA2CA", type: "Theory", maxMarks: 15 },
    { code: "25BDA2CP", type: "Lab", maxMarks: 15 },
    { code: "25BDA2AA", type: "Theory", maxMarks: 15 },
    { code: "25BDA2EA", type: "Theory", maxMarks: 15 },
    { code: "25BCS21T", type: "Theory", maxMarks: 15 },
    { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  ],

  "B.Sc DS": [
    { code: "25BDS2CA", type: "Theory", maxMarks: 15 },
    { code: "25BDS2CP", type: "Lab", maxMarks: 15 },
    { code: "25BDS2AA", type: "Theory", maxMarks: 15 },
    { code: "25BDS2EA", type: "Theory", maxMarks: 15 },
    { code: "25BCS21T", type: "Theory", maxMarks: 15 },
    { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  ],

  "B.Sc IT": [
    { code: "25BIT2CA", type: "Theory", maxMarks: 15 },
    { code: "25BIT2CP", type: "Lab", maxMarks: 15 },
    { code: "25BIT2AA", type: "Theory", maxMarks: 15 },
    { code: "25BIT2EA", type: "Theory", maxMarks: 15 },
    { code: "25BCS21T", type: "Theory", maxMarks: 15 },
    { code: "25BCS22E", type: "Theory", maxMarks: 15 }
    
  ],
  "B.Sc DCFS": [
    { code: "25BDC2CA", type: "Theory", maxMarks: 15 },
    { code: "25BDC2CP", type: "Lab", maxMarks: 15 },
    { code: "25BDC2AA", type: "Theory", maxMarks: 15 },
    { code: "25BDC2EA", type: "Theory", maxMarks: 15 },
    { code: "25BCS21T", type: "Theory", maxMarks: 15 },
    { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  ]
          }

        }
        
      }
    }
  },

  // ============================================================================
  //  INSTRUCTIONS FOR ADDING A NEW BATCH
  //  1. Copy the entire block below (starting from { id: 'batch-2024-2027', ... }).
  //  2. Paste it at the top or bottom of the BATCHES array.
  //  3. Update the 'id' (must be unique) and 'label'.
  //  4. Define the 'semesters' relevant for that batch (e.g., Semester 3, 4).
  //  5. Update the Sheet IDs and Subject Configs for that specific batch.
  // ============================================================================

  // --------------------------------------------------------------------------
  // BATCH 2: 2024 - 2027 (2nd Year) - DUMMY DATA EXAMPLE
  // --------------------------------------------------------------------------
  {
    id: 'batch-2024-2027',
    label: 'Batch 2024 - 2027 (2nd Year)',
    semesters: {
      "3": { 
        label: "Semester 3", 
        internals: ["IP1", "IP2"],
        
        // Reward Sheets for 2nd Year (using dummy IDs from 1st year for demo)
        rewardSheets: {
          "IP1": { id: "1SjZM-7RS3W4t_fideh5cRFr36PPI7RpraIiLXHVYpX4", name: "RCS_1styear_IP1_RewardsSplit" },
          "IP2": { id: "1cJc1Vc2PSAo6-SEcXlcsZadYqhUlGJSX_8R4jUnjzHA", name: "RCS_1styear_IP2_RewardsSplit" }
        },
        
        // Internal Marks for 2nd Year
        internalMarksSheets: {
          "IP1": {
            // Add other departments here...
            "B.Sc CS": { id: "1t4vis7wBV7GsfFSMIV3zjyGS3m9NXOWCt-hNXKRabMA", name: "B.Sc CS" },
            "B.Sc IT": { id: "1ZhgQe-wUxZYGwb5GT8wtVRcXIP6uO8vs-j3LCE2TLpo", name: "B.Sc IT" }
          }
        },

        // Subjects for 2nd Year, Semester 3
        subjectConfig: {
          defaultMaxMarks: {
            Theory: 50,
            Lab: 50,
            "Lab + Theory": 50
          },
          departments: {
            "B.Sc CS": [
              { code: "24BCS301", type: "Theory", maxMarks: 50 },
              { code: "24BCS302", type: "Lab", maxMarks: 50 },
              { code: "24BCS303", type: "Lab + Theory", maxMarks: 100 }
            ],
            "B.Sc IT": [
              { code: "24BIT301", type: "Theory", maxMarks: 50 },
              { code: "24BIT302", type: "Lab", maxMarks: 50 }
            ]
          }
        }
      }
    }
  }
];

export const CATEGORY_CODES = ['CD', 'PCDP', 'SM', 'AC', 'RPA', 'SPL', 'OT'];
export const SYSTEM_HEADER_LABELS = ["email address", "name", "register no", "department", "total"];
