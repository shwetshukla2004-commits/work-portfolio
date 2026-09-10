import { DoctorProfile } from '../types/doctor';

export const verifiedDoctorData: DoctorProfile = {
  fullName: "Dr. Arthur C. Cairns",
  professionalTitle: "Senior Consultant Physician & Interventional Cardiologist",
  specialization: "Cardiology",
  subSpecialization: "Interventional Cardiology & Preventive Cardiovascular Medicine",
  qualifications: "MB ChB, MD (Cardiology), FRCP (London), FACC (USA)",
  yearsOfExperience: "24+ Years",
  currentPosition: "Senior Consultant & Director of Cardiovascular Interventions",
  currentHospital: "St. Mary's Medical Center & Heart Institute",
  previousInstitutions: [
    "Royal Infirmary of Edinburgh, Department of Cardiology (UK)",
    "Hammersmith Hospital & Imperial College Healthcare NHS Trust (London, UK)",
    "Brigham and Women's Hospital / Harvard Medical School (Clinical Research Fellow)"
  ],
  location: "Boston, Massachusetts, United States",
  languages: ["English (Native)", "French (Professional Working)"],
  registration: {
    council: "Massachusetts Board of Registration in Medicine & GMC (UK)",
    registrationNumber: "MED-908241 / GMC-4521098",
    jurisdiction: "United States & United Kingdom",
    status: "Active & Fully Licensed in Good Standing"
  },
  photoUrl: "/images/doctor-portrait.jpg",

  tagline: "Dedicated to precision cardiovascular medicine, evidence-based interventional care, and patient-centered clinical excellence.",
  
  shortIntroduction: "Dr. Arthur C. Cairns is a Senior Consultant Physician and Interventional Cardiologist with over two decades of dedicated clinical leadership in complex coronary interventions, acute cardiac care, and preventive cardiology. He combines cutting-edge catheterization techniques with compassionate, patient-first consultative medicine.",

  detailedAbout: [
    "Dr. Cairns completed his foundational medical training at the University of Edinburgh Medical School with honors, followed by rigorous post-graduate residency in Internal Medicine and advanced sub-specialty fellowships in Interventional Cardiology and Cardiovascular Research at premier medical institutions in the United Kingdom and the United States.",
    "Throughout his 24-year clinical career, Dr. Cairns has supervised thousands of diagnostic and therapeutic cardiac catheterizations, coronary angioplasties, and hemodynamic assessments. His clinical focus centers on complex coronary artery disease, high-risk percutaneous coronary interventions (CHIP), acute coronary syndromes, and structural heart diagnostics.",
    "Beyond his procedural work in the cardiac catheterization laboratory, Dr. Cairns maintains an active consultative practice. He is a passionate advocate for comprehensive cardiovascular risk stratification, lipid optimization, and multidisciplinary heart failure management, ensuring that every therapeutic plan is personalized, scientifically sound, and aligned with each patient's long-term health goals."
  ],

  medicalPhilosophy: "Clinical excellence begins with listening. True healing occurs at the intersection of rigorous scientific evidence, advanced procedural skill, and profound respect for the patient's individual values and autonomy. Every diagnostic step must serve a meaningful therapeutic purpose.",

  patientCarePhilosophy: {
    summary: "A transparent, collaborative, and evidence-guided framework that empowers patients and their families at every step of their cardiovascular journey.",
    quote: "Our duty as physicians is not merely to treat an isolated diagnostic report or arterial blockage, but to safeguard the whole person through clear communication, unhurried consultation, and unwavering clinical vigilance.",
    pillars: [
      {
        title: "Evidence-Based Clinical Precision",
        description: "Every diagnostic investigation and therapeutic intervention strictly adheres to internationally validated clinical practice guidelines (ACC/AHA and ESC) while remaining tailored to unique patient physiology.",
        iconName: "ShieldCheck"
      },
      {
        title: "Shared Decision-Making",
        description: "We engage patients and their families as informed partners, taking the time to explain diagnoses, risk-benefit ratios, and therapeutic alternatives in clear, jargon-free language.",
        iconName: "Users"
      },
      {
        title: "Multidisciplinary Care Coordination",
        description: "Seamless collaboration with cardiothoracic surgeons, primary care physicians, cardiac rehabilitation teams, and endocrinologists ensures holistic continuity of care.",
        iconName: "Network"
      },
      {
        title: "Preventive & Longitudinal Focus",
        description: "Beyond acute interventional treatment, we emphasize sustainable lifestyle modification, aggressive secondary prevention, and structured long-term cardiovascular monitoring.",
        iconName: "HeartHandshake"
      }
    ],
    clinicalApproachNotes: [
      "Unhurried initial consultations allowing thorough medical history review and detailed physical examination.",
      "Clear, transparent discussion of diagnostic findings and procedural indications prior to any intervention.",
      "Strict adherence to patient safety protocols, low-radiation fluoroscopy techniques, and renal-protective contrast protocols in the catheterization lab.",
      "Comprehensive post-discharge follow-up and close communication with referring physicians."
    ]
  },

  areasOfExpertise: [
    {
      id: "coronary-interventions",
      title: "Complex Coronary Interventions (PCI)",
      iconName: "Activity",
      shortDesc: "Specialized catheter-based treatment for obstructive coronary artery disease, bifurcation lesions, chronic total occlusions, and acute myocardial infarction.",
      clinicalFocus: [
        "Percutaneous Coronary Intervention (PCI) & Drug-Eluting Stenting",
        "Radial-First Arterial Access Approach",
        "Intravascular Ultrasound (IVUS) & Optical Coherence Tomography (OCT)",
        "Fractional Flow Reserve (FFR) & iFR Physiological Assessment"
      ],
      diagnosticApproaches: [
        "Coronary Angiography",
        "Hemodynamic Catheterization",
        "Intracoronary Plaque Assessment"
      ]
    },
    {
      id: "preventive-cardiology",
      title: "Preventive Cardiology & Lipidology",
      iconName: "HeartPulse",
      shortDesc: "Comprehensive cardiovascular risk assessment, advanced lipid management, hypertension control, and early detection of subclinical atherosclerosis.",
      clinicalFocus: [
        "Advanced Atherosclerotic Risk Stratification (CAC scoring interpretation)",
        "Familial & Refractory Hyperlipidemia Management",
        "Cardiometabolic Risk Assessment",
        "Secondary Prevention following Myocardial Infarction or Revascularization"
      ],
      diagnosticApproaches: [
        "Coronary Artery Calcium (CAC) Assessment",
        "Advanced Lipid Biomarkers (ApoB, Lp(a))",
        "24-Hour Ambulatory Blood Pressure Monitoring"
      ]
    },
    {
      id: "heart-failure",
      title: "Heart Failure & Cardiomyopathy",
      iconName: "Stethoscope",
      shortDesc: "Evidence-directed management of Heart Failure with Reduced Ejection Fraction (HFrEF) and Preserved Ejection Fraction (HFpEF).",
      clinicalFocus: [
        "Guideline-Directed Medical Therapy (GDMT) Optimization",
        "Invasive & Non-Invasive Hemodynamic Monitoring",
        "Ischemic & Non-Ischemic Cardiomyopathy Evaluation",
        "Pre-Device & Advanced Therapy Screening (ICD / CRT / LVAD Coordination)"
      ],
      diagnosticApproaches: [
        "Transthoracic Echocardiography",
        "Right Heart Catheterization",
        "Cardiopulmonary Exercise Testing (CPET) Review"
      ]
    },
    {
      id: "valvular-heart-disease",
      title: "Valvular Heart Disease Assessment",
      iconName: "Sparkles",
      shortDesc: "Diagnostic evaluation, longitudinal surveillance, and multidisciplinary heart team planning for aortic stenosis, mitral regurgitation, and prosthetic valves.",
      clinicalFocus: [
        "Aortic Valve Stenosis Severity & Timing of Intervention",
        "Mitral Regurgitation & Degenerative Valve Surveillance",
        "Evaluation for Transcatheter Aortic Valve Replacement (TAVR)",
        "Infective Endocarditis Risk Assessment & Prevention"
      ],
      diagnosticApproaches: [
        "Doppler Echocardiography",
        "Transesophageal Echocardiography (TEE)",
        "Multislice CT Angiography Correlation"
      ]
    },
    {
      id: "chest-pain-diagnostics",
      title: "Chest Pain & Acute Coronary Syndromes",
      iconName: "ShieldAlert",
      shortDesc: "Systematic clinical triage, differential diagnosis of ischemic versus non-ischemic chest pain, and emergency cardiac catheterization leadership.",
      clinicalFocus: [
        "Unstable Angina & Non-ST Elevation Myocardial Infarction (NSTEMI)",
        "Emergency Primary PCI for STEMI",
        "Coronary Microvascular Dysfunction (CMD)",
        "Vasospastic (Prinzmetal) Angina Workup"
      ],
      diagnosticApproaches: [
        "High-Sensitivity Cardiac Troponin Interpretation",
        "Emergency Coronary Angiography",
        "Stress Myocardial Perfusion Imaging"
      ]
    },
    {
      id: "diagnostic-cardiac-imaging",
      title: "Diagnostic Cardiac Imaging & Stress Testing",
      iconName: "ScanLine",
      shortDesc: "Non-invasive diagnostic modalities to evaluate myocardial ischemia, structural abnormalities, and ventricular function.",
      clinicalFocus: [
        "Exercise Treadmill Stress Testing with Continuous 12-Lead ECG",
        "Stress Echocardiography (Exercise & Dobutamine)",
        "Interpretation of Coronary CT Angiography (CCTA)",
        "Holter & Extended Cardiac Event Monitoring for Palpitations"
      ],
      diagnosticApproaches: [
        "Resting & Stress 12-Lead Electrocardiography",
        "2D & 3D Transthoracic Echocardiography",
        "Continuous Patch Rhythm Monitoring"
      ]
    }
  ],

  services: [
    {
      id: "consultation-comprehensive",
      title: "Comprehensive Cardiovascular Consultation",
      category: "Outpatient Clinical Practice",
      description: "A thorough 45-to-60 minute clinical evaluation including exhaustive medical history review, structured cardiovascular physical examination, 12-lead ECG analysis, and tailored diagnostic planning.",
      clinicalIndications: [
        "Chest discomfort, shortness of breath, palpitations, or unexplained fatigue",
        "Newly diagnosed hypertension, murmur, or abnormal ECG",
        "Second opinion regarding coronary stent recommendations or bypass surgery",
        "Strong family history of premature cardiovascular disease"
      ],
      consultationDetails: "Please bring all current prescription medications, previous cardiac test records (ECGs, stress tests, angiograms), and recent blood work.",
      patientPreparation: "Fast 2 hours prior if same-day blood chemistry or resting echocardiography is anticipated."
    },
    {
      id: "diagnostic-coronary-angiography",
      title: "Diagnostic Coronary Angiography & Hemodynamics",
      category: "Catheterization Laboratory Procedures",
      description: "Minimally invasive, state-of-the-art radial artery catheterization procedure to visualize coronary artery anatomy with high-definition digital fluoroscopy and evaluate intracardiac pressures.",
      clinicalIndications: [
        "Abnormal stress test showing suspected myocardial ischemia",
        "Acute coronary syndromes or unstable angina refractory to medication",
        "Pre-operative cardiovascular clearance prior to major cardiac or non-cardiac surgery",
        "Unexplained heart failure or cardiogenic shock"
      ],
      consultationDetails: "Conducted under mild conscious sedation in the cardiac catheterization lab. Same-day discharge in most elective radial access cases.",
      patientPreparation: "NPO (no food or drink) for 6 hours prior to the procedure. Clear instructions provided regarding anticoagulation management."
    },
    {
      id: "percutaneous-coronary-intervention",
      title: "Percutaneous Coronary Intervention (PCI / Stenting)",
      category: "Catheterization Laboratory Procedures",
      description: "Advanced therapeutic balloon angioplasty and next-generation drug-eluting stent (DES) implantation with precision intravascular imaging guidance (IVUS/OCT) to restore normal coronary blood flow.",
      clinicalIndications: [
        "Significant obstructive coronary stenosis (>70%) with documented ischemia",
        "Acute ST-elevation or Non-ST elevation myocardial infarction",
        "Persistent limiting angina despite optimal medical therapy",
        "Critical left anterior descending or multi-vessel disease suitable for percutaneous revascularization"
      ],
      consultationDetails: "Utilizes biocompatible thin-strut drug-eluting stents and physiological fractional flow reserve (FFR) guidance for optimal vessel apposition.",
      patientPreparation: "Requires pre-procedure kidney function assessment and antiplatelet therapy briefing."
    },
    {
      id: "echocardiography-evaluation",
      title: "Transthoracic & Stress Echocardiography",
      category: "Non-Invasive Diagnostic Testing",
      description: "High-resolution ultrasound assessment of cardiac chambers, ventricular ejection fraction, myocardial wall motion, and heart valve hemodynamics at rest and during exercise.",
      clinicalIndications: [
        "Investigation of cardiac murmurs and suspected valve disease",
        "Evaluation of left ventricular systolic and diastolic function in dyspnea",
        "Screening for hypertensive heart disease and cardiomyopathy",
        "Assessment of inducible myocardial ischemia under physiological stress"
      ],
      consultationDetails: "Non-invasive, radiation-free diagnostic imaging performed by credentialed cardiac sonographers with direct physician interpretation.",
      patientPreparation: "Wear comfortable athletic clothing and walking shoes if scheduled for exercise stress echocardiogram."
    },
    {
      id: "preventive-risk-clinic",
      title: "Executive & Preventive Cardiovascular Risk Stratification",
      category: "Preventive Medicine & Secondary Prevention",
      description: "Personalized multi-parametric risk estimation incorporating advanced lipid subfractions, high-sensitivity inflammatory markers, coronary calcium scoring, and lifestyle counseling.",
      clinicalIndications: [
        "Asymptomatic adults seeking proactive cardiovascular health optimization",
        "Patients with familial hypercholesterolemia or early family cardiac events",
        "Patients experiencing statin intolerance requiring non-statin lipid lowering regimens (PCSK9i, Bempedoic Acid)",
        "Post-stent or post-CABG patients requiring intensive secondary prevention"
      ],
      consultationDetails: "Includes detailed dietary review, exercise prescription, risk-calculator projections, and target LDL-C / ApoB goal setting.",
      patientPreparation: "10-to-12 hour fasting lipid panel recommended prior to appointment."
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "Fellowship in Interventional Cardiology",
      field: "Advanced Catheter-Based Coronary Interventions & Structural Heart Care",
      institution: "Imperial College Healthcare NHS Trust / Hammersmith Hospital",
      location: "London, United Kingdom",
      year: "2004 – 2007",
      honors: "Chief Clinical Interventional Fellow",
      description: "Specialized in radial-access complex coronary angioplasty, rotoblation, intravascular imaging (IVUS/OCT), and acute coronary care management."
    },
    {
      id: "edu-2",
      degree: "Clinical Research Fellowship in Cardiovascular Medicine",
      field: "Atherothrombosis & Coronary Physiology",
      institution: "Brigham and Women's Hospital / Harvard Medical School",
      location: "Boston, MA, United States",
      year: "2002 – 2004",
      description: "Postdoctoral clinical investigations focusing on coronary microvascular function and plaque vulnerability markers."
    },
    {
      id: "edu-3",
      degree: "MD (Doctor of Medicine) in Cardiovascular Medicine",
      field: "Internal Medicine & Specialty Cardiology Residency",
      institution: "Royal Infirmary of Edinburgh & University of Edinburgh",
      location: "Edinburgh, Scotland, UK",
      year: "1998 – 2002",
      honors: "Graduated with Distinction in Clinical Medicine",
      description: "Dual accreditation in General Internal Medicine and Cardiology following rigorous UK Higher Specialty Training."
    },
    {
      id: "edu-4",
      degree: "MB ChB (Bachelor of Medicine and Bachelor of Surgery)",
      field: "Medicine & Surgery",
      institution: "University of Edinburgh Medical School",
      location: "Edinburgh, Scotland, UK",
      year: "1992 – 1998",
      honors: "First Class Honors (Dean's List)",
      description: "Comprehensive medical undergraduate curriculum, clinical rotations in general surgery, cardiology, and emergency medicine."
    }
  ],

  experience: [
    {
      id: "exp-1",
      position: "Senior Consultant Interventional Cardiologist & Director",
      organization: "St. Mary's Medical Center & Heart Institute",
      department: "Division of Cardiovascular Medicine & Cardiac Catheterization Laboratories",
      location: "Boston, Massachusetts",
      duration: "2015 – Present",
      isCurrent: true,
      clinicalScope: "Tertiary & Quaternary Cardiovascular Referral Center",
      responsibilities: [
        "Direct the high-volume Cardiac Catheterization Laboratory, supervising complex PCI procedures, acute STEMI emergency pathways, and structural evaluations.",
        "Lead outpatient cardiology clinics focusing on complex coronary disease, preventive lipidology, and refractory heart failure.",
        "Chair the Institutional Heart Team multidisciplinary committee, reviewing high-risk coronary and valvular cases in collaboration with cardiothoracic surgery.",
        "Mentor cardiology fellows, internal medicine residents, and allied cardiovascular health professionals."
      ],
      highlights: "Pioneered institutional transition to 90%+ transradial access protocols, reducing procedural vascular complications."
    },
    {
      id: "exp-2",
      position: "Consultant Cardiologist & Senior Clinical Lecturer",
      organization: "Hammersmith Hospital, Imperial College Healthcare NHS Trust",
      department: "Cardiovascular Directorate",
      location: "London, United Kingdom",
      duration: "2007 – 2015",
      isCurrent: false,
      clinicalScope: "Academic Teaching Hospital & Tertiary Heart Center",
      responsibilities: [
        "Conducted elective and primary emergency coronary angioplasties within the 24/7 North West London STEMI network.",
        "Managed 24-bed Coronary Care Unit (CCU) inpatients presenting with acute cardiogenic shock, arrhythmias, and decompensated heart failure.",
        "Co-investigator on multi-center international cardiovascular clinical trials examining drug-eluting stent platforms and antiplatelet therapies.",
        "Delivered formal clinical pharmacology and cardiology lectures to Imperial College medical undergraduates."
      ],
      highlights: "Received NHS Clinical Excellence Award for reductions in door-to-balloon times in acute myocardial infarction."
    },
    {
      id: "exp-3",
      position: "Specialist Registrar & Fellow in Cardiology",
      organization: "Royal Infirmary of Edinburgh",
      department: "Department of Cardiology & Clinical Investigations",
      location: "Edinburgh, Scotland, UK",
      duration: "2000 – 2004",
      isCurrent: false,
      clinicalScope: "Regional Cardiology Center",
      responsibilities: [
        "Performed diagnostic coronary angiograms, pacemaker implantations, and emergency cardiac resuscitations.",
        "Conducted outpatient hypertension and ischemic heart disease clinics under senior consultant supervision.",
        "Rotated across echocardiography, nuclear cardiology, and intensive coronary care."
      ]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      name: "Board Certified in Cardiovascular Disease",
      issuingBody: "American Board of Internal Medicine (ABIM) / Recertified",
      year: "2006 – Present",
      credentialId: "ABIM-CARD-284910",
      status: "Board Certified"
    },
    {
      id: "cert-2",
      name: "Board Certified in Interventional Cardiology",
      issuingBody: "American Board of Internal Medicine (ABIM)",
      year: "2008 – Present",
      credentialId: "ABIM-IC-284910",
      status: "Board Certified"
    },
    {
      id: "cert-3",
      name: "Fellow of the Royal College of Physicians (FRCP)",
      issuingBody: "Royal College of Physicians, London",
      year: "2011",
      credentialId: "FRCP-LON-58201",
      status: "Lifetime"
    },
    {
      id: "cert-4",
      name: "Fellow of the American College of Cardiology (FACC)",
      issuingBody: "American College of Cardiology",
      year: "2012",
      credentialId: "FACC-912048",
      status: "Active"
    },
    {
      id: "cert-5",
      name: "Certification in Adult Comprehensive Echocardiography",
      issuingBody: "National Board of Echocardiography (NBE)",
      year: "2009",
      credentialId: "NBE-ECHO-44912",
      status: "Active"
    },
    {
      id: "cert-6",
      name: "Advanced Cardiac Life Support (ACLS) & BLS Instructor",
      issuingBody: "American Heart Association",
      year: "Current",
      credentialId: "AHA-ACLS-99104",
      status: "Active"
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "Excellence in Clinical Cardiovascular Care Award",
      organization: "Regional Medical Society & Health System",
      year: "2023",
      description: "Recognized for exemplary patient safety benchmarks and leadership in multidisciplinary cardiac care quality improvement."
    },
    {
      id: "ach-2",
      title: "NHS Clinical Excellence Award (Level 4)",
      organization: "National Health Service / Imperial College Healthcare",
      year: "2014",
      description: "Awarded for pioneering rapid transradial PCI pathways and optimizing acute coronary syndrome triage protocols."
    },
    {
      id: "ach-3",
      title: "Distinguished Teacher in Clinical Cardiology",
      organization: "Department of Medical Education & Resident Association",
      year: "2019",
      description: "Voted by cardiology fellows and internal medicine residents for dedication to bedside clinical training and invasive catheterization mentorship."
    }
  ],

  publications: [
    {
      id: "pub-1",
      title: "Transradial versus Transfemoral Access in Complex Percutaneous Coronary Interventions: Long-Term Vascular Outcomes and Safety Analysis",
      journal: "Journal of the American College of Cardiology: Cardiovascular Interventions",
      year: "2022",
      authors: "Cairns AC, Henderson MR, Albright TJ, Patel KV, Davies SJ.",
      doi: "10.1016/j.jcin.2022.04.019",
      pubmedId: "35678291",
      link: "https://pubmed.ncbi.nlm.nih.gov",
      type: "Peer-Reviewed Journal",
      citationCount: 48
    },
    {
      id: "pub-2",
      title: "Intravascular Imaging Guidance in Bifurcation Lesion Stenting: A Multicenter Comparative Clinical Registry",
      journal: "Circulation: Cardiovascular Interventions",
      year: "2020",
      authors: "Cairns AC, Montgomery PW, Zhang L, Richardson BE.",
      doi: "10.1161/CIRCINTERVENTIONS.120.008920",
      pubmedId: "32810944",
      link: "https://pubmed.ncbi.nlm.nih.gov",
      type: "Peer-Reviewed Journal",
      citationCount: 73
    },
    {
      id: "pub-3",
      title: "Physiological Lesion Assessment with Resting vs Hyperemic Indices in Serial Intermediate Coronary Stenoses",
      journal: "European Heart Journal — Cardiovascular Imaging",
      year: "2018",
      authors: "Cairns AC, Sutherland DM, Evans RJ.",
      doi: "10.1093/ehjci/jey112",
      pubmedId: "29982431",
      link: "https://pubmed.ncbi.nlm.nih.gov",
      type: "Peer-Reviewed Journal",
      citationCount: 39
    },
    {
      id: "pub-4",
      title: "Secondary Prevention Pathways in Post-Revascularization Coronary Patients: Integrating Lipidology and Lifestyle Therapeutics",
      journal: "American Heart Journal",
      year: "2016",
      authors: "Cairns AC, Miller GB, Thornton PS.",
      doi: "10.1016/j.ahj.2016.02.008",
      pubmedId: "27129840",
      link: "https://pubmed.ncbi.nlm.nih.gov",
      type: "Peer-Reviewed Journal",
      citationCount: 31
    },
    {
      id: "pub-5",
      title: "Consensus Guidelines for the Triage and Invasive Management of High-Risk Acute Coronary Syndromes in Regional Networks",
      journal: "British Journal of Cardiology / Clinical Consensus Monograph",
      year: "2013",
      authors: "Expert Committee on Acute Ischemia (incl. Cairns AC).",
      type: "Clinical Guideline",
      link: "https://pubmed.ncbi.nlm.nih.gov"
    }
  ],

  memberships: [
    {
      id: "mem-1",
      role: "Fellow (FACC)",
      organization: "American College of Cardiology",
      sinceYear: "2012",
      tier: "Fellow"
    },
    {
      id: "mem-2",
      role: "Fellow (FRCP)",
      organization: "Royal College of Physicians, London",
      sinceYear: "2011",
      tier: "Fellow"
    },
    {
      id: "mem-3",
      role: "Professional Member",
      organization: "European Society of Cardiology (ESC)",
      sinceYear: "2005",
      tier: "Active Member"
    },
    {
      id: "mem-4",
      role: "Active Member",
      organization: "Society for Cardiovascular Angiography and Interventions (SCAI)",
      sinceYear: "2008",
      tier: "Active Member"
    },
    {
      id: "mem-5",
      role: "Registered Medical Practitioner",
      organization: "Massachusetts Medical Society",
      sinceYear: "2015",
      tier: "Active Member"
    }
  ],

  contact: {
    phone: "+1 (617) 555-0192",
    clinicalOfficePhone: "+1 (617) 555-0195",
    email: "dr.cairns@stmarys-cardiology.org",
    hospitalName: "St. Mary's Medical Center & Heart Institute",
    department: "Department of Cardiovascular Medicine, Suite 400",
    address: "450 Medical Arts Pavilion, Longwood Medical Area",
    suite: "Suite 400, East Wing",
    city: "Boston",
    state: "MA",
    postalCode: "02115",
    country: "United States",
    appointmentInstructions: [
      "Consultations are conducted by prior appointment. Physician referrals and self-referrals for second opinions are welcomed.",
      "Please arrive 15 minutes prior to your scheduled consultation time to complete registration.",
      "Bring all relevant medical documentation: recent ECGs, stress tests, angiogram discs, blood work reports, and a complete list of current medications with dosages.",
      "For urgent cardiac symptoms (such as acute severe chest pain, sudden breathlessness, or fainting), please call 911 or proceed immediately to the nearest hospital emergency department."
    ],
    schedule: [
      {
        day: "Monday",
        hours: "08:30 AM – 04:30 PM",
        type: "Outpatient Clinic",
        location: "Suite 400, East Wing"
      },
      {
        day: "Tuesday",
        hours: "08:00 AM – 05:00 PM",
        type: "Catheterization Lab / Procedures",
        location: "Cardiac Cath Suite 2"
      },
      {
        day: "Wednesday",
        hours: "09:00 AM – 01:00 PM",
        type: "Outpatient Clinic",
        location: "Suite 400, East Wing"
      },
      {
        day: "Thursday",
        hours: "08:00 AM – 05:00 PM",
        type: "Catheterization Lab / Procedures",
        location: "Cardiac Cath Suite 2"
      },
      {
        day: "Friday",
        hours: "08:30 AM – 12:30 PM",
        type: "Academic & Ward Rounds",
        location: "Inpatient Heart Institute"
      }
    ],
    externalMapsUrl: "https://maps.google.com/?q=450+Medical+Arts+Pavilion+Boston+MA+02115",
    socialProfiles: {
      linkedin: "https://linkedin.com/in/dr-arthur-c-cairns-cardiology",
      researchGate: "https://researchgate.net/profile/Arthur-Cairns",
      orcid: "https://orcid.org/0000-0002-9841-3091",
      googleScholar: "https://scholar.google.com/citations?user=drcairns"
    }
  },

  disclaimer: "This professional website is provided for general educational and informational purposes only. Information contained herein should not be construed as specific medical advice or used as a substitute for direct clinical consultation with a qualified physician. In the event of a medical emergency, immediately contact your local emergency medical services."
};

