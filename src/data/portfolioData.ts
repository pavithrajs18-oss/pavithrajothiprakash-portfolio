import {
  PersonalInfo,
  MetricItem,
  WorkflowStep,
  SkillCategory,
  ExperienceItem,
  SelfInitiatedAssignment,
  EducationItem,
  CertificationItem,
  ActivityItem,
  LanguageItem,
  ToolItem,
  WorkSample
} from '../types';

// =========================================================================
// RESUME FILE — UPDATE PATH HERE
// To replace with your actual resume PDF, place it in /public/resume/ and update this path:
// =========================================================================
export const RESUME_URL = "/resume/Pavithra-J-S-Resume.pdf";

// =========================================================================
// PROFILE PHOTO — UPDATE PATH HERE
// Primary photo asset at /public/pavithra-photo.jpg
// =========================================================================
export const PROFILE_PHOTO_URL = "/PASSPORT SIZE COMPRESSED.jpg";

export const personalInfo: PersonalInfo = {
  name: "PAVITHRA J S",
  headline: "ACCOUNTS & AUDIT EXECUTIVE | ACCOUNTING, TAXATION & RECONCILIATION | CA INTERMEDIATE",
  positioning: "Accounting | Audit | Reconciliation | Tax & Compliance | Financial Reporting",
  educationStatus: "B.Com Graduate · CA Intermediate Candidate · M.Com Student",
  location: "Singarapettai, Krishnagiri, Tamil Nadu",
  phone: "9677808801",
  email: "pavithrajs18@gmail.com",
  linkedIn: "https://www.linkedin.com/in/pavithra-jothiprakash-07ba922b9",
  profilePhotoUrl: PROFILE_PHOTO_URL,
  resumeUrl: RESUME_URL,
};

export const heroIntro = 
  "B.Com graduate and CA Intermediate candidate with practical experience in audit support, accounting, reconciliation, asset verification, and financial documentation. Hands-on exposure to bookkeeping, journal entries, ledger posting, trial balance, bank reconciliation, vendor/customer reconciliation, financial statements, GST reconciliation, and tax computation. Experienced in preparing audit working papers, identifying discrepancies, verifying financial records, and coordinating documentation for client assignments. Proficient in MS Excel and Tally Prime, with working exposure to Zoho Books and Google Sheets with strong attention to accuracy, documentation, and deadlines.";

export const snapshotMetrics: MetricItem[] = [
  {
    id: "engagements",
    value: "4",
    label: "Client Engagements",
    detail: "Spanning retail, banking, manufacturing & financial services",
  },
  {
    id: "banking-locations",
    value: "3",
    label: "Banking-Sector Locations",
    detail: "Multi-branch physical asset verification and tagging",
  },
  {
    id: "documents",
    value: "20+",
    label: "Documents Handled",
    detail: "Professional & academic documentation",
    clarification: "Refers to professional and academic documents handled through document-support experience",
  },
  {
    id: "ca-status",
    value: "Ongoing",
    label: "CA Intermediate",
    detail: "Institute of Chartered Accountants of India (ICAI)",
  },
];

export const careerWorkflow: WorkflowStep[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "ACCOUNTING DATA",
    subtitle: "Source Entry & Ledgers",
    description: "Systematic recording of primary transactions, journal entries, and general ledger maintenance."
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "RECONCILIATION",
    subtitle: "Balance Integrity",
    description: "Rigorous bank, vendor, customer, and sub-ledger reconciliations with discrepancy resolution."
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "ANALYSIS",
    subtitle: "Financial Insights",
    description: "Budget vs. actual reviews, variance identification, and AP/AR invoice ageing evaluation."
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "AUDIT / CONTROL REVIEW",
    subtitle: "Vouching & Verification",
    description: "Structured sampling, physical asset verification, and testing internal control adherence."
  },
  {
    id: "step-5",
    stepNumber: "05",
    title: "COMPLIANCE",
    subtitle: "Tax & Statutory Rules",
    description: "GSTR-1, GSTR-2B/3B working papers, ITC qualification under Sec 17(5), and TDS/TCS reconciliations."
  },
  {
    id: "step-6",
    stepNumber: "06",
    title: "REPORTING",
    subtitle: "Actionable Outputs",
    description: "Evidence-backed audit working papers, management dashboards, and compliant financial statements."
  }
];

