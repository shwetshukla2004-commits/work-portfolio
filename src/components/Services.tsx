import React, { useState } from 'react';
import { DoctorProfile } from '../types/doctor';
import { 
  Stethoscope, 
  CheckCircle2, 
  FileText, 
  Info, 
  Calendar, 
  ChevronRight,
  ShieldCheck 
} from './IconHelper';

interface ServicesProps {
  doctor: DoctorProfile;
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ doctor, onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(doctor.services.map(s => s.category)))];

  const filteredServices = activeCategory === 'All' 
    ? doctor.services 
    : doctor.services.filter(s => s.category === activeCategory);

  const handleInquireService = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-50 text-navy-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
            <span>Clinical Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Services & Diagnostic Procedures
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Structured, evidence-aligned diagnostic evaluations and catheter-based interventional therapies provided within accredited clinical facilities.
          </p>
        </div>

        {/* Category Filters */}
        {categories.length > 2 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 hover:bg-white hover:shadow-card transition-all duration-200 group"
            >
              <div className="space-y-4">
                
                {/* Category & Index badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/70">
                    {service.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-navy-900 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Clinical Indications */}
                {service.clinicalIndications && service.clinicalIndications.length > 0 && (
                  <div className="pt-3 space-y-2">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Common Clinical Indications:
                    </span>
                    <ul className="space-y-1.5">
                      {service.clinicalIndications.map((ind, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Patient Preparation & Consultation Notes */}
                {(service.consultationDetails || service.patientPreparation) && (
                  <div className="mt-4 p-3.5 rounded-xl bg-white border border-slate-200/80 space-y-1.5 text-xs">
                    {service.patientPreparation && (
                      <div className="flex items-start gap-2 text-slate-700">
                        <Info className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900">Patient Preparation:</strong> {service.patientPreparation}
                        </div>
                      </div>
                    )}
                    {service.consultationDetails && (
                      <div className="flex items-start gap-2 text-slate-600">
                        <FileText className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <div>{service.consultationDetails}</div>
                      </div>
                    )}
                  </div>
                )}

              </div>

              {/* Service Footer / Inquire Action */}
              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Conducted at St. Mary's Heart Institute</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleInquireService(service.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-navy-900 bg-white hover:bg-navy-900 hover:text-white border border-slate-200 shadow-subtle transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-600 group-hover:text-teal-300" />
                  <span>Book for This Service</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
