export interface Doctor {
  id: string;
  name: string;
  degree: string;
  specialization: string;
  experience: string;
  image: string;
  driveLink: string;
  bio: string;
  achievements: string[];
  schedule: string;
}

export interface DentalService {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  iconClass: string; // FontAwesome icon class
  image: string;
  badge: string;
  keyBenefits: string[];
  procedureSteps: string[];
  estimatedTime: string;
  painLevel: string;
  priceRange: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ClinicInterior {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const CLINIC_DATA = {
  name: "Crown & Roots Dental Clinic",
  tagline: "Bringing life to your smile.",
  primaryPromise: "We Promise To Make You Smile With Confidence",
  animatedPhrases: [
    "Best Dental Care",
    "Expert Dentists",
    "Pain-free Treatments",
    "Advanced Dental Technology"
  ],
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsapp: "919999999999",
  whatsappUrl: "https://wa.me/919999999999?text=Hello%20Crown%20%26%20Roots%20Dental%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment%20and%20consultation.",
  email: "care@crownandroots.com",
  timings: "9:30 AM to 7:30 PM (Mon - Sat) | Sunday: By Appointment",
  googleSheetWebAppUrl: "https://script.google.com/macros/s/AKfycbwpV9M_JMT9vWc52Kgzk6gJL5QwXzeKvIci0qJOAHn0SLRm-ZMlmBFZBvazQkNIrJdLjA/exec",
  instagramEmbedPlaceholder: "INSTAGRAM_EMBED_CODE_HERE",
  googleMapsEmbedPlaceholder: "GOOGLE_MAPS_IFRAME_HERE",
  
  branches: [
    {
      name: "South Extension II Branch",
      address: "L 1/3, Block-L, South Extension II, New Delhi, Delhi 110049",
      landmark: "Near South Extension Metro Station",
      phone: "+91 98765 43210",
      mapQuery: "Crown and Roots Dental Clinic South Extension II New Delhi"
    },
    {
      name: "Gurgaon Branch",
      address: "Shop No 303/1, Lajpat Nagar, New Railway Rd, Gurugram, Haryana 122001",
      landmark: "Opposite Civil Hospital Rd",
      phone: "+91 98765 43210",
      mapQuery: "Crown and Roots Dental Clinic Gurgaon"
    }
  ],

  highlights: [
    {
      title: "Treatment by Specialist",
      desc: "Dental care provided by MDS Doctors with master's post-graduation in respective fields.",
      icon: "fa-solid fa-user-doctor"
    },
    {
      title: "CGHS & Panel Empanelled",
      desc: "Authorized and empanelled dental clinic offering cashless and reimbursement assistance.",
      icon: "fa-solid fa-shield-heart"
    },
    {
      title: "Affordable Modern Tech",
      desc: "Rotary endodontics, 3D intraoral digital scanners, Class-B autoclaves for zero pain.",
      icon: "fa-solid fa-microscope"
    }
  ],

  stats: [
    { value: "20+", label: "Years Combined Experience", icon: "fa-solid fa-award" },
    { value: "100%", label: "Sterilization & Safety Protocols", icon: "fa-solid fa-hand-sparkles" },
    { value: "2,500+", label: "Happy Smiles Transformed", icon: "fa-solid fa-face-smile" },
    { value: "4.9★", label: "Google & Practo Ratings (500+ Reviews)", icon: "fa-solid fa-star" }
  ],

  doctors: [
    {
      id: "dr-rahul",
      name: "Dr. Rahul Sharma",
      degree: "MDS - Orthodontics & Dentofacial Orthopedics",
      specialization: "Invisalign Specialist & Braces Expert",
      experience: "10+ Years Exp",
      driveLink: "https://drive.google.com/open?id=DRIVE_IMAGE_LINK_DR_RAHUL_SHARMA",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
      bio: "Dr. Rahul Sharma completed his MDS in Orthodontics and specializes in modern aligners (Invisalign Diamond certified), self-ligating braces, and complex malocclusion corrections for children, teens, and working adults.",
      achievements: [
        "Certified Invisalign & Clear Aligner Provider",
        "Over 1,200+ successful orthodontic smiles corrected",
        "Member of Indian Orthodontic Society (IOS)"
      ],
      schedule: "Mon - Sat: 10:00 AM - 4:00 PM"
    },
    {
      id: "dr-priya",
      name: "Dr. Priya Patel",
      degree: "BDS, Fellowship in Aesthetic & Cosmetic Dentistry",
      specialization: "Cosmetic Dentist & Smile Makeover Artist",
      experience: "8 Years Exp",
      driveLink: "https://drive.google.com/open?id=DRIVE_IMAGE_LINK_DR_PRIYA_PATEL",
      image: "https://images.unsplash.com/photo-1594824813629-6e3e5601ff39?q=80&w=800&auto=format&fit=crop",
      bio: "Dr. Priya Patel is recognized for her artistic eye and gentle approach. She specializes in ultra-thin porcelain veneers, laser teeth whitening, composite bonding, and holistic smile designing tailored to each facial harmony.",
      achievements: [
        "Advanced Diploma in Digital Smile Design (DSD)",
        "Trained at International Academy of Aesthetic Dentistry",
        "Specialist in minimally invasive biomimetic dentistry"
      ],
      schedule: "Mon - Sat: 11:00 AM - 6:30 PM"
    },
    {
      id: "dr-aman",
      name: "Dr. Aman Verma",
      degree: "MDS - Oral & Maxillofacial Surgery, Fellow ICOI",
      specialization: "Implantologist & Oral Surgeon",
      experience: "12 Years Exp",
      driveLink: "https://drive.google.com/open?id=DRIVE_IMAGE_LINK_DR_AMAN_VERMA",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
      bio: "Dr. Aman Verma is an accomplished Oral & Maxillofacial Surgeon known for painless single-sitting root canals, immediate basal dental implants, computer-guided implantology, and atraumatic wisdom tooth extractions.",
      achievements: [
        "Fellow of International Congress of Oral Implantologists (ICOI)",
        "3,000+ successful dental implants placed",
        "Pioneer in computer-guided painless surgery in Delhi NCR"
      ],
      schedule: "Tue, Thu, Sat: 10:00 AM - 7:30 PM"
    }
  ] as Doctor[],

  services: [
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      subtitle: "Single-Sitting Painless Rotary RCT",
      shortDesc: "Save your infected natural tooth with computerized rotary instruments and zero pain in just 45 minutes.",
      fullDesc: "We provide specialized painless Root Canal Treatment (RCT) using state-of-the-art apex locators, rotary endodontic motors, and 3D digital radiography. Instead of painful multi-visit extractions, our specialists gently remove infected pulp, disinfect the canals with ultrasonic irrigation, and seal them hermetically with biocompatible gutta-percha, followed by high-strength ceramic/zirconia crowns.",
      iconClass: "fa-solid fa-tooth",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
      badge: "Most Popular",
      keyBenefits: [
        "100% Painless procedure with computer-controlled anesthesia",
        "Single-visit completion for 90% of cases",
        "Preserves your natural jawbone and bite strength",
        "Backed by custom-matched CAD/CAM Zirconia crowns"
      ],
      procedureSteps: [
        "High-definition digital diagnosis & 3D periapical imaging",
        "Gentle localized numbing & isolation with rubber dam",
        "Micro-rotary cleaning and ultrasonic canal disinfection",
        "Thermafil bioceramic seal & core build-up",
        "Digital scan for precision crown fabrication"
      ],
      estimatedTime: "45 - 60 Minutes",
      painLevel: "Completely Pain-free (Local Numbing)",
      priceRange: "Starting ₹3,500"
    },
    {
      id: "dental-implants",
      title: "Dental Implants",
      subtitle: "Permanent Tooth Replacement with Titanium & Zirconia",
      shortDesc: "Lifetime lasting, natural-looking replacement for missing teeth using world-renowned Swiss & German implants.",
      fullDesc: "We provide specialized computer-guided Dental Implant surgery engineered to restore chewing efficiency and facial youth. Using Nobel Biocare, Straumann, and Alpha-Bio medical titanium fixtures, our oral surgeons securely anchor artificial roots directly into the jawbone, preventing bone loss and eliminating messy dentures forever.",
      iconClass: "fa-solid fa-screwdriver-wrench",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
      badge: "Lifetime Warranty",
      keyBenefits: [
        "Looks, feels, and chews exactly like natural teeth",
        "Prevents sunken facial structure & jawbone resorption",
        "No damage to adjacent healthy teeth (unlike bridges)",
        "Over 98.6% clinical success rate"
      ],
      procedureSteps: [
        "3D CBCT Bone density scan & digital surgical guide planning",
        "Atraumatic sterile titanium implant placement",
        "Osseointegration healing & digital impression",
        "Screw-retained custom zirconia crown placement"
      ],
      estimatedTime: "2 Visits / Same-day options",
      painLevel: "Mild (Zero during procedure)",
      priceRange: "Starting ₹19,999"
    },
    {
      id: "invisalign-braces",
      title: "Invisalign & Braces",
      subtitle: "Clear Invisible Aligners & Self-Ligating Ceramic Braces",
      shortDesc: "Discreetly straighten crooked teeth, close gaps, and align bites without visible wires or metal brackets.",
      fullDesc: "We provide specialized digital orthodontic transformations with US-FDA approved Invisalign clear aligners and modern self-ligating ceramic braces. Using 3D iTero scanners, we simulate your entire smile transformation before treatment even begins, allowing you to preview your dream smile digitally.",
      iconClass: "fa-solid fa-wand-magic-sparkles",
      image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=800&auto=format&fit=crop",
      badge: "iTero 3D Digital",
      keyBenefits: [
        "Nearly invisible — virtually undetectable in social & work meetings",
        "Removable for effortless eating, brushing, and flossing",
        "No food restrictions or poking wires",
        "Faster results with customized SmartTrack material"
      ],
      procedureSteps: [
        "5-minute non-invasive 3D iTero intraoral scan",
        "ClinCheck 3D computerized video treatment plan",
        "Delivery of custom aligner sets changed every 10-14 days",
        "Routine check-ins & complimentary night retainers"
      ],
      estimatedTime: "6 - 14 Months average",
      painLevel: "Zero pain, gentle snug sensation",
      priceRange: "Starting ₹45,000"
    },
    {
      id: "teeth-whitening",
      title: "Teeth Whitening",
      subtitle: "Philips Zoom! In-Office LED Laser Whitening",
      shortDesc: "Brighten your smile up to 8 shades lighter in a single 45-minute safe session with zero enamel harm.",
      fullDesc: "We provide specialized Philips Zoom! WhiteSpeed laser whitening treatments to lift stubborn coffee, tea, smoking, and age-related discolouration. Our clinic uses neutral pH hydrogen peroxide activated by cold LED light with built-in desensitizing ACP (Amorphous Calcium Phosphate) technology to protect your enamel and eliminate tooth sensitivity.",
      iconClass: "fa-solid fa-sun",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
      badge: "Instant Glow",
      keyBenefits: [
        "Up to 8 shades whiter in just 45 minutes",
        "Safe for tooth enamel & existing restorations",
        "Includes enamel protection minerals to prevent sensitivity",
        "Long-lasting shine with take-home maintenance kit"
      ],
      procedureSteps: [
        "Initial shade assessment & gentle polishing",
        "Gum barrier application to shield delicate soft tissues",
        "Application of Zoom! whitening gel with 3x15 min LED cycles",
        "Post-treatment fluoride gloss & shade comparison"
      ],
      estimatedTime: "45 Minutes",
      painLevel: "Zero pain",
      priceRange: "Starting ₹5,999"
    },
    {
      id: "smile-makeover",
      title: "Cosmetic Smile Makeover",
      subtitle: "E-Max Porcelain Veneers & Digital Smile Design",
      shortDesc: "Transform chipped, worn, or uneven teeth into a magazine-ready, symmetrical, radiant smile.",
      fullDesc: "We provide specialized full aesthetic smile design incorporating ultra-thin hand-layered porcelain veneers, gum contouring, and composite bonding. Each smile is individually designed considering your lip line, facial angles, and skin undertones to ensure a youthful, natural appearance.",
      iconClass: "fa-solid fa-gem",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop",
      badge: "Celebrity Favorite",
      keyBenefits: [
        "Permanent stain resistance with glass-ceramic E-Max",
        "Minimally invasive micro-preparation preserving healthy enamel",
        "Custom handcrafted translucency matching natural teeth",
        "Instant confidence boost in 2 appointments"
      ],
      procedureSteps: [
        "Facial aesthetic photography & digital smile preview",
        "Trial smile mockup on your actual teeth before final step",
        "Precision micro-shaping & digital optical scans",
        "Permanent bonding of customized veneers"
      ],
      estimatedTime: "2 to 3 Visits",
      painLevel: "Minimal / Pain-free",
      priceRange: "Customized upon scan"
    },
    {
      id: "tooth-filling",
      title: "Tooth Colored Fillings",
      subtitle: "Biomimetic Composite & Ceramic Inlays",
      shortDesc: "Replace old dark mercury amalgam fillings with seamless, durable tooth-matched nano-composite restorations.",
      fullDesc: "We provide specialized aesthetic biomimetic composite restorations that chemically bond with your remaining tooth structure. Our layered nano-hybrid composites match the exact hue, translucency, and fluorescence of your enamel, preventing micro-leakage and secondary decay.",
      iconClass: "fa-solid fa-shield-virus",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
      badge: "Mercury-Free",
      keyBenefits: [
        "100% Mercury-free & biocompatible resin polymers",
        "Invisible boundary blends seamlessly with natural enamel",
        "Immediate chewing capability upon curing",
        "Strengthens weakened tooth walls"
      ],
      procedureSteps: [
        "Decay detection with optical magnification",
        "Micro-cleaning & surface conditioning",
        "Layered nano-composite sculpting & blue light cure",
        "High-gloss contouring & bite calibration"
      ],
      estimatedTime: "30 Minutes",
      painLevel: "Zero pain",
      priceRange: "Starting ₹1,200"
    }
  ] as DentalService[],

  interiorGallery: [
    {
      id: "int-1",
      title: "Modern Sterilization Suite",
      category: "Sterilization & Safety",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
      description: "Class-B vacuum autoclave, UV storage chambers, and 7-step sterilization protocols ensuring 100% infection control."
    },
    {
      id: "int-2",
      title: "Advanced Operatory & Dental Chair",
      category: "Patient Comfort",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
      description: "Ergonomic leather dental operatory units with integrated intraoral cameras and overhead entertainment monitors."
    },
    {
      id: "int-3",
      title: "Digital OPG & 3D Imaging Center",
      category: "Diagnostics",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
      description: "Low-radiation panoramic X-ray and 3D digital imaging for instantaneous, pinpoint treatment accuracy."
    },
    {
      id: "int-4",
      title: "Comfortable Executive Waiting Lounge",
      category: "Ambiance",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      description: "Calm, spa-like waiting area with relaxing acoustic ambiance, beverage bar, and zero typical clinic odor."
    }
  ] as ClinicInterior[],

  faqs: [
    {
      id: "faq-1",
      question: "Is Root Canal Treatment (RCT) really painless at Crown & Roots?",
      answer: "Yes, absolutely! At Crown & Roots Dental Clinic, we utilize computer-controlled localized anesthesia, digital apex locators, and rotary nickel-titanium instruments. This means the entire nerve space is cleared gently without vibration or pulling sensations. Most patients report feeling nothing more than a gentle pressure and frequently fall asleep during their procedure!",
      category: "Procedures"
    },
    {
      id: "faq-2",
      question: "How long do Dental Implants last, and what is the success rate?",
      answer: "Dental implants placed by our certified implantologists have a clinical success rate exceeding 98.6%. Because the titanium or zirconia fixture integrates permanently with your natural jawbone (osseointegration), with standard daily brushing, flossing, and semi-annual cleanings, your dental implants are designed to last for a lifetime.",
      category: "Implants"
    },
    {
      id: "faq-3",
      question: "What is the difference between Invisalign aligners and traditional metal braces?",
      answer: "Invisalign aligners are custom-molded, completely transparent trays that snap snugly over your teeth. Unlike metal braces, they have no sharp wires, require fewer clinic visits, and are 100% removable so you can eat all your favorite foods and maintain effortless dental hygiene. Ceramic and self-ligating braces are also available for specific severe bite conditions.",
      category: "Orthodontics"
    },
    {
      id: "faq-4",
      question: "Do you accept CGHS, insurance, and cashless medical policies?",
      answer: "Yes! Crown & Roots Dental Clinic is empanelled for CGHS beneficiaries and partners with leading health insurance TPAs. Our reception and billing desk handles all required itemized documentation, treatment pre-authorizations, and claim reimbursement forms so you receive maximum coverage smoothly.",
      category: "Insurance & Payment"
    },
    {
      id: "faq-5",
      question: "How do I book an appointment and what should I bring on my first visit?",
      answer: "You can book easily right on this page via the 'Book Appointment' button, call our reception directly at +91 98765 43210, or send a WhatsApp message to 919999999999. Please bring any recent dental X-rays, medical history notes, or insurance/CGHS cards if applicable. We will perform an initial 3D digital exam and discuss your custom smile roadmap.",
      category: "Appointments"
    }
  ] as FAQItem[],

  testimonials: [
    {
      name: "Mrs. Anju Sharma",
      treatment: "Painless Root Canal & Zirconia Crown",
      text: "At Crown & Roots, I got very satisfying treatment for my teeth. Before visiting here, I was very much scared of Dentists, but the way Dr. Rahul & Dr. Aman treated my pain, I won't mind visiting again. The root canal and the cap fitted were very well fitted and no pains in my tooth.",
      rating: 5,
      city: "Delhi"
    },
    {
      name: "Mr. Mahip Parashar",
      treatment: "Kid Dental Care & Braces",
      text: "I bought my eight year old son to the clinic for his treatment. My son was too scared to visit a dentist but upon entering the clinic it gave a kid friendly vibe. The doctors are highly professional and patient-friendly. Highly recommended to everyone!",
      rating: 5,
      city: "Gurugram"
    },
    {
      name: "Ms. Sukanya Pathak",
      treatment: "Invisalign Clear Aligners & Whitening",
      text: "An amazing place for optimal dental care... beautiful atmosphere with a patient-friendly environment. The entire Crown & Roots team is very pleasant and professional. Best decision for my wedding smile makeover!",
      rating: 5,
      city: "South Extension"
    }
  ]
};
