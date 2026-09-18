import React from 'react';
import {
  FileSpreadsheet,
  Scale,
  LineChart,
  ShieldAlert,
  ClipboardCheck,
  FileText,
  ArrowRight,
  ArrowDown
} from 'lucide-react';
import { careerWorkflow } from '../data/portfolioData';

export const Workflow: React.FC = () => {
  const getStepIcon = (id: string) => {
    switch (id) {
      case 'step-1':
        return <FileSpreadsheet className="w-5 h-5 text-blue-600" />;
      case 'step-2':
        return <Scale className="w-5 h-5 text-emerald-600" />;
      case 'step-3':
        return <LineChart className="w-5 h-5 text-indigo-600" />;
      case 'step-4':
        return <ShieldAlert className="w-5 h-5 text-amber-600" />;
      case 'step-5':
        return <ClipboardCheck className="w-5 h-5 text-rose-600" />;
      case 'step-6':
        return <FileText className="w-5 h-5 text-slate-800" />;
      default:
        return <FileText className="w-5 h-5 text-slate-800" />;
    }
  };

  return (
    <section id="workflow" className="py-16 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Methodical Discipline
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Financial & Audit Workflow
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A structured progression from primary financial transactions to rigorous verification and compliance reporting.
          </p>
        </div>

        {/* Workflow Chain (Grid on desktop with arrows, vertical stack on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          {careerWorkflow.map((step, index) => (
            <div
              key={step.id}
              className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg group-hover:bg-slate-100 transition-colors">
                    {getStepIcon(step.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {step.stepNumber}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-slate-500 mb-2">
                  {step.subtitle}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator arrow for desktop / mobile */}
              {index < careerWorkflow.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-200 border border-white items-center justify-center text-slate-600 shadow-xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}

              {index < careerWorkflow.length - 1 && (
                <div className="lg:hidden flex justify-center mt-3 pt-2 text-slate-400">
                  <ArrowDown className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
