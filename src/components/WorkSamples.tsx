import React from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  ShieldCheck,
  FileSpreadsheet,
  FileText,
  Lock,
  ArrowRight,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const WorkSamples: React.FC = () => {
  const sampleCategories = [
    {
      title: 'Fixed Asset Verification & FAR Reconciliation',
      description:
        'Multi-location physical verification trackers, asset tagging records, discrepancy logs, and Fixed Asset Register reconciliation templates (anonymized).',
      tags: ['Physical Audit', 'FAR Reconciliation', 'MS Excel', 'Variance Analysis']
    },
    {
      title: 'Internal Audit & Controls Working Papers',
      description:
        'Structured audit planning documents, test of controls matrices, sampling & vouching sheets, and risk-rated audit finding summaries with action plans.',
      tags: ['Internal Audit', 'Sampling & Vouching', 'Working Papers', 'Risk Ratings']
    },
    {
      title: 'GST Reconciliation & Return Workpapers',
      description:
        'GSTR-2B vs. Books comparison trackers, eligible vs. ineligible ITC computation under Section 17(5), and monthly GSTR-1/3B working registers.',
      tags: ['GSTR-2B Reconciliation', 'Section 17(5)', 'Input Tax Credit', 'Tally Prime']
    },
    {
      title: 'AP/AR Ageing & Financial Dashboard Models',
      description:
        'Excel-based Accounts Payable & Receivable trackers, invoice ageing brackets, vendor/customer balance confirmations, and budget vs. actual variance dashboards.',
      tags: ['Ageing Schedules', 'Vendor BRS', 'Dynamic Formulas', 'Pivot Dashboards']
    },
    {
      title: 'End-to-End Accounting & Financial Statements',
      description:
        'Complete bookkeeping models from journal entries, ledger accounts, and Bank Reconciliation Statements (BRS) to Trial Balance and balance sheet schedules.',
      tags: ['Full Accounting Cycle', 'Trial Balance', 'Bank Reconciliation', 'Financial Statements']
    },
    {
      title: 'Mystery Audit & Compliance Fieldwork Reports',
      description:
        'Standardized observational reports documenting operational, procedural, and customer service compliance for multi-branch financial institutions.',
      tags: ['Mystery Audit', 'Fieldwork', 'Compliance Assessment', 'Formal Reporting']
    }
  ];

  const emailSubject = encodeURIComponent('Request for Work Samples & Working Papers - Pavithra J S');
  const emailBody = encodeURIComponent(
    `Hi Pavithra,\n\nI reviewed your portfolio and would like to request samples of your work and working papers (e.g., Excel models, audit schedules, or reconciliation sheets).\n\nOrganization / Company: \nRelevant Areas of Interest: \n\nLooking forward to reviewing your materials.\n\nBest regards,`
  );
  const mailtoLink = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section id="work-samples" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-amber-100/90 text-amber-900 border border-amber-300 mb-3">
            <Lock className="w-3.5 h-3.5 text-amber-700" />
            <span>Confidentiality & Data Privacy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Work Samples Available on Request
          </h2>
          <div className="w-12 h-1 bg-amber-400 mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            To respect non-disclosure agreements, client commercial privacy, and proprietary financial data, comprehensive audit working papers, reconciliation workbooks, and financial spreadsheets are shared directly upon request.
          </p>
        </div>

        {/* Highlight Card: Contact for Work Samples Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-lg mb-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-300 text-xs font-medium mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Sanitized & Anonymized Working Papers</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Interested in evaluating my working papers or Excel models?
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                I am glad to share sanitized samples of my Fixed Asset Reconciliations, GST working files, Internal Audit documentation, and automated Excel workbooks directly with prospective employers and audit teams.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Prompt turnaround (&lt; 24 hrs)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Excel (.xlsx) & PDF formats</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Customized to your role requirements</span>
                </div>
              </div>
            </div>

            {/* Quick Contact CTAs */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                id="request-samples-email-cta"
                href={mailtoLink}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-amber-300 hover:bg-amber-400 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <Mail className="w-4 h-4 text-slate-900" />
                <span>Email to Request Work Samples</span>
              </a>

              <a
                id="request-samples-phone-cta"
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Directly (+91 {personalInfo.phone})</span>
              </a>

              <a
                id="request-samples-linkedin-cta"
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/60 border border-slate-700 transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>Connect via LinkedIn Message</span>
              </a>
            </div>
          </div>
        </div>

        {/* Catalog of Available Work Samples (Upon Request) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 pb-2 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-900">
              Overview of Deliverables Available for Review
            </h3>
            <span className="text-xs font-semibold text-slate-500 mt-1 sm:mt-0">
              Specify your preferred focus area when contacting
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleCategories.map((sample, index) => (
              <div
                key={index}
                className="bg-slate-50/80 hover:bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 transition-all duration-200 shadow-2xs hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0">
                      {index % 2 === 0 ? (
                        <FileSpreadsheet className="w-4 h-4" />
                      ) : (
                        <FileText className="w-4 h-4" />
                      )}
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-slate-200/70 text-slate-600 font-semibold">
                      On Request
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {sample.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4">
                    {sample.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/80">
                    {sample.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                      `Request for Work Sample: ${sample.title}`
                    )}&body=${encodeURIComponent(
                      `Hi Pavithra,\n\nI would like to request a copy of your work sample for "${sample.title}".\n\nThank you,\n`
                    )}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 transition-colors"
                  >
                    <span>Request this sample</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Direct Link to Contact Section */}
        <div className="mt-12 p-6 bg-slate-100 rounded-xl border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Prefer submitting a direct inquiry through the contact form?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Leave your details, preferred review format, and company name in the message form below.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-2xs transition-all shrink-0"
          >
            <span>Go to Contact Form</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
