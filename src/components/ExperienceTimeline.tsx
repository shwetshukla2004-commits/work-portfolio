import React from 'react';
import { DoctorProfile } from '../types/doctor';
import { Building2, Calendar, MapPin, CheckCircle2, Award, Briefcase } from './IconHelper';

interface ExperienceTimelineProps {
  doctor: DoctorProfile;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ doctor }) => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-50 text-navy-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-teal-600" />
            <span>Clinical Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional & Hospital Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            A continuous record of senior clinical practice, catheterization laboratory leadership, and academic hospital appointments.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:content-[''] before:absolute before:top-3 before:bottom-3 before:left-[17px] sm:before:left-[21px] before:w-[2px] before:bg-slate-200">
          {doctor.experience.map((item, index) => (
            <div key={item.id || index} className="relative group">
              
              {/* Timeline Marker Node */}
              <div className={`absolute -left-[30px] sm:-left-[38px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all shadow-sm ${
                item.isCurrent
                  ? 'bg-navy-900 border-teal-400 text-teal-300 ring-4 ring-teal-50'
                  : 'bg-white border-slate-400 text-slate-600 group-hover:border-navy-900'
              }`}>
                <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Card */}
              <div className="bg-slate-50/70 rounded-2xl border border-slate-200 p-6 sm:p-8 hover:bg-white hover:shadow-card transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 pb-4 border-b border-slate-200">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-navy-900 bg-navy-100/70 px-2.5 py-0.5 rounded">
                        <Calendar className="w-3 h-3 text-navy-700" />
                        {item.duration}
                      </span>
                      {item.isCurrent && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          CURRENT APPOINTMENT
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 pt-1">
                      {item.position}
                    </h3>
                  </div>

                  <div className="text-left sm:text-right space-y-0.5">
                    <div className="text-sm font-bold text-slate-800">
                      {item.organization}
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-1 sm:justify-end">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </div>
                  </div>
                </div>

                {/* Department & Clinical Scope */}
                <div className="pt-4 space-y-4">
                  <div className="text-xs font-semibold text-teal-800 bg-teal-50/60 px-3 py-1.5 rounded-lg border border-teal-100 inline-block">
                    {item.department} {item.clinicalScope ? `• ${item.clinicalScope}` : ''}
                  </div>

                  {/* Responsibilities list */}
                  {item.responsibilities && item.responsibilities.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Key Responsibilities & Clinical Duties:
                      </div>
                      <ul className="space-y-2">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="text-sm text-slate-600 flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Highlight callout if present */}
                  {item.highlights && (
                    <div className="mt-4 p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                      <Award className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900">Clinical Impact:</strong> {item.highlights}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