export const aboutParagraphs = [
  "I am a B.Com graduate and CA Intermediate candidate currently pursuing M.Com, with practical exposure to accounting, audit support, reconciliation, GST working papers and financial documentation.",
  "My experience includes physical asset verification, Fixed Asset Register reconciliation, discrepancy identification, audit working papers, verification reports and compliance documentation across multiple client engagements.",
  "Alongside professional assignments, I have developed structured self-initiated projects covering internal audit and controls review, AP/AR management, end-to-end bookkeeping, GST compliance simulation, and income tax computation.",
  "I am particularly interested in roles where accounting accuracy, reconciliation, audit discipline, financial analysis and compliance come together."
];

export const coreQualities = [
  { title: "Accuracy", desc: "Rigorous focus on ledger precision, arithmetic verification, and error-free computations." },
  { title: "Analytical Thinking", desc: "Evaluating financial trends, variance factors, and root causes of ledger differences." },
  { title: "Attention to Detail", desc: "Meticulous inspection of invoices, vouchers, tax rate classifications, and contracts." },
  { title: "Documentation Discipline", desc: "Organizing verifiable working papers, audit trails, and clear cross-referencing." },
  { title: "Reconciliation Mindset", desc: "Systematic matching of internal registers with bank statements and counterparty ledgers." },
  { title: "Audit-Oriented Thinking", desc: "Evaluating process risks, sampling methodologies, and internal control efficacy." },
  { title: "Financial Discipline", desc: "Respecting cut-off periods, statutory timelines, and conservative accounting principles." },
  { title: "Confidentiality", desc: "Strict safeguarding of sensitive client records, banking details, and payroll data." }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "accounting-bookkeeping",
    title: "ACCOUNTING & BOOKKEEPING",
    shortDesc: "End-to-end accounting cycle and general ledger management",
    skills: [
      "Financial Accounting",
      "Bookkeeping",
      "Journal Entries",
      "General Ledger",
      "Ledger Posting",
      "Trial Balance",
      "Financial Statements",
      "Accruals & Prepayments",
      "Fixed Assets",
      "Depreciation Records",
      "Month-End Closing",
      "Accounts Payable",
      "Accounts Receivable"
    ]
  },
  {
    id: "reconciliation",
    title: "RECONCILIATION",
    shortDesc: "Balance validation, discrepancy tracing, and ledger balancing",
    skills: [
      "Bank Reconciliation",
      "Bank & Credit Card Reconciliation",
      "Vendor Reconciliation",
      "Customer Reconciliation",
      "Ledger Reconciliation",
      "Payment Follow-up",
      "Discrepancy Identification",
      "Discrepancy Resolution",
      "Vendor Balance Confirmation"
    ]
  },
  {
    id: "audit-controls",
    title: "AUDIT & CONTROLS",
    shortDesc: "Audit support, physical verification, and internal control reviews",
    skills: [
      "Audit Support",
      "Audit Documentation",
      "Audit Working Papers",
      "Internal Audit",
      "Internal Controls",
      "Audit Planning",
      "Sampling",
      "Vouching",
      "Verification",
      "Physical Asset Verification",
      "Fixed Asset Verification",
      "Compliance Review",
      "Discrepancy Reporting",
      "Risk-Based Controls Review"
    ]
  },
  {
    id: "tax-compliance",
    title: "TAX & COMPLIANCE",
    shortDesc: "GST working papers, ITC reconciliation, and direct tax computations",
    skills: [
      "GST Compliance",
      "GST Reconciliation",
      "GSTR-1",
      "GSTR-2B Reconciliation",
      "GSTR-3B Working Papers",
      "Input Tax Credit (ITC)",
      "Section 17(5) ITC Provisions",
      "TDS Basics",
      "TDS/TCS Reconciliation",
      "Income Tax Computation",
      "ITR Form Mapping",
      "Old vs New Tax Regime Comparison"
    ]
  },
  {
    id: "financial-analysis",
    title: "FINANCIAL ANALYSIS",
    shortDesc: "Budget monitoring, variance tracking, and management reporting",
    skills: [
      "Budgeting",
      "Budget vs Actual Analysis",
      "Variance Analysis",
      "Invoice Ageing",
      "Financial Monitoring",
      "Financial Analysis",
      "Management Reporting",
      "Dashboard Reporting"
    ]
  },
  {
    id: "excel-spreadsheets",
    title: "EXCEL & SPREADSHEETS",
    shortDesc: "Advanced formulas, reconciliation models, and structured templates",
    skills: [
      "Microsoft Excel",
      "Advanced Excel",
      "SUM",
      "IF",
      "VLOOKUP",
      "XLOOKUP",
      "SUMIFS",
      "Pivot Tables",
      "Sorting & Filtering",
      "Structured Working Papers",
      "Reconciliation Trackers",
      "Google Sheets"
    ]
  },
  {
    id: "accounting-software",
    title: "ACCOUNTING SOFTWARE",
    shortDesc: "Hands-on exposure to standard accounting software systems",
    skills: [
      "Tally Prime",
      "Zoobo Books",
      "Xero",
      "QuickBooks"
    ]
  },
  {
    id: "digital-tools",
    title: "OTHER DIGITAL TOOLS",
    shortDesc: "Documentation, collaboration, and basic data visualization",
    skills: [
      "Microsoft Word",
      "Google Docs",
      "Google Workspace",
      "Power BI"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "audit-assistant",
    role: "Freelance Audit & Reconciliation Assistant",
    organization: "Self-Employed",
    employmentType: "Independent Contractor / Freelance",
    location: "Tamil Nadu, India",
    period: "Dec 2025 – July 2026",
    primaryFocus: true,
    contextNote: "Focused on physical asset verification, Fixed Asset Register reconciliation, audit documentation, and discrepancy reporting under structured audit scopes.",
    responsibilities: [
      "Performed physical asset verification and reconciliation against Fixed Asset Registers (FAR) across 4 client engagements spanning retail, banking, manufacturing, and financial services sectors.",
      "Executed multi-branch asset tagging and verification across 3 locations for a banking-sector client, coordinating fieldwork to meet compliance deadlines.",
      "Identified, investigated, and documented financial discrepancies, asset movements, and verification exceptions, maintaining evidence-backed audit working papers.",
      "Prepared audit working papers, verification reports, supporting documentation, and formal findings in line with client-specific requirements.",
      "Coordinated directly with audit teams to ensure timely completion of audit documentation and compliance deliverables.",
      "Conducted a Mystery Audit for a banking-sector client, evaluating operational and procedural compliance and documenting observations in a structured report.",
      "Maintained accuracy and completeness of supporting evidence throughout audit and reconciliation assignments."
    ]
  },
  {
    id: "document-support",
    role: "Document Typist & Administrative Support",
    organization: "GP Educraft Solutions (Remote, Only on Demand Basis)",
    employmentType: "Remote Contractor",
    location: "Remote",
    period: "Mar 2025 – Present",
    primaryFocus: false,
    contextNote: "Handled professional formatting, typing, and confidential document organization.",
    responsibilities: [
      "Prepared, formatted, proofread, and maintained 20+ professional and academic documents with high accuracy under recurring deadlines.",
      "Maintained organized digital records, version control, confidentiality, and timely completion across multiple assignments."
    ]
  }
];

