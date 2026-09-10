import React, { useState } from 'react';
import { DoctorProfile } from '../types/doctor';
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  FileText, 
  Globe, 
  Heart, 
  MapPin, 
  Quote, 
  ShieldCheck, 
  UserCheck 
} from './IconHelper';

interface AboutProps {
  doctor: DoctorProfile;
}

export const About: React.FC<AboutProps> = ({ doctor }) => {
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-50 text-navy-900 text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About {doctor.fullName}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Clinical background, medical training, and patient care philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Biography & Clinical Philosophy */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Short Introduction Lead Box */}
            <div className="p-6 rounded-xl bg-slate-50 border-l-4 border-l-navy-900 border-y border-r border-slate-200 shadow-subtle">
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                {doctor.shortIntroduction}
              </p>
            </div>

            {/* Detailed Biography Content */}
            <div className="space-y-4 text-slate-700 leading-relaxed text-base">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-600" />
                <span>Clinical Background & Practice Overview</span>
              </h3>
              
              {doctor.detailedAbout.map((paragraph, index) => (
                <p 
                  key={index} 
                  className={index > 1 && !showFullBio ? 'hidden sm:block' : 'block'}
                >
                  {paragraph}
                </p>
              ))}

              {doctor.detailedAbout.length > 2 && (
                <button
                  onClick={() => setShowFullBio(!showFullBio)}
                  className="sm:hidden text-sm font-semibold text-navy-900 hover:text-teal-700 flex items-center gap-1 mt-2"
                >
                  {showFullBio ? 'Show Less' : 'Read Full Clinical Bio...'}
                </button>
              )}
            </div>

            {/* Medical Philosophy Callout Box */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-navy-900 via-navy-900 to-navy-950 text-white shadow-card overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Quote className="w-24 h-24 text-white" />
              </div>

              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider">
                  <Heart className="w-4 h-4 text-teal-400" />
                  <span>Medical Philosophy & Clinical Ethics</span>
                </div>

                <p className="text-lg sm:text-xl font-serif italic text-slate-100 leading-relaxed">
                  "{doctor.medicalPhilosophy}"
                </p>

                <div className="pt-2 text-sm text-slate-300 font-medium">
                  — {doctor.fullName}, <span className="text-teal-300">{doctor.qualifications}</span>
                </div>
              </div>
            </div>

            {/* Previous Institutional Appointments */}
            {doctor.previousInstitutions && doctor.previousInstitutions.length > 0 && (
              <div className="pt-2 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Prior Institutional Appointments & Fellowships
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctor.previousInstitutions.map((inst, i) => (
                    <div key={i} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>{inst}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Credentials & Fast Facts Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Credentials Summary Card */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-subtle space-y-5">
              <h3 className="text-base font-bold text-slate-900 tracking-tight pb-3 border-b border-slate-200 flex items-center justify-between">
                <span>Verified Credentials</span>
                <ShieldCheck className="w-4 h-4 text-teal-600" />
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Current Appointment
                  </span>
                  <span className="font-bold text-navy-900 block mt-0.5">
                    {doctor.currentPosition}
                  </span>
                  <span className="text-xs text-slate-600 block mt-0.5">
                    {doctor.currentHospital}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Medical Licensing & Registration
                  </span>
                  <span className="font-semibold text-slate-900 block mt-0.5">
                    {doctor.registration.council}
                  </span>
                  <span className="font-mono text-xs text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 inline-block mt-1">
                    {doctor.registration.registrationNumber}
                  </span>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Status: <span className="font-semibold text-emerald-700">{doctor.registration.status}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Clinical Location
                  </span>
                  <span className="text-slate-800 font-medium block mt-0.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {doctor.location}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Languages Spoken
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {doctor.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-white border border-slate-200 text-slate-700"
                      >
                        <Globe className="w-3 h-3 text-slate-400" />
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => window.print()}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold text-navy-900 bg-white hover:bg-slate-100 border border-slate-200 transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4 text-teal-600" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </button>
              </div>
            </div>

            {/* Clinical Notice Card */}
            <div className="p-5 bg-teal-50/70 rounded-xl border border-teal-100 text-xs text-teal-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-teal-950">
                <Award className="w-4 h-4 text-teal-700" />
                <span>Academic & Clinical Referral Notice</span>
              </div>
              <p className="text-teal-900 leading-relaxed">
                Consultations are provided by direct appointment and formal physician referral. Priority access is scheduled for post-intervention follow-ups and complex cardiac evaluations.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
