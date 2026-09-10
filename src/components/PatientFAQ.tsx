import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from './IconHelper';

export const PatientFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How should I prepare for my first cardiology consultation?",
      answer: "Please bring a complete, up-to-date list of all prescription and over-the-counter medications with dosages. Bring prior diagnostic test results, including previous electrocardiograms (ECGs), echocardiogram reports, exercise stress tests, and coronary angiogram recordings on CD/USB if available. If your visit involves same-day fasting lipid profiling or echocardiography, our team will advise you on dietary preparation beforehand."
    },
    {
      question: "How do I arrange a second opinion for coronary stenting or bypass surgery?",
      answer: "Second opinions are an established component of Dr. Cairns's consultative practice. Please request your primary cardiologist or hospital medical records department to forward your diagnostic coronary angiography films (DICOM disc), operative notes, and recent clinical summaries prior to your consultation date to allow comprehensive pre-review."
    },
    {
      question: "Are self-referrals accepted, or do I need a physician's referral?",
      answer: "Both direct patient self-referrals and formal physician referrals are welcomed. However, depending on your individual health insurance policy, some insurance plans require a referral from your primary care provider for specialist reimbursement. We encourage patients to verify insurance pre-authorization requirements with their health plan."
    },
    {
      question: "What happens during a cardiac catheterization procedure?",
      answer: "Diagnostic cardiac catheterization is performed under local anesthesia and mild conscious sedation in the catheterization laboratory. In over 90% of cases, Dr. Cairns accesses the heart arteries via the wrist (radial artery approach), which significantly enhances patient comfort and allows immediate post-procedure sitting and same-day recovery for elective cases."
    },
    {
      question: "How are urgent symptoms managed outside regular clinic hours?",
      answer: "For life-threatening symptoms—including crushing retrosternal chest pain, radiating discomfort to the jaw or left arm, acute shortness of breath, or unexplained syncope (fainting)—patients must dial 911 or visit the nearest emergency department immediately. For non-urgent clinical queries, registered patients can leave a message through the clinic line."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-50 text-navy-900 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>Patient Guidance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Essential guidelines for prospective patients, referral scheduling, and pre-consultation preparation.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-slate-50/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-navy-900 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-navy-100 text-navy-900 text-xs flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-teal-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
