import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  Send,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Direct Communication
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Let's Connect
          </h2>
          <div className="w-12 h-1 bg-amber-400 mt-3 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            I am open to opportunities in Accounting, Audit, Bookkeeping, Reconciliation, Tax & Compliance, and related entry-level finance roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Email Card */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 hover:border-slate-600 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Email Address
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="mt-1 text-sm sm:text-base font-semibold text-white hover:text-amber-300 break-all transition-colors block"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="mt-5">
                <a
                  id="contact-email-btn"
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200"
                >
                  <span>Send Email</span>
                  <Send className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 hover:border-slate-600 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-400 mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Phone Number
                </div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="mt-1 text-base sm:text-lg font-semibold text-white hover:text-blue-300 transition-colors block"
                >
                  +91 {personalInfo.phone}
                </a>
              </div>
              <div className="mt-5">
                <a
                  id="contact-tel-btn"
                  href={`tel:${personalInfo.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-blue-200"
                >
                  <span>Call Directly</span>
                  <Phone className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* LinkedIn Connect Card */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 hover:border-[#0A66C2]/60 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/15 border border-[#0A66C2]/40 flex items-center justify-center text-[#3897f0] mb-4">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  LinkedIn Connect
                </div>
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-sm font-semibold text-white hover:text-[#3897f0] break-all transition-colors block leading-snug"
                >
                  pavithra-jothiprakash-07ba922b9
                </a>
                <div className="text-[11px] text-slate-400 mt-1">
                  Professional network & credentials
                </div>
              </div>
              <div className="mt-5">
                <a
                  id="contact-linkedin-card-link"
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3897f0] hover:text-[#60a5fa]"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 hover:border-slate-600 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Location
                </div>
                <div className="text-sm sm:text-base font-semibold text-white mt-1">
                  Singarapettai, Krishnagiri
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Tamil Nadu, India · Open for onsite & remote
                </p>
              </div>
              <div className="mt-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open for Opportunities</span>
                </span>
              </div>
            </div>

          </div>

          {/* Quick Connect & Resume Actions */}
          <div className="lg:col-span-5 bg-slate-800/90 border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white">
                Professional Availability
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Available for interviews and discussions regarding accounting executive, audit assistant, or financial reconciliation opportunities.
              </p>
            </div>

            <div className="space-y-3">
              {/* LinkedIn Button */}
              <a
                id="contact-linkedin-btn"
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-[#0A66C2] hover:bg-[#004182] rounded-xl transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
              >
                <Linkedin className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
              </a>

              {/* Email Me Button */}
              <a
                id="contact-email-cta-btn"
                href={`mailto:${personalInfo.email}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              {/* Download Resume Button */}
              <a
                id="contact-download-resume-btn"
                href={personalInfo.resumeUrl}
                download="Pavithra-J-S-Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-700/80 hover:bg-slate-700 hover:text-white border border-slate-600 rounded-xl transition-all"
              >
                <Download className="w-4 h-4 text-slate-300" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            <div className="pt-4 border-t border-slate-700/80 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Immediate responsiveness for career inquiries</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verifiable academic credentials and ICAI registration</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