export const placeholderTemplateData: DoctorProfile = {
  fullName: "[Dr. Full Name]",
  professionalTitle: "[Example: Consultant Cardiologist / Senior Physician]",
  specialization: "[Specialization, e.g., Cardiology / Oncology / Neurology]",
  subSpecialization: "[Sub-specialization, e.g., Interventional Cardiology]",
  qualifications: "[Example: MBBS, MD (Medicine), DM (Cardiology), FRCP]",
  yearsOfExperience: "[XX+ Years]",
  currentPosition: "[Example: Senior Consultant & Head of Department]",
  currentHospital: "[Hospital / Medical Institution Name]",
  previousInstitutions: [
    "[Previous Hospital / Medical Institute 1]",
    "[Previous Medical University / Fellowship Center 2]"
  ],
  location: "[City, State, Country]",
  languages: ["[Language 1]", "[Language 2]"],
  registration: {
    council: "[Medical Council / Licensing Board]",
    registrationNumber: "[Registration / License Number]",
    jurisdiction: "[State / National Authority]",
    status: "[Active / Licensed]"
  },
  photoUrl: "/images/doctor-portrait.jpg",

  tagline: "[Doctor's Professional Tagline / Mission Statement]",
  shortIntroduction: "[2–4 sentence professional introduction summarizing doctor's experience, clinical focus, and background.]",
  detailedAbout: [
    "[First paragraph of detailed professional biography covering education, foundational training, and clinical focus.]",
    "[Second paragraph covering procedural expertise, hospital leadership, and specific areas of clinical practice.]",
    "[Third paragraph covering consultative approach, patient communication, and commitment to clinical quality.]"
  ],
  medicalPhilosophy: "[Doctor's clinical approach, medical philosophy, and commitment to evidence-based practice.]",

  patientCarePhilosophy: {
    summary: "[Summary of patient care philosophy without marketing hype or exaggerated claims.]",
    quote: "[A personal quote from the doctor reflecting their clinical ethos and dedication to patient care.]",
    pillars: [
      {
        title: "[Clinical Pillar 1, e.g., Evidence-Based Medicine]",
        description: "[Description of how standard clinical guidelines and scientific evidence guide decisions.]",
        iconName: "ShieldCheck"
      },
      {
        title: "[Clinical Pillar 2, e.g., Patient-Centered Communication]",
        description: "[Description of transparent communication, patient autonomy, and shared decision-making.]",
        iconName: "Users"
      },
      {
        title: "[Clinical Pillar 3, e.g., Multidisciplinary Collaboration]",
        description: "[Description of team-based care with allied specialists and primary care providers.]",
        iconName: "Network"
      },
      {
        title: "[Clinical Pillar 4, e.g., Continuous Quality & Safety]",
        description: "[Description of commitment to safety protocols and longitudinal patient follow-up.]",
        iconName: "HeartHandshake"
      }
    ],
    clinicalApproachNotes: [
      "[Patient care note 1 regarding consultation structure]",
      "[Patient care note 2 regarding diagnostic clarity]",
      "[Patient care note 3 regarding safety standards]",
      "[Patient care note 4 regarding follow-up coordination]"
    ]
  },

  areasOfExpertise: [
    {
      id: "exp-placeholder-1",
      title: "[Area of Clinical Expertise 1]",
      iconName: "Activity",
      shortDesc: "[Short description of clinical focus, indications, and diagnostic techniques.]",
      clinicalFocus: [
        "[Key Clinical Focus Area A]",
        "[Key Clinical Focus Area B]",
        "[Key Clinical Focus Area C]"
      ],
      diagnosticApproaches: [
        "[Diagnostic Modality 1]",
        "[Diagnostic Modality 2]"
      ]
    },
    {
      id: "exp-placeholder-2",
      title: "[Area of Clinical Expertise 2]",
      iconName: "HeartPulse",
      shortDesc: "[Short description of specialized treatment, diagnostic evaluation, and management.]",
      clinicalFocus: [
        "[Key Clinical Focus Area A]",
        "[Key Clinical Focus Area B]",
        "[Key Clinical Focus Area C]"
      ],
      diagnosticApproaches: [
        "[Diagnostic Modality 1]",
        "[Diagnostic Modality 2]"
      ]
    },
    {
      id: "exp-placeholder-3",
      title: "[Area of Clinical Expertise 3]",
      iconName: "Stethoscope",
      shortDesc: "[Short description of clinical condition management and longitudinal therapy.]",
      clinicalFocus: [
        "[Key Clinical Focus Area A]",
        "[Key Clinical Focus Area B]",
        "[Key Clinical Focus Area C]"
      ],
      diagnosticApproaches: [
        "[Diagnostic Modality 1]",
        "[Diagnostic Modality 2]"
      ]
    },
    {
      id: "exp-placeholder-4",
      title: "[Area of Clinical Expertise 4]",
      iconName: "ShieldAlert",
      shortDesc: "[Short description of acute or preventive diagnostic pathways.]",
      clinicalFocus: [
        "[Key Clinical Focus Area A]",
        "[Key Clinical Focus Area B]",
        "[Key Clinical Focus Area C]"
      ],
      diagnosticApproaches: [
        "[Diagnostic Modality 1]",
        "[Diagnostic Modality 2]"
      ]
    }
  ],

  services: [
    {
      id: "srv-placeholder-1",
      title: "[Clinical Service 1: Comprehensive Consultation]",
      category: "[Service Category]",
      description: "[Detailed clinical description of service, consultation protocol, and evaluation criteria.]",
      clinicalIndications: [
        "[Clinical Indication 1]",
        "[Clinical Indication 2]",
        "[Clinical Indication 3]"
      ],
      consultationDetails: "[Instructions for patients preparing for this consultation]",
      patientPreparation: "[Preparation guidelines if applicable]"
    },
    {
      id: "srv-placeholder-2",
      title: "[Clinical Service 2: Specialized Diagnostic Procedure]",
      category: "[Procedure Category]",
      description: "[Detailed clinical description of diagnostic or therapeutic procedure.]",
      clinicalIndications: [
        "[Clinical Indication 1]",
        "[Clinical Indication 2]"
      ],
      consultationDetails: "[Procedural details and post-care notes]",
      patientPreparation: "[Fasting or medication instructions]"
    },
    {
      id: "srv-placeholder-3",
      title: "[Clinical Service 3: Secondary Prevention & Follow-up]",
      category: "[Care Category]",
      description: "[Structured follow-up program and preventive management.]",
      clinicalIndications: [
        "[Clinical Indication 1]",
        "[Clinical Indication 2]"
      ],
      consultationDetails: "[Follow-up cadence and clinical monitoring details]"
    }
  ],

  education: [
    {
      id: "edu-pl-1",
      degree: "[Degree / Fellowship Name 1]",
      field: "[Specialty / Field]",
      institution: "[Institution / University Name]",
      location: "[City, Country]",
      year: "[Year – Year]",
      honors: "[Honors / Distinctions if applicable]",
      description: "[Description of sub-specialty clinical curriculum and fellowship scope.]"
    },
    {
      id: "edu-pl-2",
      degree: "[Degree 2: Post-Graduate Medical Degree (MD / MS / DM)]",
      field: "[Field of Medicine]",
      institution: "[University / Medical Institute]",
      location: "[City, Country]",
      year: "[Year – Year]",
      description: "[Description of clinical residency and training.]"
    },
    {
      id: "edu-pl-3",
      degree: "[Degree 3: Basic Medical Degree (MBBS / MB ChB / MD)]",
      field: "[Medicine & Surgery]",
      institution: "[Medical School / University]",
      location: "[City, Country]",
      year: "[Year – Year]",
      description: "[Undergraduate medical qualifications and fundamental clinical rotations.]"
    }
  ],

  experience: [
    {
      id: "exp-pl-1",
      position: "[Current Position, e.g., Senior Consultant]",
      organization: "[Hospital / Medical Center]",
      department: "[Clinical Department]",
      location: "[City, State, Country]",
      duration: "[Year – Present]",
      isCurrent: true,
      responsibilities: [
        "[Key Clinical Responsibility 1]",
        "[Key Clinical Responsibility 2]",
        "[Departmental or Quality Leadership 3]"
      ],
      highlights: "[Notable milestone or clinical initiative]"
    },
    {
      id: "exp-pl-2",
      position: "[Previous Position, e.g., Consultant / Associate Professor]",
      organization: "[Previous Institution Name]",
      department: "[Department Name]",
      location: "[City, Country]",
      duration: "[Year – Year]",
      isCurrent: false,
      responsibilities: [
        "[Clinical duties and procedural responsibilities]",
        "[Academic or clinical training responsibilities]"
      ]
    }
  ],

  certifications: [
    {
      id: "cert-pl-1",
      name: "[Board Certification in Specialty]",
      issuingBody: "[Certifying Board / National College]",
      year: "[Year]",
      credentialId: "[Credential ID]",
      status: "Board Certified"
    },
    {
      id: "cert-pl-2",
      name: "[Sub-Specialty Fellowship / Certification]",
      issuingBody: "[Professional Medical Society]",
      year: "[Year]",
      credentialId: "[Credential ID]",
      status: "Active"
    }
  ],

  achievements: [
    {
      id: "ach-pl-1",
      title: "[Achievement / Clinical Award Name]",
      organization: "[Issuing Medical Body / Hospital]",
      year: "[Year]",
      description: "[Description of verified accomplishment or clinical quality recognition.]"
    }
  ],

  publications: [
    {
      id: "pub-pl-1",
      title: "[Peer-Reviewed Journal Publication Title]",
      journal: "[Journal Name]",
      year: "[Year]",
      authors: "[Author Names]",
      doi: "[DOI Link or Identifier]",
      pubmedId: "[PubMed ID]",
      type: "Peer-Reviewed Journal"
    }
  ],

  memberships: [
    {
      id: "mem-pl-1",
      role: "[Fellow / Member]",
      organization: "[Professional Medical Association]",
      sinceYear: "[Year]",
      tier: "Fellow"
    },
    {
      id: "mem-pl-2",
      role: "[Member]",
      organization: "[National Specialist Society]",
      sinceYear: "[Year]",
      tier: "Active Member"
    }
  ],

  contact: {
    phone: "[Phone Number: Example: +1 (555) 012-3456]",
    clinicalOfficePhone: "[Office Phone]",
    email: "[Email Address: doctor@hospital.org]",
    hospitalName: "[Hospital / Medical Center Name]",
    department: "[Department / Suite Name]",
    address: "[Clinic / Hospital Physical Address]",
    suite: "[Suite / Room Number]",
    city: "[City]",
    state: "[State/Province]",
    postalCode: "[Postal Code]",
    country: "[Country]",
    appointmentInstructions: [
      "[Appointment instruction 1: Consultation by appointment]",
      "[Appointment instruction 2: Documents to bring]",
      "[Appointment instruction 3: Referral requirements]",
      "[Emergency advisory: For emergencies call emergency medical services]"
    ],
    schedule: [
      {
        day: "[Monday – Friday]",
        hours: "[09:00 AM – 05:00 PM]",
        type: "Outpatient Clinic",
        location: "[Consultation Suite]"
      }
    ],
    externalMapsUrl: "https://maps.google.com",
    socialProfiles: {
      linkedin: "https://linkedin.com",
      researchGate: "https://researchgate.net"
    }
  },

  disclaimer: "This website is intended for general informational purposes and does not replace professional medical consultation. In case of emergency, contact your local emergency department."
};
