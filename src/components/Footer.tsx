import React from 'react';
import { DoctorProfile } from '../types/doctor';
import { 
  ShieldCheck, 
  Phone, 
  Mail, 
  ArrowUp, 
  Building2 
} from './IconHelper';

interface FooterProps {
  doctor: DoctorProfile;
}

export const Footer: React.FC<FooterProps> = ({ doctor }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Doctor Info & Crest */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center text-navy-950 font-bold text-lg font-serif shadow-sm">
                Dr
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {doctor.fullName}
                </h3>
                <p className="text-xs text-teal-300 font-medium">
                  {doctor.qualifications}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {doctor.professionalTitle} at {doctor.currentHospital}. Committed to clinical precision, evidence-guided cardiovascular care, and patient-centered medicine.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Licensing: {doctor.registration.council}</span>
              </div>
              <div className="text-[11px] text-slate-500 pl-6">
                Registration No: {doctor.registration.registrationNumber}
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Clinical Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-teal-300 transition-colors">
                  Professional Profile & Philosophy
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-teal-300 transition-colors">
                  Areas of Clinical Expertise
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  Services & Interventions
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-teal-300 transition-colors">
                  Medical Education & Fellowships
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-teal-300 transition-colors">
                  Hospital Experience & Leadership
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-teal-300 transition-colors">
                  Board Certifications & Honors
                </a>
              </li>
              {doctor.publications && doctor.publications.length > 0 && (
                <li>
                  <a href="#publications" className="hover:text-teal-300 transition-colors">
                    Academic Research & Publications
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Practice & Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Practice Address
            </h4>
            <div className="text-xs sm:text-sm text-slate-400 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>
                  {doctor.contact.hospitalName}<br />
                  {doctor.contact.department}<br />
                  {doctor.contact.address}, {doctor.contact.suite}<br />
                  {doctor.contact.city}, {doctor.contact.state} {doctor.contact.postalCode}
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href={`tel:${doctor.contact.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white transition-colors">
                  {doctor.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href={`mailto:${doctor.contact.email}`} className="hover:text-white transition-colors">
                  {doctor.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Mandatory Medical Disclaimer Banner */}
        <div className="mt-12 pt-8 border-t border-navy-800">
          <div className="p-4 rounded-xl bg-navy-900/60 border border-navy-800 text-slate-400 text-xs leading-relaxed">
            <p className="font-semibold text-slate-300 mb-1">
              Medical Disclaimer:
            </p>
            <p>
              {doctor.disclaimer}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Back to Top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {doctor.fullName}. All professional medical rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => window.print()}
              className="hover:text-slate-300 transition-colors"
            >
              Print / Save CV
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-teal-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
