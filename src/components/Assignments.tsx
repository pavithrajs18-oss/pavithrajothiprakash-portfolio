import React, { useState } from 'react';
import { FileText, ArrowRight, Wrench, Sparkles, ShieldAlert } from 'lucide-react';
import { selfInitiatedAssignments } from '../data/portfolioData';
import { SelfInitiatedAssignment } from '../types';
import { AssignmentModal } from './AssignmentModal';

export const Assignments: React.FC = () => {
  const [selectedAssignment, setSelectedAssignment] = useState<SelfInitiatedAssignment | null>(null);

  return (
    <section id="assignments" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Practical Simulations & Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
            Self-Initiated Assignments
          </h2>
          <div className="w-12 h-1 bg-amber-400 mt-3 rounded-full" />
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Structured practical models developed to demonstrate end-to-end competency in internal controls, AP/AR management, full-cycle bookkeeping, GST simulation, and income tax computation.
          </p>
        </div>

        {/* Five Assignment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selfInitiatedAssignments.map((assignment, index) => (
            <div
              key={assignment.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Number & Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md border border-amber-200">
                    ASSIGNMENT {assignment.number}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                    Practical Simulation
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 uppercase tracking-tight mb-2 group-hover:text-amber-600 transition-colors">
                  {assignment.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {assignment.shortDescription}
                </p>

                {/* Tools */}
                <div className="mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
                    <Wrench className="w-3 h-3 text-slate-400" />
                    Tools
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {assignment.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Skills */}
                <div className="mb-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Core Skills Tested
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {assignment.relevantSkills.slice(0, 5).map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/70"
                      >
                        {skill}
                      </span>
                    ))}
                    {assignment.relevantSkills.length > 5 && (
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                        +{assignment.relevantSkills.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* View Details Button */}
              <button
                id={`assignment-btn-${assignment.number}`}
                onClick={() => setSelectedAssignment(assignment)}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-50 hover:bg-slate-900 hover:text-white border border-slate-200 hover:border-slate-900 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 cursor-pointer"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-8 p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>
              All five assignments represent self-initiated practical study models based on standard statutory frameworks and ICAI guidelines.
            </span>
          </div>
          <span className="font-semibold text-slate-700">Total: 5 Assignments</span>
        </div>

      </div>

      {/* Assignment Modal */}
      <AssignmentModal
        assignment={selectedAssignment}
        onClose={() => setSelectedAssignment(null)}
      />
    </section>
  );
};
