import React from 'react';
import {
  GraduationCap,
  Calendar,
  Building,
  Award,
  BookCheck,
  Languages as LanguagesIcon,
  CheckCircle2,
  Users
} from 'lucide-react';
import {
  educationData,
  certificationsData,
  activitiesData,
  languagesData
} from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Academic Grounding & Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
            Education & Qualifications
          </h2>
          <div className="w-12 h-1 bg-amber-400 mt-3 rounded-full" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Formal commerce education combined with the professional Chartered Accountancy curriculum through ICAI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-7">
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-amber-500" />
              Academic & Professional Qualifications
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-200">
              {educationData.map((item) => (
                <div key={item.id} className="relative pl-9">
                  {/* Timeline bullet */}
                  <div className="absolute left-3 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-slate-800 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                      <h4 className="text-base font-bold text-slate-900">
                        {item.degree}
                      </h4>
                      <div className="flex items-center gap-2">
                        {item.grade && (
                          <span className="text-xs font-semibold bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded border border-emerald-200">
                            {item.grade}
                          </span>
                        )}
                        <span className="text-xs font-semibold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                          {item.status}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs sm:text-sm font-medium text-slate-600 mb-2">
                      {item.institution}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.period}</span>
                    </div>

                    {item.note && (
                      <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-200/80 pt-2 mt-2">
                        {item.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications, Activities & Languages */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Certifications & Training */}
            <div>
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Certifications & Training
              </h3>
              <div className="space-y-3">
                {certificationsData.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all"
                  >
                    <div className="text-sm font-bold text-slate-900">
                      {cert.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {cert.issuer}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities & Achievements */}
            <div>
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                Activities & Participation
              </h3>
              <div className="space-y-3">
                {activitiesData.map((act) => (
                  <div
                    key={act.id}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all"
                  >
                    <div className="text-sm font-bold text-slate-900">
                      {act.title}
                    </div>
                    <div className="text-xs font-semibold text-amber-700 mt-0.5">
                      {act.organization}
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {act.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <LanguagesIcon className="w-5 h-5 text-emerald-600" />
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {languagesData.map((lang) => (
                  <div
                    key={lang.language}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200"
                  >
                    <div className="text-sm font-bold text-slate-900">
                      {lang.language}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {lang.proficiency}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
