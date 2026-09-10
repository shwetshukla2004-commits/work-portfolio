import React, { useState } from 'react';
import { DoctorProfile } from '../types/doctor';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Building2, 
  FileText,
  Download
} from './IconHelper';

interface ContactProps {
  doctor: DoctorProfile;
  selectedServicePreset?: string;
}

export const Contact: React.FC<ContactProps> = ({ doctor, selectedServicePreset }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (09:00 AM - 12:00 PM)',
    consultationReason: selectedServicePreset || 'Comprehensive Cardiovascular Consultation',
    referralType: 'Self-Referral',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Update consultationReason if selectedServicePreset changes
  React.useEffect(() => {
    if (selectedServicePreset) {
      setFormData(prev => ({ ...prev, consultationReason: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your name, email, and contact phone number.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate administrative triage submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const handleDownloadVCard = () => {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${doctor.fullName}`,
      `TITLE:${doctor.professionalTitle}`,
      `ORG:${doctor.currentHospital};${doctor.contact.department}`,
      `TEL;TYPE=WORK,VOICE:${doctor.contact.phone}`,
      `EMAIL;TYPE=WORK,INTERNET:${doctor.contact.email}`,
      `ADR;TYPE=WORK:;;${doctor.contact.address};${doctor.contact.city};${doctor.contact.state};${doctor.contact.postalCode};${doctor.contact.country}`,
      `NOTE:Registration: ${doctor.registration.council} - ${doctor.registration.registrationNumber}`,
      'END:VCARD'
    ].join('\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${doctor.fullName.replace(/\s+/g, '_')}_Contact.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-50 text-navy-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-teal-600" />
            <span>Consultation & Practice Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact & Appointment Scheduling
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Schedule an outpatient evaluation, request an interventional second opinion, or contact our clinical administrative office.
          </p>
        </div>

        {/* Emergency Notice Banner */}
        <div className="mb-10 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <strong className="font-bold text-amber-950 block">Emergency Medical Advisory:</strong>
            <span>
              If you are experiencing severe crushing chest pain, sudden shortness of breath, loss of consciousness, or symptoms of a medical emergency, please immediately dial <strong>911</strong> or proceed to the nearest emergency department. Do not use this website form for acute emergencies.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Clinic Address, Hours, Map, vCard */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Hospital & Suite Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-subtle space-y-6">
              <div className="flex items-start justify-between gap-2 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {doctor.contact.hospitalName}
                  </h3>
                  <p className="text-xs text-teal-700 font-medium mt-0.5">
                    {doctor.contact.department}
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-navy-50 text-navy-900">
                  <Building2 className="w-5 h-5 text-teal-600" />
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-medium text-slate-800 block">
                      {doctor.contact.address}
                    </span>
                    <span className="text-slate-600 text-xs block">
                      {doctor.contact.suite}
                    </span>
                    <span className="text-slate-600 text-xs block">
                      {doctor.contact.city}, {doctor.contact.state} {doctor.contact.postalCode}, {doctor.contact.country}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-slate-500 block">Consultation Desk:</span>
                    <a href={`tel:${doctor.contact.phone.replace(/[^+\d]/g, '')}`} className="font-bold text-navy-900 hover:text-teal-700 transition-colors">
                      {doctor.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-slate-500 block">Clinical Office Email:</span>
                    <a href={`mailto:${doctor.contact.email}`} className="font-medium text-slate-800 hover:text-navy-900 transition-colors">
                      {doctor.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Actions: Map & vCard */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                <a
                  href={doctor.contact.externalMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <button
                  type="button"
                  onClick={handleDownloadVCard}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-navy-900 bg-navy-50 hover:bg-navy-100 border border-navy-100 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-teal-600" />
                  <span>Save Contact</span>
                </button>
              </div>
            </div>

            {/* Clinic Schedule Hours Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-subtle space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>Outpatient Clinical Schedule</span>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                {doctor.contact.schedule.map((slot, sIdx) => (
                  <div key={sIdx} className="py-2.5 flex items-center justify-between gap-2">
                    <div>
                      <span className="font-bold text-slate-800 block">{slot.day}</span>
                      <span className="text-[11px] text-slate-500">{slot.type}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-slate-700 font-medium block">{slot.hours}</span>
                      <span className="text-[11px] text-slate-400">{slot.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Appointment Preparation Checklist */}
            <div className="p-5 rounded-xl bg-slate-100/80 border border-slate-200 space-y-2 text-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-teal-600" />
                <span>What to Bring to Your Consultation:</span>
              </div>
              <ul className="space-y-1 text-slate-600 list-disc list-inside">
                <li>Government-issued photo identification & health insurance card</li>
                <li>Comprehensive list of current medications with exact dosages</li>
                <li>Previous cardiac investigation records (ECGs, stress tests, angiogram CDs)</li>
                <li>Recent clinical laboratory test results (lipid panels, metabolic reports)</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-card">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Request a Consultation
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Complete the inquiry form below. Our clinical intake coordinator will review and contact you within 1 business day to confirm scheduling.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-teal-50 border border-teal-200 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-teal-950">
                      Inquiry Received Successfully
                    </h4>
                    <p className="text-xs sm:text-sm text-teal-900 max-w-md mx-auto">
                      Thank you, <span className="font-bold">{formData.fullName}</span>. Your consultation request for <strong>{formData.consultationReason}</strong> has been transmitted to Dr. Cairns's administrative office.
                    </p>
                  </div>
                  <div className="p-3 bg-white/90 rounded-lg text-xs text-slate-600 text-left space-y-1 max-w-md mx-auto border border-teal-100">
                    <div><strong>Requested Date:</strong> {formData.preferredDate || 'Earliest available'}</div>
                    <div><strong>Contact Phone:</strong> {formData.phone}</div>
                    <div><strong>Contact Email:</strong> {formData.email}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        preferredDate: '',
                        preferredTime: 'Morning (09:00 AM - 12:00 PM)',
                        consultationReason: 'Comprehensive Cardiovascular Consultation',
                        referralType: 'Self-Referral',
                        message: '',
                      });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold text-teal-900 bg-teal-100 hover:bg-teal-200 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Patient Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Patient Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g., Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent bg-slate-50/50"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="patient@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Reason & Referral Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="reason" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Reason for Consultation
                      </label>
                      <select
                        id="reason"
                        value={formData.consultationReason}
                        onChange={(e) => setFormData({ ...formData, consultationReason: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent bg-slate-50/50"
                      >
                        <option value="Comprehensive Cardiovascular Consultation">Comprehensive Consultation</option>
                        <option value="Second Opinion for Coronary Angiogram / Stenting">Second Opinion (Angiogram/Stent)</option>
                        <option value="Preventive Cardiovascular Risk Stratification">Preventive Risk Stratification</option>
                        <option value="Heart Failure Evaluation & Management">Heart Failure Evaluation</option>
                        <option value="Post-Revascularization Follow-up">Post-Procedure Follow-up</option>
                        <option value="Other Clinical Inquiry">Other Clinical Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="referral" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Referral Source
                      </label>
                      <select
                        id="referral"
                        value={formData.referralType}
                        onChange={(e) => setFormData({ ...formData, referralType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent bg-slate-50/50"
                      >
                        <option value="Self-Referral">Self-Referral</option>
                        <option value="Primary Care Physician Referral">Physician Referral</option>
                        <option value="Hospital Discharge Follow-up">Hospital Discharge Follow-up</option>
                        <option value="Cardiologist Second Opinion">Specialist Colleague Referral</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        id="date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Window
                      </label>
                      <select
                        id="time"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent bg-slate-50/50"
                      >
                        <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM – 12:00 PM)</option>
                        <option value="Afternoon (01:00 PM - 04:30 PM)">Afternoon (01:00 PM – 04:30 PM)</option>
                        <option value="First Available Opening">First Available Opening</option>
                      </select>
                    </div>
                  </div>

                  {/* Clinical Notes Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Brief Clinical Summary / Relevant Symptoms (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline any relevant symptoms, previous cardiac diagnoses, or specific questions for Dr. Cairns..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent bg-slate-50/50 resize-none"
                    />
                  </div>

                  {/* Notice & Submit Button */}
                  <div className="pt-2 space-y-3">
                    <p className="text-[11px] text-slate-500 leading-normal">
                      * Submitting this request sends an encrypted inquiry to our clinical triage desk. This does not establish an immediate patient-physician relationship until formally registered and confirmed.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 active:bg-navy-950 transition-all shadow-md hover:shadow-lg disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Transmitting Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-teal-300" />
                          <span>Submit Consultation Request</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
