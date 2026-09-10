import React from 'react';
import { DoctorProfile } from '../types/doctor';
import { 
  Building2, 
  CheckCircle2, 
  Clock, 
  GraduationCap, 
  Stethoscope 
} from 'lucide-react';

interface TrustStatsProps {
  doctor: DoctorProfile;
}

export const TrustStats: React.FC<TrustStatsProps> = ({ doctor }) => {
  const stats = [
    {
      icon: Clock,
      label: "Clinical Experience",
      value: doctor.yearsOfExperience,
      subtext: "Dedicated Patient & Interventional Care",
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      icon: GraduationCap,
      label: "Specialist Credentials",
      value: doctor.qualifications.split(',').slice(0, 2).join(', '),
      subtext: doctor.qualifications,
      color: "text-navy-900",
      bg: "bg-navy-50"
    },
    {
      icon: Stethoscope,
      label: "Clinical Specialization",
      value: doctor.specialization,
      subtext: doctor.subSpecialization || "Consultative & Interventional",
      color: "text-teal-700",
      bg: "bg-teal-50"
    },
    {
      icon: Building2,
      label: "Hospital Leadership",
      value: "Senior Consultant",
      subtext: doctor.currentHospital.split('&')[0].trim(),
      color: "text-navy-900",
      bg: "bg-navy-50"
    }
  ];

  return (
    <section className="bg-slate-50 py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className={`p-2 rounded-lg ${stat.bg}`}>
                    <Icon className={`w-4 h-4 ${stat.color}`} />
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight line-clamp-1" title={stat.value}>
                    {stat.value}
                  </div>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1" title={stat.subtext}>
                    {stat.subtext}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-teal-800 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                  <span>Verified Medical Credential</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