// =========================================================================
// SELF-INITIATED ASSIGNMENTS (EXACTLY 5)
// Clear distinction: simulated practical projects developed to build competency
// =========================================================================
export const selfInitiatedAssignments: SelfInitiatedAssignment[] = [
  {
    id: "assignment-01",
    number: "01",
    title: "INTERNAL AUDIT & RISK-BASED CONTROLS REVIEW",
    shortDescription:
      "Performed audit planning, sampling, vouching and verification, prepared audit working papers, identified control exceptions, and documented risk-rated findings with recommendations.",
    detailedOverview:
      "A structured internal audit exercise conducted on a simulated operational unit to examine internal control adequacy, procedural compliance, and risk containment. The assignment walked through planning, sample selection, substantive vouching against documentary evidence, physical verification protocols, and recording deviations.",
    relevantSkills: [
      "Audit Planning",
      "Sampling",
      "Vouching",
      "Verification",
      "Internal Controls",
      "Risk Assessment",
      "Audit Working Papers",
      "Recommendations"
    ],
    tools: ["MS Excel", "Structured Audit Working Papers", "Internal Control Questionnaires"],
    methodologyFocus: [
      "Formulation of audit checklists based on key operational risk areas.",
      "Representative sampling of vouchers across authorization thresholds.",
      "Verification of documentary audit trails (purchase orders, delivery notes, approvals).",
      "Formulation of actionable, risk-graded audit recommendations."
    ],
    documentationDeliverables: [
      "Comprehensive Audit Working Paper (AWP) file",
      "Exception & Control Deviation Register",
      "Executive Audit Summary with Risk-Rated Findings"
    ]
  },
  {
    id: "assignment-02",
    number: "02",
    title: "AP/AR MANAGEMENT & FINANCIAL ANALYSIS DASHBOARD",
    shortDescription:
      "Built Excel-based Accounts Payable and Receivable trackers covering invoice ageing, vendor/customer reconciliation, payment follow-up, month-end adjustments, budget-vs-actual analysis, and dashboard reporting.",
    detailedOverview:
      "An end-to-end working model built in Microsoft Excel to manage working capital cycles across payables and receivables. Features dynamic ageing brackets (0-30, 31-60, 61-90, 90+ days), reconciliation schedules, automated overdue follow-up schedules, and variance analysis between monthly budgets and actuals.",
    relevantSkills: [
      "Accounts Payable",
      "Accounts Receivable",
      "Invoice Ageing",
      "Reconciliation",
      "Payment Follow-up",
      "Month-End Adjustments",
      "Budget vs Actual",
      "Financial Analysis",
      "Dashboard Reporting",
      "Excel"
    ],
    tools: ["Microsoft Excel", "Pivot Tables", "SUMIFS / XLOOKUP", "Conditional Formatting"],
    methodologyFocus: [
      "Design of structured AP/AR invoice logs with strict validation rules.",
      "Automated calculation of ageing buckets to monitor working capital lock-up.",
      "Vendor and customer statement reconciliation matching protocols.",
      "Visual variance reporting for revenue and expenditure vs. operational budgets."
    ],
    documentationDeliverables: [
      "Dynamic AP & AR Invoice Trackers with Ageing Analysis",
      "Vendor / Customer Reconciliation Statement Templates",
      "Budget vs. Actual Variance Analytical Dashboard"
    ]
  },
  {
    id: "assignment-03",
    number: "03",
    title: "END-TO-END BOOKKEEPING & FINANCIAL STATEMENTS",
    shortDescription:
      "Completed the accounting cycle from journal entries and ledger posting to Trial Balance, Bank Reconciliation, vendor/customer reconciliation, fixed assets, and financial statements using Tally Prime and Excel.",
    detailedOverview:
      "A comprehensive simulation of a complete financial accounting year for a commercial entity. Starting from source documents, recording compound journal entries, posting to sub-ledgers and general ledger, performing periodic bank reconciliations, recording depreciation and month-end accruals, culminating in a balanced Trial Balance and standard Financial Statements.",
    relevantSkills: [
      "Bookkeeping",
      "Journal Entries",
      "Ledger Posting",
      "Trial Balance",
      "Bank Reconciliation",
      "Vendor Reconciliation",
      "Customer Reconciliation",
      "Fixed Assets",
      "Financial Statements",
      "Tally Prime",
      "Excel"
    ],
    tools: ["Tally Prime", "Microsoft Excel", "BRS Worksheets"],
    methodologyFocus: [
      "Classification of transactions across Assets, Liabilities, Equity, Income, and Expense.",
      "Periodic Bank Reconciliation Statement (BRS) reconciling timing differences and uncredited items.",
      "Fixed asset schedule maintenance with straight-line/written-down value depreciation entries.",
      "Compilation of Balance Sheet and Profit & Loss Statement adhering to standard accounting principles."
    ],
    documentationDeliverables: [
      "Primary Books of Account (Day Book, Cash/Bank Book, General Ledger)",
      "Bank Reconciliation Statements with reconciling item notes",
      "Summarized Trial Balance and Draft Financial Statements"
    ]
  },
  {
    id: "assignment-04",
    number: "04",
    title: "GST COMPLIANCE & RETURN FILING SIMULATION",
    shortDescription:
      "Prepared sales and purchase registers, simulated GSTR-1 and GSTR-3B, reconciled GSTR-2B with purchase records, computed eligible ITC, and applied Section 17(5) provisions.",
    detailedOverview:
      "A practical simulation of the Goods and Services Tax (GST) monthly compliance workflow for a registered taxpayer. Covered preparation of outward supplies registers, table-wise summary mapping for GSTR-1, detailed matching of inward invoices with auto-drafted GSTR-2B data, identification of unmatched entries, and computation of eligible Input Tax Credit (ITC) after applying blocked credit provisions under Section 17(5).",
    relevantSkills: [
      "GST",
      "GSTR-1",
      "GSTR-2B",
      "GSTR-3B",
      "ITC",
      "GST Reconciliation",
      "Section 17(5)",
      "Tax Compliance"
    ],
    tools: ["Microsoft Excel", "GST Reconciliation Models", "VLOOKUP / XLOOKUP"],
    methodologyFocus: [
      "Preparation of outward supply registers classified by B2B, B2C, and exempt supplies.",
      "Rigorous 2B vs. Purchase Register reconciliation categorizing matched, mismatched, and supplier-missing invoices.",
      "Detailed analysis and segregation of ineligible ITC under Section 17(5) of the CGST Act.",
      "Drafting working papers for GSTR-3B monthly tax liability computation and offset."
    ],
    documentationDeliverables: [
      "Outward Supplies (GSTR-1) Mapping Sheet",
      "GSTR-2B vs. Purchase Register Reconciliation Tracker",
      "Eligible vs. Ineligible ITC Calculation Worksheet (Sec 17(5))",
      "GSTR-3B Working Computation Summary"
    ]
  },
  {
    id: "assignment-05",
    number: "05",
    title: "INCOME TAX COMPUTATION & RETURN FILING",
    shortDescription:
      "Computed taxable income and tax liability across Salary, House Property, PGBP, and Capital Gains, including deductions, old vs. new regime comparison, TDS/TCS reconciliation, and ITR form mapping.",
    detailedOverview:
      "A comprehensive direct tax case assignment calculating total income and net tax liability for individual assessees with diverse income streams. Handled calculations under Salary (exempt allowances, standard deduction), House Property (NAV, interest on housing loan), Profits & Gains from Business or Profession (PGBP), and Capital Gains, followed by Chapter VI-A deductions, a comparative tax computation under Old vs. New Tax Regimes (Section 115BAC), Form 26AS / AIS reconciliation, and mapping to appropriate ITR forms.",
    relevantSkills: [
      "Income Tax",
      "Salary",
      "House Property",
      "PGBP",
      "Capital Gains",
      "Deductions",
      "Old vs New Regime",
      "TDS/TCS Reconciliation",
      "ITR Form Mapping"
    ],
    tools: ["Microsoft Excel", "Income Tax Computation Sheets", "Tax Slabs Formula Models"],
    methodologyFocus: [
      "Classification of income under appropriate heads with applicable statutory deductions.",
      "Side-by-side comparative tax modeling evaluating Old Regime vs. New Regime (Section 115BAC).",
      "Reconciliation of tax credits against Form 26AS and Annual Information Statement (AIS).",
      "Determination of applicable ITR forms (ITR-1, ITR-2, ITR-3) based on income composition."
    ],
    documentationDeliverables: [
      "Statement of Total Income and Tax Liability",
      "Old vs. New Tax Regime Comparative Computation Schedule",
      "TDS/TCS Reconciliation Workpaper against Form 26AS",
      "ITR Form Applicability Checklist"
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "mcom",
    degree: "Master of Commerce (M.Com)",
    institution: "Institute of Distance Education, University of Madras",
    period: "June 2026 – Present",
    status: "Ongoing",
    note: "Advanced studies in commerce, corporate accounting, and financial management."
  },
  {
    id: "ca-inter",
    degree: "CA Intermediate",
    institution: "Institute of Chartered Accountants of India (ICAI)",
    period: "August 2023 – Present",
    status: "Ongoing",
    note: "Professional program covering Accounting, Corporate Laws, Taxation, Costing, Auditing, and Financial Management."
  },
  {
    id: "bcom",
    degree: "Bachelor of Commerce (B.Com)",
    institution: "Institute of Distance Education, University of Madras",
    period: "June 2022 – June 2025",
    status: "Completed",
    grade: "CGPA: 7.05 / 10",
    note: "Core grounding in financial accounting, corporate accounting, business law, and commercial mathematics."
  },
  {
    id: "ca-foundation",
    degree: "CA Foundation",
    institution: "Institute of Chartered Accountants of India (ICAI)",
    period: "June 2023",
    status: "Passed",
    note: "Entry qualification covering Accounting Principles, Business Laws, Mathematics, and Economics."
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "icai-orientation",
    title: "ICAI Orientation Programme",
    issuer: "Institute of Chartered Accountants of India (ICAI)",
    type: "training"
  },
  {
    id: "icitss",
    title: "ICITSS (Integrated Course on Information Technology and Soft Skills)",
    issuer: "Institute of Chartered Accountants of India (ICAI)",
    type: "training"
  }
];

export const activitiesData: ActivityItem[] = [
  {
    id: "sicasa",
    title: "Volunteer & Participant",
    organization: "ICAI Student (SICASA) Conferences",
    detail: "Actively engaged in technical seminars, student development initiatives, and accounting study circles."
  },
  {
    id: "aarohana",
    title: "World Record Participation Event",
    organization: "Aarohana 2025 CA Student’s National Conference",
    detail: "World Record Participation in professional youth conference celebrating knowledge and leadership."
  },
  {
    id: "madugam",
    title: "Master of Ceremony (MOC)",
    organization: "Madugam 2026, CA Student’s Mega Conference",
    detail: "Hosted and facilitated flagship student mega conference sessions for aspiring Chartered Accountants."
  }
];

export const languagesData: LanguageItem[] = [
  { language: "English", proficiency: "Professional Working", levelBadge: "Professional" },
  { language: "Tamil", proficiency: "Native", levelBadge: "Native" },
  { language: "Telugu", proficiency: "Native", levelBadge: "Native" },
  { language: "Hindi", proficiency: "Elementary", levelBadge: "Elementary" }
];

export const toolsData: ToolItem[] = [
  { name: "Tally Prime", category: "Accounting Software", focus: "Voucher entries, inventory, ledger accounts & trial balance" },
  { name: "Zoho Books", category: "Accounting Software", focus: "Cloud invoicing, payables/receivables & GST tracking" },
  { name: "Xero", category: "Accounting Software", focus: "Cloud bookkeeping, bank reconciliation & management reporting" },
  { name: "QuickBooks", category: "Accounting Software", focus: "General ledger posting, billing & vendor management" },
  { name: "Microsoft Excel", category: "Spreadsheets & Analytics", focus: "XLOOKUP, SUMIFS, Pivot Tables, Ageing schedules & BRS" },
  { name: "Google Sheets", category: "Spreadsheets & Analytics", focus: "Collaborative tracking sheets & cloud reporting templates" },
  { name: "Microsoft Word", category: "Documentation", focus: "Audit documentation, formal verification reports & correspondence" },
  { name: "Google Docs", category: "Documentation", focus: "Collaborative documentation, report drafts & review tracking" },
  { name: "Google Workspace", category: "Productivity", focus: "Cloud file organization, calendar & communications" },
  { name: "Power BI", category: "Data Visualization", focus: "Introductory financial reports & metric visualizers" }
];

// =========================================================================
// WORK SAMPLES
// Reserved for user-uploaded working papers, spreadsheets, and audit artifacts.
// =========================================================================
export const defaultWorkSamples: WorkSample[] = [];

export const futureWorkSamples: WorkSample[] = [];

export const futureWorkSampleCategories = [
  "All Categories",
  "Audit Documentation",
  "Excel Working Papers",
  "GST Working Papers",
  "Financial Dashboards",
  "Accounting Workbooks",
  "Reports"
];
