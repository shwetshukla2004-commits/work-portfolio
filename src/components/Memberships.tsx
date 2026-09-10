import React from 'react';
import { DoctorProfile } from '../types/doctor';
import { Users, ShieldCheck } from './IconHelper';

interface MembershipsProps {
  doctor: DoctorProfile;
}

export const Memberships: React.FC<MembershipsProps> = ({ doctor }) => {
  if (!doctor.memberships || doctor.memberships.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-50 text-navy-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-teal-600" />
            <span>Professional Affiliations</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Professional Society Memberships
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Active memberships and elected collegiate fellowships in leading international and national cardiovascular societies.
          </p>
        </div>

        {/* Memberships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {doctor.memberships.map((mem) => (
            <div
              key={mem.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-subtle hover:border-slate-300 hover:shadow-card transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center border border-navy-100 flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
              </div>

              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    {mem.tier}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Since {mem.sinceYear}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 pt-0.5 leading-snug">
                  {mem.organization}
                </h3>

                <p className="text-xs text-slate-600 font-medium">
                  {mem.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
