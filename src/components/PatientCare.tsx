import React from 'react';
import { DoctorProfile } from '../types/doctor';
import { 
  HeartHandshake, 
  ShieldCheck, 
  Users, 
  Network, 
  Quote, 
  CheckCircle2, 
  Stethoscope
} from './IconHelper';

interface PatientCareProps {
  doctor: DoctorProfile;
}

export const PatientCare: React.FC<PatientCareProps> = ({ doctor }) => {
  const { summary, quote, pillars, clinicalApproachNotes } = doctor.patientCarePhilosophy;

  return (
    <section id="patient-care" className="py-16 md:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-teal-900 border border-teal-200 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-teal-600" />
            <span>Clinical Ethos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Patient-Centric Care Philosophy
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            {summary}
          </p>
        </div>

        {/* Hero Quote & Clinical Image Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Quote Card */}
          <div className="lg:col-span-7 bg-navy-950 text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between relative shadow-card overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Quote className="w-32 h-32 text-white" />
            </div>

            <div className="relative z-10 space-y-4">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest flex items-center gap-1.5">
                <Stethoscope className="w-4 h-4" />
                Guiding Clinical Principle
              </span>
              <p className="text-lg sm:text-2xl font-serif italic text-slate-100 leading-relaxed">
                "{quote}"
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-navy-800 text-sm text-slate-300">
              <div className="font-bold text-white">{doctor.fullName}</div>
              <div className="text-xs text-teal-300">{doctor.professionalTitle}</div>
            </div>
          </div>

          {/* Facility Image & Clinical Standards */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 overflow-hidden shadow-subtle flex flex-col bg-slate-50">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src="/images/clinical-facility.jpg"
                alt="Modern Consultation Suite"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 bg-navy-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-white">
                Consultation Suite • {doctor.currentHospital.split('&')[0].trim()}
              </div>
            </div>
            
            <div className="p-5 space-y-2 flex-1">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Clinical Environment Standards
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designed for calm, confidential, unhurried conversations where patient questions, treatment alternatives, and procedural recovery timelines are fully explored.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-7 hover:bg-white hover:shadow-card hover:border-slate-300 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-teal-300 flex items-center justify-center flex-shrink-0 shadow-sm">
                  {idx === 0 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 1 && <Users className="w-6 h-6" />}
                  {idx === 2 && <Network className="w-6 h-6" />}
                  {idx === 3 && <HeartHandshake className="w-6 h-6" />}
                </div>

                <div className="space-y-1.5 flex-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Approach Checklist */}
        {clinicalApproachNotes && clinicalApproachNotes.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-teal-50/60 border border-teal-100">
            <h3 className="text-base font-bold text-teal-950 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-700" />
              <span>Standard Patient Consultation Protocol</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {clinicalApproachNotes.map((note, nIdx) => (
                <div key={nIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-teal-900 bg-white/80 p-3 rounded-lg border border-teal-100/80">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
