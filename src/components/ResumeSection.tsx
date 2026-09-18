import React, { useState } from 'react';
import {
  FileText,
  Download,
  Printer,
  Copy,
  Check,
  ExternalLink,
  Layers,
  ChevronRight,
  Sparkles,
  Award,
  GraduationCap,
  Briefcase,
  FolderKanban,
  FileSpreadsheet
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState<'both' | 'page1' | 'page2' | 'text'>('both');
  const [copied, setCopied] = useState(false);

  const fullResumePlainText = `PAVITHRA J S
ACCOUNTS & AUDIT EXECUTIVE | ACCOUNTING, TAXATION & RECONCILIATION | CA INTERMEDIATE
Singarapettai, Krishnagiri, Tamil Nadu | 9677808801 | pavithrajs18@gmail.com | https://www.linkedin.com/in/pavithra-jothiprakash-07ba922b9

PROFESSIONAL SUMMARY
B.Com graduate and CA Intermediate candidate with practical experience in audit support, accounting, reconciliation, asset verification, and financial documentation. Hands-on exposure to bookkeeping, journal entries, ledger posting, trial balance, bank reconciliation, vendor/customer reconciliation, financial statements, GST reconciliation, and tax computation. Experienced in preparing audit working papers, identifying discrepancies, verifying financial records, and coordinating documentation for client assignments. Proficient in MS Excel and Tally Prime, with working exposure to Zoho Books and Google Sheets with strong attention to accuracy, documentation, and deadlines.

CORE SKILLS
• Accounting & Bookkeeping: Financial Accounting, Bookkeeping, Journal Entries, General Ledger, Trial Balance, Financial Statements, Bank Reconciliation, Vendor Reconciliation, Customer Reconciliation, Accounts Payables and Receivables.
• Audit & Verification: Internal Audit, Audit Procedures, Audit Working Papers, Audit Documentation, Risk-Based Audit, Physical Asset Verification, Fixed Asset Verification, Asset Reconciliation, Sampling, Vouching, Verification, Compliance Review, Discrepancy Identification & Reporting
• Tax & Compliance: GST Compliance, GST Reconciliation, GSTR-1, GSTR-2B Reconciliation, GSTR-3B Working Papers, Input Tax Credit, Section 17(5) ITC Rules, TDS Basics, Income Tax Basics
• Excel & Digital Tools: MS Excel, VLOOKUP, Pivot Tables, SUM, IF, Sorting & Filtering, Google Sheets, Google Workspace, Structured Working Papers, Reconciliation Trackers
• Accounting Software: Tally Prime, Zoho Books; Xero, QuickBooks (Extending Knowledge)
• Professional Skills: Client Coordination, Analytical Thinking, Attention to Detail, Documentation, Deadline Management, Independent Working, Team Collaboration, Confidentiality.

EXPERIENCE
Freelance Audit & Reconciliation Assistant | Self-Employed (Dec 2025 – July 2026)
• Performed physical asset verification and reconciliation against Fixed Asset Registers (FAR) across 4 client engagements spanning retail, banking, manufacturing, and financial services sectors.
• Executed multi-branch asset tagging and verification across 3 locations for a banking-sector client, coordinating fieldwork to meet compliance deadlines.
• Identified, investigated, and documented financial discrepancies, asset movements, and verification exceptions, maintaining evidence-backed audit working papers.
• Prepared audit working papers, verification reports, supporting documentation, and formal findings in line with client-specific requirements.
• Coordinated directly with audit teams to ensure timely completion of audit documentation and compliance deliverables.
• Conducted a Mystery Audit for a banking-sector client, evaluating operational and procedural compliance and documenting observations in a structured report.
• Maintained accuracy and completeness of supporting evidence throughout audit and reconciliation assignments.

Document Typist & Administrative Support | GP Educraft Solutions
(Remote, Only on Demand Basis) (Mar 2025 – Present)
• Prepared, formatted, proofread, and maintained 20+ professional and academic documents with high accuracy under recurring deadlines.
• Maintained organized digital records, version control, confidentiality, and timely completion across multiple assignments.

RELEVANT ACCOUNTING, TAX & AUDIT PROJECTS (Work in Progress)
• Internal Audit & Risk-Based Controls Review: Performed audit planning, sampling, vouching and verification, prepared audit working papers, identified control exceptions, and documented risk-rated findings with recommendations.
• AP/AR Management & Financial Analysis Dashboard: Built Excel-based Accounts Payable and Receivable trackers covering invoice ageing, vendor/customer reconciliation, payment follow-up, month-end adjustments, budget-vs-actual analysis, and dashboard reporting.
• End-to-End Bookkeeping & Financial Statements: Completed the accounting cycle from journal entries and ledger posting to Trial Balance, Bank Reconciliation, vendor/customer reconciliation, fixed assets, and financial statements using Tally Prime and Excel.
• GST Compliance & Return Filing Simulation: Prepared sales and purchase registers, simulated GSTR-1 and GSTR-3B, reconciled GSTR-2B with purchase records, computed eligible ITC, and applied Section 17(5) provisions.
• Income Tax Computation & Return Filing: Computed taxable income and tax liability across Salary, House Property, PGBP, and Capital Gains, including deductions, old vs. new regime comparison, TDS/TCS reconciliation, and ITR form mapping.

EDUCATION
• Master of Commerce (M. Com) - Ongoing | Institute of Distance Education, University of Madras (Jun 2026 – Present)
• CA Intermediate - Ongoing | Institute of Chartered Accountants of India (Aug 2023 – Present)
• Bachelor of Commerce (B. Com) CGPA: 7.05/10 | Institute of Distance Education, University of Madras (Jun 2022 – Jun 2025)
• CA Foundation - Passed | Institute of Chartered Accountants of India (Jun 2023)

CERTIFICATIONS & TRAININGS
• ICAI Orientation Programme
• ICITSS (Integrated Course on Information Technology and Soft Skills)

ACTIVITIES & ACHIEVEMENTS
• Volunteer & Participant, ICAI Student (SICASA) Conferences
• World Record Participation event - Aarohana 2025 CA Student’s National Conference
• Master of Ceremony (MOC) – Madugam 2026, CA Student’s Mega Conference

LANGUAGES
• English (Professional Working), Tamil (Native), Telugu (Native), Hindi (Elementary).`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullResumePlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 bg-slate-100 border-t border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-semibold tracking-wide uppercase mb-3">
              <FileText className="w-3.5 h-3.5 text-amber-700" />
              <span>Official Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Resume & Credentials
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Complete ATS-compliant curriculum vitae of Pavithra J S detailing verified professional experience, practical audit assignments, academic milestones, and core accounting competencies.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              id="resume-section-download-btn"
              href={personalInfo.resumeUrl}
              download="Pavithra-J-S-Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-900 bg-amber-300 hover:bg-amber-400 rounded-md transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <Download className="w-4 h-4 text-slate-900" />
              <span>Download PDF</span>
            </a>

            <button
              id="resume-section-copy-btn"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
              title="Copy plain text for applicant portals"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              id="resume-section-print-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>
        </div>

        {/* View Switcher Bar */}
        <div className="flex items-center justify-between bg-white border border-slate-200 rounded-t-xl px-4 py-3 shadow-xs">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              id="resume-view-both-btn"
              onClick={() => setActiveTab('both')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'both'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Full Document (2 Pages)
            </button>
            <button
              id="resume-view-page1-btn"
              onClick={() => setActiveTab('page1')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'page1'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Page 1
            </button>
            <button
              id="resume-view-page2-btn"
              onClick={() => setActiveTab('page2')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'page2'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Page 2
            </button>
            <button
              id="resume-view-text-btn"
              onClick={() => setActiveTab('text')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'text'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Plain ATS Text
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>ATS-Compliant Document</span>
          </div>
        </div>

        {/* Paper Document Container */}
        {activeTab === 'text' ? (
          <div className="bg-slate-900 text-slate-100 p-6 sm:p-8 rounded-b-xl border-x border-b border-slate-800 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto shadow-sm whitespace-pre-wrap select-all">
            {fullResumePlainText}
          </div>
        ) : (
          <div className="bg-slate-200/70 p-4 sm:p-8 rounded-b-xl border-x border-b border-slate-300 space-y-8 shadow-inner">
            {/* ======================= PAGE 1 ======================= */}
            {(activeTab === 'both' || activeTab === 'page1') && (
              <article
                id="resume-paper-page-1"
                className="bg-white text-slate-900 p-6 sm:p-10 md:p-12 rounded-lg shadow-md border border-slate-300/80 max-w-4xl mx-auto relative font-sans text-xs sm:text-[13px] leading-relaxed transition-all"
              >
                {/* Page number badge */}
                <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-widest text-slate-400 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">
                  Page 1 of 2
                </div>

                {/* Header */}
                <header className="text-center pb-5 border-b border-slate-800">
                  <h1 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 tracking-tight">
                    PAVITHRA J S
                  </h1>
                  <p className="mt-1 text-xs sm:text-sm font-semibold tracking-wide text-slate-800 uppercase">
                    ACCOUNTS & AUDIT EXECUTIVE | ACCOUNTING, TAXATION & RECONCILIATION | CA INTERMEDIATE
                  </p>
                  <p className="mt-1.5 text-xs text-slate-600 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                    <span>Singarapettai, Krishnagiri, Tamil Nadu</span>
                    <span>•</span>
                    <span>9677808801</span>
                    <span>•</span>
                    <a
                      href="mailto:pavithrajs18@gmail.com"
                      className="text-slate-800 hover:text-amber-700 underline underline-offset-2"
                    >
                      pavithrajs18@gmail.com
                    </a>
                    <span>•</span>
                    <a
                      href="https://www.linkedin.com/in/pavithra-jothiprakash-07ba922b9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-800 hover:text-amber-700 underline underline-offset-2"
                    >
                      linkedin.com/in/pavithra-jothiprakash-07ba922b9
                    </a>
                  </p>
                </header>

                {/* Professional Summary */}
                <section className="mt-5">
                  <h2 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2">
                    PROFESSIONAL SUMMARY
                  </h2>
                  <p className="text-slate-700 text-justify leading-relaxed">
                    B.Com graduate and CA Intermediate candidate with practical experience in audit support, accounting, reconciliation, asset verification, and financial documentation. Hands-on exposure to bookkeeping, journal entries, ledger posting, trial balance, bank reconciliation, vendor/customer reconciliation, financial statements, GST reconciliation, and tax computation. Experienced in preparing audit working papers, identifying discrepancies, verifying financial records, and coordinating documentation for client assignments. Proficient in MS Excel and Tally Prime, with working exposure to Zoho Books and Google Sheets with strong attention to accuracy, documentation, and deadlines.
                  </p>
                </section>

                {/* Core Skills */}
                <section className="mt-5">
                  <h2 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
                    CORE SKILLS
                  </h2>
                  <ul className="space-y-1.5 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <div>
                        <strong className="text-slate-900 font-semibold">Accounting & Bookkeeping:</strong>{' '}
                        Financial Accounting, Bookkeeping, Journal Entries, General Ledger, Trial Balance, Financial Statements, Bank Reconciliation, Vendor Reconciliation, Customer Reconciliation, Accounts Payables and Receivables.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <div>
                        <strong className="text-slate-900 font-semibold">Audit & Verification:</strong>{' '}
                        Internal Audit, Audit Procedures, Audit Working Papers, Audit Documentation, Risk-Based Audit, Physical Asset Verification, Fixed Asset Verification, Asset Reconciliation, Sampling, Vouching, Verification, Compliance Review, Discrepancy Identification & Reporting
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <div>
                        <strong className="text-slate-900 font-semibold">Tax & Compliance:</strong>{' '}
                        GST Compliance, GST Reconciliation, GSTR-1, GSTR-2B Reconciliation, GSTR-3B Working Papers, Input Tax Credit, Section 17(5) ITC Rules, TDS Basics, Income Tax Basics
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <div>
                        <strong className="text-slate-900 font-semibold">Excel & Digital Tools:</strong>{' '}
                        MS Excel, VLOOKUP, Pivot Tables, SUM, IF, Sorting & Filtering, Google Sheets, Google Workspace, Structured Working Papers, Reconciliation Trackers
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <div>
                        <strong className="text-slate-900 font-semibold">Accounting Software:</strong>{' '}
                        Tally Prime, Zoho Books; Xero, QuickBooks (Extending Knowledge)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <div>
                        <strong className="text-slate-900 font-semibold">Professional Skills:</strong>{' '}
                        Client Coordination, Analytical Thinking, Attention to Detail, Documentation, Deadline Management, Independent Working, Team Collaboration, Confidentiality.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Experience */}
                <section className="mt-5">
                  <h2 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-3">
                    EXPERIENCE
                  </h2>

                  {/* Job 1 */}
                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <div className="font-semibold text-slate-900">
                        Freelance Audit & Reconciliation Assistant <span className="font-normal text-slate-600">| Self-Employed</span>
                      </div>
                      <div className="text-xs font-semibold text-slate-700 shrink-0">
                        Dec 2025 – July 2026
                      </div>
                    </div>
                    <ul className="mt-1.5 space-y-1 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-slate-400 font-bold">•</span>
                        <span>Performed physical asset verification and reconciliation against Fixed Asset Registers (FAR) across 4 client engagements spanning retail, banking, manufacturing, and financial services sectors.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-slate-400 font-bold">•</span>
                        <span>Executed multi-branch asset tagging and verification across 3 locations for a banking-sector client, coordinating fieldwork to meet compliance deadlines.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-slate-400 font-bold">•</span>
                        <span>Identified, investigated, and documented financial discrepancies, asset movements, and verification exceptions, maintaining evidence-backed audit working papers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-slate-400 font-bold">•</span>
                        <span>Prepared audit working papers, verification reports, supporting documentation, and formal findings in line with client-specific requirements.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-slate-400 font-bold">•</span>
                        <span>Coordinated directly with audit teams to ensure timely completion of audit documentation and compliance deliverables.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-slate-400 font-bold">•</span>
                        <span>Conducted a Mystery Audit for a banking-sector client, evaluating operational and procedural compliance and documenting observations in a structured report.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-slate-400 font-bold">•</span>
                        <span>Maintained accuracy and completeness of supporting evidence throughout audit and reconciliation assignments.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Job 2 */}
                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <div className="font-semibold text-slate-900">
                        Document Typist & Administrative Support <span className="font-normal text-slate-600">| GP Educraft Solutions</span>
                      </div>
                      <div className="text-xs font-semibold text-slate-700 shrink-0">
                        Mar 2025 – Present
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-500 italic mb-1">
                      (Remote, Only on Demand Basis)
                    </div>
                    <ul className="space-y-1 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-slate-400 font-bold">•</span>
                        <span>Prepared, formatted, proofread, and maintained 20+ professional and academic documents with high accuracy under recurring deadlines.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-slate-400 font-bold">•</span>
                        <span>Maintained organized digital records, version control, confidentiality, and timely completion across multiple assignments.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Projects Section - Part 1 (First Project on Page 1) */}
                <section className="mt-5">
                  <h2 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2">
                    RELEVANT ACCOUNTING, TAX & AUDIT PROJECTS (Work in Progress)
                  </h2>
                  <ul className="space-y-1.5 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <div>
                        <strong className="text-slate-900 font-semibold">Internal Audit & Risk-Based Controls Review:</strong>{' '}
                        Performed audit planning, sampling, vouching and verification, prepared audit working papers, identified control exceptions, and documented risk-rated findings with recommendations.
                      </div>
                    </li>
                  </ul>
                </section>
              </article>
            )}

            {/* ======================= PAGE 2 ======================= */}
            {(activeTab === 'both' || activeTab === 'page2') && (
              <article
                id="resume-paper-page-2"
                className="bg-white text-slate-900 p-6 sm:p-10 md:p-12 rounded-lg shadow-md border border-slate-300/80 max-w-4xl mx-auto relative font-sans text-xs sm:text-[13px] leading-relaxed transition-all"
              >
                {/* Page number badge */}
                <div className="absolute top-4 right-4 text-[10px] uppercase font-mono tracking-widest text-slate-400 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">
                  Page 2 of 2
                </div>

                {/* Projects Section Continued */}
                <section className="mt-2">
                  <h2 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-3">
                    RELEVANT ACCOUNTING, TAX & AUDIT PROJECTS (Continued)
                  </h2>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <div>
                        <strong className="text-slate-900 font-semibold">AP/AR Management & Financial Analysis Dashboard:</strong>{' '}
                        Built Excel-based Accounts Payable and Receivable trackers covering invoice ageing, vendor/customer reconciliation, payment follow-up, month-end adjustments, budget-vs-actual analysis, and dashboard reporting.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <div>
                        <strong className="text-slate-900 font-semibold">End-to-End Bookkeeping & Financial Statements:</strong>{' '}
                        Completed the accounting cycle from journal entries and ledger posting to Trial Balance, Bank Reconciliation, vendor/customer reconciliation, fixed assets, and financial statements using Tally Prime and Excel.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <div>
                        <strong className="text-slate-900 font-semibold">GST Compliance & Return Filing Simulation:</strong>{' '}
                        Prepared sales and purchase registers, simulated GSTR-1 and GSTR-3B, reconciled GSTR-2B with purchase records, computed eligible ITC, and applied Section 17(5) provisions.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <div>
                        <strong className="text-slate-900 font-semibold">Income Tax Computation & Return Filing:</strong>{' '}
                        Computed taxable income and tax liability across Salary, House Property, PGBP, and Capital Gains, including deductions, old vs. new regime comparison, TDS/TCS reconciliation, and ITR form mapping.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Education */}
                <section className="mt-6">
                  <h2 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-3">
                    EDUCATION
                  </h2>
                  <div className="space-y-3 text-slate-700">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <div className="font-semibold text-slate-900">Master of Commerce (M. Com) - Ongoing</div>
                        <div className="text-xs text-slate-600">Institute of Distance Education, University of Madras</div>
                      </div>
                      <div className="text-xs font-semibold text-slate-700 shrink-0 mt-0.5 sm:mt-0">
                        Jun 2026 – Present
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <div className="font-semibold text-slate-900">CA Intermediate - Ongoing</div>
                        <div className="text-xs text-slate-600">Institute of Chartered Accountants of India</div>
                      </div>
                      <div className="text-xs font-semibold text-slate-700 shrink-0 mt-0.5 sm:mt-0">
                        Aug 2023 – Present
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <div className="font-semibold text-slate-900">
                          Bachelor of Commerce (B. Com) <span className="font-normal text-slate-600">CGPA: 7.05/10</span>
                        </div>
                        <div className="text-xs text-slate-600">Institute of Distance Education, University of Madras</div>
                      </div>
                      <div className="text-xs font-semibold text-slate-700 shrink-0 mt-0.5 sm:mt-0">
                        Jun 2022 – Jun 2025
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <div className="font-semibold text-slate-900">CA Foundation - Passed</div>
                        <div className="text-xs text-slate-600">Institute of Chartered Accountants of India</div>
                      </div>
                      <div className="text-xs font-semibold text-slate-700 shrink-0 mt-0.5 sm:mt-0">
                        Jun 2023
                      </div>
                    </div>
                  </div>
                </section>

                {/* Certifications & Trainings */}
                <section className="mt-6">
                  <h2 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
                    CERTIFICATIONS & TRAININGS
                  </h2>
                  <ul className="space-y-1 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>ICAI Orientation Programme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>ICITSS (Integrated Course on Information Technology and Soft Skills)</span>
                    </li>
                  </ul>
                </section>

                {/* Activities & Achievements */}
                <section className="mt-6">
                  <h2 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
                    ACTIVITIES & ACHIEVEMENTS
                  </h2>
                  <ul className="space-y-1 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>Volunteer & Participant, ICAI Student (SICASA) Conferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>World Record Participation event - Aarohana 2025 CA Student’s National Conference</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>Master of Ceremony (MOC) – Madugam 2026, CA Student’s Mega Conference</span>
                    </li>
                  </ul>
                </section>

                {/* Languages */}
                <section className="mt-6 pt-3 border-t border-slate-200">
                  <div className="text-xs text-slate-700">
                    <strong className="text-slate-900 font-semibold">Languages:</strong>{' '}
                    English (Professional Working), Tamil (Native), Telugu (Native), Hindi (Elementary).
                  </div>
                </section>
              </article>
            )}
          </div>
        )}

        {/* Quick Highlights Strip Below Resume */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Audit Exposure</div>
              <div className="text-sm font-bold text-slate-800">4 Client Engagements</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Qualifications</div>
              <div className="text-sm font-bold text-slate-800">B.Com · CA Inter · M.Com</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
              <FolderKanban className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Self-Initiated Projects</div>
              <div className="text-sm font-bold text-slate-800">5 Practical Audits & Models</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-purple-700" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase">Conferences & Leadership</div>
              <div className="text-sm font-bold text-slate-800">SICASA · Aarohana · MOC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
