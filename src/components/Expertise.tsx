import React from 'react';
import { DoctorProfile } from '../types/doctor';
import { DynamicIcon, Sparkles, CheckCircle2, ChevronRight } from './IconHelper';

interface ExpertiseProps {
  doctor: DoctorProfile;
  onSelectExpertise?: (expertiseTitle: string) => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({ doctor, onSelectExpertise }) => {
  return (
    <section id="expertise" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-teal-900 border border-teal-200/80 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Clinical Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Areas of Clinical Expertise
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Specialized interventional and consultative cardiovascular subspecialties based on rigorous clinical evidence and advanced diagnostic guidelines.
          </p>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctor.areasOfExpertise.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-subtle hover:shadow-elevated hover:border-navy-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header with minimal medical icon */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center border border-navy-100 group-hover:bg-navy-900 group-hover:text-teal-300 transition-colors">
                    <DynamicIcon name={item.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Specialty
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-navy-900 transition-colors tracking-tight">
                  {item.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {item.shortDesc}
                </p>

                {/* Clinical Focus Points */}
                {item.clinicalFocus && item.clinicalFocus.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Clinical Focus:
                    </div>
                    <ul className="space-y-1.5">
                      {item.clinicalFocus.map((focus, fIdx) => (
                        <li key={fIdx} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Button: Inquire */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={() => onSelectExpertise && onSelectExpertise(item.title)}
                  className="text-xs font-bold text-navy-900 group-hover:text-teal-700 transition-colors flex items-center gap-1"
                >
                  <span>Request Consultation</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>

                {item.diagnosticApproaches && item.diagnosticApproaches.length > 0 && (
                  <span className="text-[11px] text-slate-400 font-medium">
                    {item.diagnosticApproaches.length} modalities
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
