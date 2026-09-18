import React, { useEffect } from 'react';
import { X, CheckCircle, FileText, Wrench, Layers, ShieldCheck, AlertCircle } from 'lucide-react';
import { SelfInitiatedAssignment } from '../types';

interface AssignmentModalProps {
  assignment: SelfInitiatedAssignment | null;
  onClose: () => void;
}

export const AssignmentModal: React.FC<AssignmentModalProps> = ({ assignment, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (assignment) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [assignment]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!assignment) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="assignment-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center shadow-xs">
              {assignment.number}
            </span>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-300">
                Self-Initiated Practical Assignment
              </span>
              <h3 id="assignment-modal-title" className="text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                {assignment.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
          
          {/* Transparency Disclaimer */}
          <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-lg flex items-start gap-2.5 text-xs text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <div>
              <strong>Practical Simulation Scope:</strong> This is a structured self-initiated assignment designed to apply theoretical accounting standards, auditing procedures, and tax computation rules in practical working paper models.
            </div>
          </div>

          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-slate-700" />
              Project Summary & Scope
            </h4>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              {assignment.detailedOverview}
            </p>
          </div>

          {/* Methodology & Focus Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-slate-700" />
              Methodology & Technical Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {assignment.methodologyFocus.map((method, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-white border border-slate-200 flex items-start gap-2 text-xs text-slate-700 leading-relaxed"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{method}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation & Deliverables */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-slate-700" />
              Structured Working Paper Deliverables
            </h4>
            <ul className="space-y-2">
              {assignment.documentationDeliverables.map((doc, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs font-medium text-slate-800 bg-slate-50 px-3 py-2 rounded-md border border-slate-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Relevant Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-slate-600" />
                Tools Utilized
              </span>
              <div className="flex flex-wrap gap-1.5">
                {assignment.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-medium bg-slate-100 text-slate-800 px-2.5 py-1 rounded border border-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Applied Skills
              </span>
              <div className="flex flex-wrap gap-1.5">
                {assignment.relevantSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium bg-amber-50 text-amber-900 px-2.5 py-1 rounded border border-amber-200/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Self-Initiated Practical Assignment · Pavithra J S
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-2xs transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
