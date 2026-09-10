import React from 'react';
import { DoctorProfile } from '../types/doctor';
import { 
  ShieldCheck, 
  Award, 
  Calendar, 
  ArrowDown, 
  Building2, 
  CheckCircle2, 
  FileCheck, 
  Stethoscope 
} from './IconHelper';

interface HeroProps {
  doctor: DoctorProfile;
  onOpenCustomizer?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ doctor }) => {
  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-white border-b border-slate-200/80">
      {/* Subtle Medical Background Pattern */}
      <div className="absolute inset-0 bg-subtle-pattern pointer-events-none opacity-60" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-teal-50 rounded-full filter blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-navy-50 rounded-full filter blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left / Main Credentials Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Verified Medical Licensure Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50 border border-navy-100/80 text-navy-900 text-xs font-semibold tracking-wide shadow-sm">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Verified Medical Registration • {doctor.registration.jurisdiction}</span>
            </div>

            {/* Doctor Name & Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {doctor.fullName}
              </h1>
              
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-lg sm:text-xl font-bold text-navy-900">
                  {doctor.professionalTitle}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600 pt-1">
                <span className="inline-flex items-center gap-1.5 text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100 font-semibold text-xs sm:text-sm">
                  <Stethoscope className="w-4 h-4 text-teal-600" />
                  {doctor.subSpecialization || doctor.specialization}
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-700">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  {doctor.currentHospital}
                </span>
              </div>
            </div>

            {/* Tagline / Professional Statement */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {doctor.tagline}
            </p>

            {/* Verified Quick Attribute Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/90 shadow-subtle">
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Experience</div>
                <div className="text-base font-bold text-navy-900 mt-0.5">{doctor.yearsOfExperience}</div>
                <div className="text-[11px] text-slate-500">Clinical practice</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/90 shadow-subtle">
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Qualifications</div>
                <div className="text-sm font-bold text-navy-900 mt-0.5 truncate" title={doctor.qualifications}>
                  {doctor.qualifications.split(',')[0]} & {doctor.qualifications.split(',')[1] || 'FRCP'}
                </div>
                <div className="text-[11px] text-slate-500 truncate">{doctor.qualifications}</div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-lg bg-slate-50 border border-slate-200/90 shadow-subtle">
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Location</div>
                <div className="text-sm font-bold text-navy-900 mt-0.5 truncate">
                  {doctor.location.split(',')[0]}
                </div>
                <div className="text-[11px] text-slate-500 truncate">{doctor.location}</div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold text-white bg-navy-900 hover:bg-navy-800 active:bg-navy-950 transition-all shadow-md hover:shadow-lg"
              >
                <Calendar className="w-5 h-5 text-teal-300" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={() => handleScrollTo('about')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-base font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 border border-slate-300/80 transition-all"
              >
                <span>View Full Profile</span>
                <ArrowDown className="w-4 h-4 text-slate-600" />
              </button>

              <a
                href={`tel:${doctor.contact.clinicalOfficePhone.replace(/[^+\d]/g, '')}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-navy-900 py-2 px-3 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Office: {doctor.contact.clinicalOfficePhone}</span>
              </a>
            </div>

            {/* Subtle disclaimer */}
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
              <span>Accepting New Outpatient Consultations & Clinical Referrals</span>
            </div>

          </div>

          {/* Right / Portrait & Institutional Card Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Glow & Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-navy-900 to-teal-700 rounded-2xl opacity-10 blur-xl"></div>
              
              <div className="relative bg-white p-3 rounded-2xl border border-slate-200 shadow-elevated">
                {/* Doctor Portrait */}
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-slate-100">
                  <img
                    src={doctor.photoUrl}
                    alt={`${doctor.fullName} - ${doctor.professionalTitle}`}
                    className="w-full h-full object-cover object-top filter brightness-[1.02]"
                    loading="eager"
                  />

                  {/* Gradient Overlay for Bottom Badging */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>

                  {/* On-Image Verified Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200/80 shadow-sm flex items-center gap-1.5 text-xs font-bold text-navy-900">
                    <Award className="w-4 h-4 text-teal-600" />
                    <span>Senior Consultant</span>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs font-medium text-teal-300">
                      {doctor.currentHospital}
                    </div>
                    <div className="text-sm font-semibold tracking-wide">
                      {doctor.currentPosition}
                    </div>
                  </div>
                </div>

                {/* Sub-Card Institutional Credentials */}
                <div className="mt-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4 text-teal-600" />
                      Registration ID:
                    </span>
                    <span className="font-mono text-navy-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {doctor.registration.registrationNumber.split('/')[0].trim()}
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-500 leading-snug flex items-center justify-between">
                    <span>Medical Licensing Body:</span>
                    <span className="font-medium text-slate-700 text-right truncate max-w-[180px]">
                      {doctor.registration.council.split('&')[0].trim()}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
