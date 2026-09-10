import { useState, useEffect } from 'react';
import { verifiedDoctorData } from './data/doctorData';
import { DoctorProfile } from './types/doctor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Services } from './components/Services';
import { EducationTimeline } from './components/EducationTimeline';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { AchievementsCertifications } from './components/AchievementsCertifications';
import { Publications } from './components/Publications';
import { Memberships } from './components/Memberships';
import { PatientCare } from './components/PatientCare';
import { AppointmentCTA } from './components/AppointmentCTA';
import { Contact } from './components/Contact';
import { PatientFAQ } from './components/PatientFAQ';
import { Footer } from './components/Footer';
import { ProfileCustomizerModal } from './components/ProfileCustomizerModal';

export function App() {
  const [doctor, setDoctor] = useState<DoctorProfile>(() => {
    try {
      const saved = localStorage.getItem('doctor_profile_data');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not parse saved doctor data', e);
    }
    return verifiedDoctorData;
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('');

  // Save to local storage when updated
  const handleUpdateDoctor = (updated: DoctorProfile) => {
    setDoctor(updated);
    try {
      localStorage.setItem('doctor_profile_data', JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not persist doctor data', e);
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServicePreset(serviceTitle);
  };

  // Intersection observer for active navigation section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [doctor]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-navy-900 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        doctor={doctor}
        activeSection={activeSection}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        isCustomized={doctor.fullName !== verifiedDoctorData.fullName}
        onSelectService={handleSelectService}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          doctor={doctor}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* 2. Trust / Quick Stats */}
        <TrustStats doctor={doctor} />

        {/* 3. About Section */}
        <About doctor={doctor} />

        {/* 4. Areas of Clinical Expertise */}
        <Expertise 
          doctor={doctor} 
          onSelectExpertise={handleSelectService}
        />

        {/* 5. Services / Clinical Procedures */}
        <Services 
          doctor={doctor} 
          onSelectService={handleSelectService}
        />

        {/* 6. Education Timeline */}
        <EducationTimeline doctor={doctor} />

        {/* 7. Experience Timeline */}
        <ExperienceTimeline doctor={doctor} />

        {/* 8. Achievements & Certifications */}
        <AchievementsCertifications doctor={doctor} />

        {/* 9. Research & Publications (Hidden if empty) */}
        <Publications doctor={doctor} />

        {/* 10. Professional Memberships */}
        <Memberships doctor={doctor} />

        {/* 11. Patient-Centric Care Philosophy */}
        <PatientCare doctor={doctor} />

        {/* 12. Appointment Call-To-Action Banner */}
        <AppointmentCTA doctor={doctor} />

        {/* 13. Contact & Appointment Scheduling Form */}
        <Contact 
          doctor={doctor} 
          selectedServicePreset={selectedServicePreset}
        />

        {/* 14. Patient Guidance & FAQ */}
        <PatientFAQ />
      </main>

      {/* Footer */}
      <Footer doctor={doctor} />

      {/* Profile Data Customizer / Template Switcher Modal */}
      <ProfileCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        currentProfile={doctor}
        onUpdateProfile={handleUpdateDoctor}
      />
    </div>
  );
}

export default App;
