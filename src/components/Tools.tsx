import React from 'react';
import { Laptop, FileSpreadsheet, FileText, CheckCircle2 } from 'lucide-react';
import { toolsData } from '../data/portfolioData';

export const Tools: React.FC = () => {
  const categories = [
    { name: 'Accounting Software', icon: <Laptop className="w-4 h-4 text-blue-600" /> },
    { name: 'Spreadsheets & Analytics', icon: <FileSpreadsheet className="w-4 h-4 text-emerald-600" /> },
    { name: 'Documentation', icon: <FileText className="w-4 h-4 text-amber-600" /> },
    { name: 'Productivity', icon: <CheckCircle2 className="w-4 h-4 text-slate-700" /> },
    { name: 'Data Visualization', icon: <CheckCircle2 className="w-4 h-4 text-indigo-600" /> },
  ];

  return (
    <section id="tools" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Software Environment
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
            Tools & Technology
          </h2>
          <div className="w-12 h-1 bg-amber-400 mt-3 rounded-full" />
          <p className="mt-2 text-sm text-slate-600">
            Hands-on exposure to standard industry accounting platforms, advanced spreadsheet modeling, and audit documentation tools.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {toolsData.map((tool) => (
            <div
              key={tool.name}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                    {tool.category}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  {tool.focus}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Practical Functional Exposure</span>
                </div>
                {tool.name.toLowerCase().includes('excel') && (
                  <a
                    href="#work-samples"
                    className="text-emerald-700 hover:text-emerald-900 font-bold flex items-center gap-0.5"
                    title="Jump to Work Samples on Request"
                  >
                    <span>Request Samples</span>
                    <span>→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
