import React from 'react';
import {
  BookOpen,
  Scale,
  ShieldCheck,
  Receipt,
  LineChart,
  FileSpreadsheet,
  Laptop,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'accounting-bookkeeping':
        return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 'reconciliation':
        return <Scale className="w-5 h-5 text-emerald-600" />;
      case 'audit-controls':
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 'tax-compliance':
        return <Receipt className="w-5 h-5 text-rose-600" />;
      case 'financial-analysis':
        return <LineChart className="w-5 h-5 text-indigo-600" />;
      case 'excel-spreadsheets':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-700" />;
      case 'accounting-software':
        return <Laptop className="w-5 h-5 text-sky-600" />;
      case 'digital-tools':
        return <Layers className="w-5 h-5 text-slate-700" />;
      default:
        return <BookOpen className="w-5 h-5 text-slate-700" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Competencies & Toolset
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
            Skills & Domain Knowledge
          </h2>
          <div className="w-12 h-1 bg-amber-400 mt-3 rounded-full" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Categorized technical capabilities across accounting cycles, reconciliation protocols, audit support, and statutory compliance.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mb-4 font-normal">
                  {category.shortDesc}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1 rounded-md border border-slate-200/70 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer count */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Domain Focus</span>
                <span className="font-semibold text-slate-600">
                  {category.skills.length} Competencies
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
