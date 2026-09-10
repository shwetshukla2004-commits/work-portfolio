import React, { useState } from 'react';
import { DoctorProfile } from '../types/doctor';
import { Award, ShieldCheck, CheckCircle2, FileCheck } from './IconHelper';

interface AchievementsCertificationsProps {
  doctor: DoctorProfile;
}

export const AchievementsCertifications: React.FC<AchievementsCertificationsProps> = ({ doctor }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'certifications' | 'achievements'>('all');

  return (
    <section id="certifications" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-teal-900 border border-teal-200 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>Verified Credentials & Honors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Certifications & Achievements
            </h2>
            <p className="text-base text-slate-600 mt-2">
              National board accreditations, college fellowships, and formal clinical excellence honors.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-subtle self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'all'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All ({doctor.certifications.length + doctor.achievements.length})
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'certifications'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Board Certifications ({doctor.certifications.length})
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'achievements'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Awards & Honors ({doctor.achievements.length})
            </button>
          </div>
        </div>

        <div className="space-y-12">
          
          {/* Board Certifications Grid */}
          {(activeTab === 'all' || activeTab === 'certifications') && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FileCheck className="w-5 h-5 text-teal-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  Medical Board Certifications & Licensures
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {doctor.certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-white rounded-xl border border-slate-200 p-5 shadow-subtle hover:border-slate-300 hover:shadow-card transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          {cert.status}
                        </span>
                        <span className="text-xs font-mono font-medium text-slate-500">
                          {cert.year}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 leading-snug">
                        {cert.name}
                      </h4>

                      <p className="text-xs text-slate-500 mt-2">
                        {cert.issuingBody}
                      </p>
                    </div>

                    {cert.credentialId && (
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Credential ID:</span>
                        <span className="font-mono text-navy-900 font-semibold bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                          {cert.credentialId}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Awards & Achievements Grid */}
          {(activeTab === 'all' || activeTab === 'achievements') && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-amber-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  Verified Clinical & Academic Awards
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {doctor.achievements.map((ach) => (
                  <div
                    key={ach.id}
                    className="bg-gradient-to-b from-white to-slate-50/50 rounded-xl border border-amber-200/60 p-6 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700">
                          <Award className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100/60 px-2.5 py-0.5 rounded">
                          {ach.year}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900">
                        {ach.title}
                      </h4>

                      <div className="text-xs font-semibold text-slate-600 mt-1">
                        {ach.organization}
                      </div>

                      <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Institutional Honor</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
