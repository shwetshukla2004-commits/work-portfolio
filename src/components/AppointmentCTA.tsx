import React from 'react';
import { DoctorProfile } from '../types/doctor';
import { Calendar, Phone, Mail, Clock, ArrowRight } from './IconHelper';

interface AppointmentCTAProps {
  doctor: DoctorProfile;
}

export const AppointmentCTA: React.FC<AppointmentCTAProps> = ({ doctor }) => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 bg-navy-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-navy-950/70 border border-navy-800 rounded-2xl p-8 sm:p-12 shadow-premium">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left copy */}
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>Consultation Scheduling</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Schedule a Clinical Consultation
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Book an in-person outpatient consultation or request a second opinion for complex coronary evaluations. Both direct appointments and physician referrals are accepted.
              </p>

              {/* Quick contact pills */}
              <div className="flex flex-wrap items-center gap-4 pt-3 text-xs sm:text-sm text-slate-300">
                <a
                  href={`tel:${doctor.contact.phone.replace(/[^+\d]/g, '')}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span className="font-semibold">{doctor.contact.phone}</span>
                </a>
                <span className="text-navy-700 hidden sm:inline">•</span>
                <a
                  href={`mailto:${doctor.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-teal-400" />
                  <span>{doctor.contact.email}</span>
                </a>
              </div>
            </div>

            {/* Right action */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                type="button"
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-navy-950 bg-teal-400 hover:bg-teal-300 transition-all shadow-md hover:shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-slate-400 text-center lg:text-left flex items-center justify-center lg:justify-start gap-1.5 pt-1">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>Responses processed during clinic hours</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
