import React from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  Award,
  BookOpen,
  Target,
  FileCheck,
  Linkedin,
  ExternalLink
} from 'lucide-react';
import { aboutParagraphs, coreQualities, personalInfo } from '../data/portfolioData';
import pavithraPhotoAsset from '../assets/images/pavithra_photo_1788557259340.jpg';
import { useProfilePhoto } from '../context/ProfilePhotoContext';

export const About: React.FC = () => {
  const { photoUrl } = useProfilePhoto();
  const currentPhoto = photoUrl || pavithraPhotoAsset || personalInfo.profilePhotoUrl;

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Background & Mindset
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
            About Me
          </h2>
          <div className="w-12 h-1 bg-amber-400 mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Text */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="font-normal text-slate-700">
                {paragraph}
              </p>
            ))}

            {/* Clear Role Alignment Card */}
            <div className="mt-8 p-5 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                <Target className="w-4 h-4 text-amber-600" />
                Target Professional Roles
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                Open to entry-level and executive opportunities in corporate finance departments, audit firms, and accounting consultancies:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Audit Executive',
                  'Audit Assistant',
                  'Accounts Executive',
                  'Junior Accountant',
                  'Accounting Assistant',
                  'Accounts Payable / Receivable Specialist',
                  'Reconciliation Analyst',
                  'Finance Assistant'
                ].map((role) => (
                  <span
                    key={role}
                    className="text-xs font-medium bg-white text-slate-800 px-3 py-1 rounded-md border border-slate-200 shadow-2xs"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Qualities & Professional Ethics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold uppercase tracking-wider text-amber-300">
                  Professional Anchors
                </h3>
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {coreQualities.map((item) => (
                  <div
                    key={item.title}
                    className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80 hover:border-slate-600 transition-colors"
                  >
                    <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Status Note */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-start gap-2 text-xs text-slate-400">
                <FileCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  B.Com graduate and CA Intermediate candidate pursuing continuous practical learning and academic development.
                </span>
              </div>
            </div>

            {/* Quick Profile & LinkedIn Connect Card */}
            <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-4">
              <div className="w-14 h-16 sm:w-16 sm:h-20 rounded-xl overflow-hidden bg-slate-200 border border-slate-300 shrink-0 shadow-xs">
                <img
                  src={currentPhoto}
                  alt="Pavithra J S"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-slate-900 tracking-wide uppercase truncate">
                  {personalInfo.name}
                </div>
                <div className="text-xs text-amber-700 font-semibold truncate">
                  CA Intermediate Candidate · ICAI
                </div>
                <a
                  id="about-linkedin-connect-btn"
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-white bg-[#0A66C2] hover:bg-[#004182] px-3 py-1.5 rounded-md transition-colors shadow-2xs"
                  title="Connect with Pavithra on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
