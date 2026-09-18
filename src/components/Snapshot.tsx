import React from 'react';
import { Briefcase, Building2, FileCheck2, Shield, Info } from 'lucide-react';
import { snapshotMetrics } from '../data/portfolioData';

export const Snapshot: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'engagements':
        return <Briefcase className="w-5 h-5 text-amber-500" />;
      case 'banking-locations':
        return <Building2 className="w-5 h-5 text-blue-600" />;
      case 'documents':
        return <FileCheck2 className="w-5 h-5 text-emerald-600" />;
      case 'ca-status':
        return <Shield className="w-5 h-5 text-slate-700" />;
      default:
        return <Briefcase className="w-5 h-5 text-slate-700" />;
    }
  };

  return (
    <section id="snapshot" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Factual Overview
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Professional Snapshot
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Verified metrics and scope of practical engagements completed to date.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {snapshotMetrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 bg-white border border-slate-200 rounded-lg shadow-2xs">
                    {getIcon(metric.id)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-200/70 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {metric.value}
                </div>

                <div className="text-sm font-bold text-slate-800 mt-1 uppercase tracking-wide">
                  {metric.label}
                </div>

                {metric.detail && (
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {metric.detail}
                  </p>
                )}
              </div>

              {metric.clarification && (
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-start gap-1.5 text-[11px] text-slate-500">
                  <Info className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                  <span className="italic">{metric.clarification}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
