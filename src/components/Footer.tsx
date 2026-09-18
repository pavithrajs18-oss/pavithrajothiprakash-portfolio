import React from 'react';
import { Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="text-lg font-bold text-white uppercase tracking-wider">
              {personalInfo.name}
            </div>
            <div className="text-xs font-medium text-amber-300 mt-1 uppercase tracking-wide">
              Accounting | Audit | Reconciliation | Tax & Compliance
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              B.Com Graduate · CA Intermediate Candidate · M.Com Student
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              id="footer-linkedin-link"
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-[#0A66C2] text-slate-300 hover:text-white border border-slate-800 transition-colors"
              aria-label="Pavithra J S LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-300 border border-slate-800 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              id="footer-phone-link"
              href={`tel:${personalInfo.phone}`}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-300 border border-slate-800 transition-colors"
              aria-label="Call Phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors ml-2"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className="text-[11px] text-slate-500">
            Professional Accounting & Audit Portfolio · Designed for Recruiter & Stakeholder Review
          </div>
        </div>

      </div>
    </footer>
  );
};
