export interface DoctorRegistration {
  council: string;
  registrationNumber: string;
  jurisdiction: string;
  status: string;
  verificationLink?: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  clinicalFocus: string[];
  diagnosticApproaches: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  clinicalIndications: string[];
  consultationDetails: string;
  patientPreparation?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  honors?: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  position: string;
  organization: string;
  department: string;
  location: string;
  duration: string;
  isCurrent: boolean;
  responsibilities: string[];
  clinicalScope?: string;
  highlights?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuingBody: string;
  year: string;
  credentialId?: string;
  status: 'Active' | 'Lifetime' | 'Board Certified';
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  journal: string;
  year: string;
  authors: string;
  doi?: string;
  pubmedId?: string;
  link?: string;
  type: 'Peer-Reviewed Journal' | 'Clinical Guideline' | 'Invited Editorial' | 'Conference Abstract';
  citationCount?: number;
}

export interface MembershipItem {
  id: string;
  role: string;
  organization: string;
  sinceYear: string;
  tier: 'Fellow' | 'Life Member' | 'Active Member' | 'Committee Member';
}

export interface ClinicalSchedule {
  day: string;
  hours: string;
  type: 'Outpatient Clinic' | 'Catheterization Lab / Procedures' | 'Academic & Ward Rounds';
  location: string;
}

export interface PatientCarePillar {
  title: string;
  description: string;
  iconName: string;
}

export interface DoctorProfile {
  // Core Identifiers
  fullName: string;
  professionalTitle: string;
  specialization: string;
  subSpecialization: string;
  qualifications: string;
  yearsOfExperience: string;
  currentPosition: string;
  currentHospital: string;
  previousInstitutions: string[];
  location: string;
  languages: string[];
  registration: DoctorRegistration;
  photoUrl: string;

  // Bio & Philosophy
  tagline: string;
  shortIntroduction: string;
  detailedAbout: string[];
  medicalPhilosophy: string;
  patientCarePhilosophy: {
    summary: string;
    quote: string;
    pillars: PatientCarePillar[];
    clinicalApproachNotes: string[];
  };

  // Structured Clinical Data
  areasOfExpertise: ExpertiseItem[];
  services: ServiceItem[];
  education: EducationItem[];
  experience: ExperienceItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
  publications: PublicationItem[];
  memberships: MembershipItem[];

  // Practice & Contact
  contact: {
    phone: string;
    clinicalOfficePhone: string;
    email: string;
    hospitalName: string;
    department: string;
    address: string;
    suite: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    appointmentInstructions: string[];
    schedule: ClinicalSchedule[];
    mapsEmbedUrl?: string;
    externalMapsUrl: string;
    socialProfiles: {
      linkedin?: string;
      researchGate?: string;
      orcid?: string;
      googleScholar?: string;
    };
  };

  // Governance & Disclaimer
  disclaimer: string;
}
