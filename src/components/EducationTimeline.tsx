import React from 'react';
import { DoctorProfile } from '../types/doctor';
import { GraduationCap, Award, MapPin, Calendar } from './IconHelper';

interface EducationTimelineProps {
  doctor: DoctorProfile;
}

export const EducationTimeline: React.FC<EducationTimelineProps> = ({ doctor }) => {
  return (
    <section id="education" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-50 text-navy-900 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education & Medical Training
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Rigorous academic foundations, higher specialist training, and post-doctoral clinical fellowships.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-10 before:content-[''] before:absolute before:top-3 before:bottom-3 before:left-[17px] sm:before:left-[21px] before:w-[2px] before:bg-slate-300">
          {doctor.education.map((item, index) => (
            <div key={item.id || index} className="relative group">
              
              {/* Timeline Marker Node */}
              <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-navy-900 group-hover:border-teal-500 group-hover:scale-110 flex items-center justify-center transition-all shadow-sm">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-navy-900 group-hover:text-teal-600 transition-colors" />
              </div>

              {/* Card Body */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-subtle hover:shadow-card transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200/70">
                      <Calendar className="w-3 h-3 text-teal-600" />
                      {item.year}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-navy-900 transition-colors">
                      {item.degree}
                    </h3>
                  </div>

                  {item.honors && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 self-start sm:self-center">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      <span>{item.honors}</span>
                    </div>
                  )}
                </div>

                {/* Institution & Field */}
                <div className="pt-3 space-y-2">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-slate-800">
                    <span>{item.institution}</span>
                    <span className="text-slate-400 hidden sm:inline">•</span>
                    <span className="text-xs text-slate-500 font-normal flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>

                  {item.field && (
                    <div className="text-xs font-medium text-teal-700">
                      Focus: {item.field}
                    </div>
                  )}

                  {item.description && (
                    <p className="text-sm text-slate-600 leading-relaxed pt-1">
                      {item.description}
                    </p>
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
