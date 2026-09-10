import React, { useState, useEffect } from 'react';
import { DoctorProfile } from '../types/doctor';
import { 
  Menu, 
  X, 
  Calendar, 
  Phone, 
  FileText, 
  Sliders, 
  ChevronRight
} from './IconHelper';

interface NavbarProps {
  doctor: DoctorProfile;
  activeSection: string;
  onOpenCustomizer: () => void;
  isCustomized: boolean;
  onSelectService?: (serviceTitle: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  doctor,
  activeSection,
  onOpenCustomizer,
  isCustomized
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Services', href: '#services' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    ...(doctor.publications && doctor.publications.length > 0
      ? [{ label: 'Research', href: '#publications' }]
      : []),
    { label: 'Patient Care', href: '#patient-care' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handlePrintCV = () => {
    window.print();
  };

  return (
    <>
      {/* Top Clinical Announcement / Emergency Notice Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
              CLINICAL PRACTICE
            </span>
            <span className="text-slate-300 text-xs hidden sm:inline">
              {doctor.currentHospital}
            </span>
            <span className="text-slate-400 text-xs hidden md:inline">
              • {doctor.registration.council} ({doctor.registration.registrationNumber})
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${doctor.contact.phone.replace(/[^+\d]/g, '')}`} 
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{doctor.contact.phone}</span>
            </a>
            <span className="text-navy-700 hidden sm:inline">|</span>
            <button
              onClick={onOpenCustomizer}
              className="flex items-center gap-1 text-teal-400 hover:text-teal-300 transition-colors font-medium underline underline-offset-2"
              title="Customize Doctor Data / View Template Mode"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{isCustomized ? 'Data Configured' : 'Doctor Profile Data'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
            : 'bg-white border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand / Doctor Monogram */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3.5 group focus:outline-none"
            >
              <div className="w-11 h-11 rounded-lg bg-navy-900 flex items-center justify-center text-white font-bold text-lg shadow-sm border border-navy-800 transition-transform group-hover:scale-105">
                <span className="tracking-tight text-teal-300 font-serif">Dr</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 text-base sm:text-lg tracking-tight leading-tight group-hover:text-navy-900 transition-colors">
                  {doctor.fullName}
                </span>
                <span className="text-xs text-slate-500 font-medium leading-tight line-clamp-1">
                  {doctor.professionalTitle}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-navy-900 bg-navy-50 font-semibold'
                        : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Actions: Print CV & Schedule Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={handlePrintCV}
                className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"
                title="Print or Save CV as PDF"
              >
                <FileText className="w-3.5 h-3.5 text-slate-600" />
                <span>Print CV</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 active:bg-navy-950 transition-all shadow-sm hover:shadow-md"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Schedule Consultation</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center sm:hidden gap-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="p-2 rounded-lg bg-navy-900 text-white text-xs font-semibold"
                aria-label="Book Consultation"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            <div className="pb-3 border-b border-slate-100 mb-2">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Doctor Navigation
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-navy-900 bg-navy-50 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-navy-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Schedule Consultation</span>
              </a>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={handlePrintCV}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Print CV</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCustomizer();
                  }}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Edit Profile Data</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
