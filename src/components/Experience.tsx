import React from 'react';
import {
  Briefcase,
  Building,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  FileCheck
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Practical Exposure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-amber-400 mt-3 rounded-full" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Practical audit support, physical asset verification, Fixed Asset Register reconciliation, and professional documentation experience.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-6 before:w-0.5 before:bg-slate-200 before:hidden sm:before:block">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className={`relative sm:pl-16 transition-all ${
                item.primaryFocus ? 'opacity-100' : 'opacity-95'
              }`}
            >
              {/* Timeline marker icon */}
              <div
                className={`hidden sm:flex absolute left-3 top-6 -translate-x-1/2 w-7 h-7 rounded-full items-center justify-center border-2 ${
                  item.primaryFocus
                    ? 'bg-slate-900 text-amber-300 border-amber-400 shadow-sm'
                    : 'bg-slate-100 text-slate-600 border-slate-300'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Card Container */}
              <div
                className={`rounded-2xl p-6 sm:p-8 border transition-all ${
                  item.primaryFocus
                    ? 'bg-slate-50/80 border-slate-300 shadow-sm hover:border-slate-400'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Role Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4 pb-4 border-b border-slate-200">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {item.role}
                      </h3>
                      {item.primaryFocus && (
                        <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded border border-amber-300/60">
                          Primary Accounting & Audit Focus
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-600 font-medium">
                      <span className="text-slate-900 font-semibold">{item.organization}</span>
                      <span>•</span>
                      <span>{item.employmentType}</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white px-3 py-1.5 rounded-md border border-slate-200 self-start md:self-auto shadow-2xs">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Context Note */}
                {item.contextNote && (
                  <p className="text-xs sm:text-sm text-slate-600 italic mb-4">
                    {item.contextNote}
                  </p>
                )}

                {/* Responsibilities List */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Key Engagements & Responsibilities
                  </div>
                  {item.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          item.primaryFocus ? 'text-amber-600' : 'text-slate-400'
                        }`}
                      />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Scope Transparency Note for Primary Role */}
                {item.primaryFocus && (
                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-start gap-2 text-xs text-slate-500 bg-white/60 p-3 rounded-lg border border-slate-100">
                    <ShieldCheck className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <span>
                      <strong>Audit Scope Transparency:</strong> Engagements carried out as an audit and reconciliation assistant assisting formal audit procedures; non-statutory signing role emphasizing physical verification, FAR matching, and evidence collection.
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
