export interface PersonalInfo {
  name: string;
  headline: string;
  positioning: string;
  educationStatus: string;
  location: string;
  phone: string;
  email: string;
  linkedIn: string;
  profilePhotoUrl: string;
  resumeUrl: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  detail?: string;
  clarification?: string;
}

export interface WorkflowStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  shortDesc: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  employmentType: string;
  location: string;
  period: string;
  primaryFocus: boolean;
  responsibilities: string[];
  contextNote?: string;
}

export interface SelfInitiatedAssignment {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedOverview: string;
  relevantSkills: string[];
  tools: string[];
  methodologyFocus: string[];
  documentationDeliverables: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  grade?: string;
  note?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  type: 'certification' | 'training';
}

export interface ActivityItem {
  id: string;
  title: string;
  organization: string;
  detail: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  levelBadge: string;
}

export interface ToolItem {
  name: string;
  category: string;
  focus: string;
}

export interface WorkSample {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  image?: string;
  fileUrl?: string;
  fileName?: string;
  fileType?: string;
  fileSize?: string;
  date?: string;
  tags?: string[];
  isCustomUploaded?: boolean;
  workingPaperId?: string;
}

export interface AuditTick {
  symbol: string;
  name: string;
  meaning: string;
  usageContext: string;
}

export interface WorkingPaperRow {
  [key: string]: string | number | boolean | null | undefined;
}

export interface WorkingPaperSheet {
  id: string;
  wpRef: string;
  title: string;
  shortTitle: string;
  category: 'Banking & Cash' | 'GST & Taxation' | 'Fixed Assets' | 'Receivables & Ageing' | 'Vouching & Audit Testing';
  objective: string;
  standardRef: string;
  preparedBy: string;
  reviewedBy: string;
  auditPeriod: string;
  materialityThreshold?: string;
  headers: string[];
  columnAlign?: ('left' | 'center' | 'right')[];
  rows: WorkingPaperRow[];
  totals?: { [key: string]: string | number };
  auditTicksUsed: string[];
  findings?: string[];
  formulaNotes?: string[];
}

