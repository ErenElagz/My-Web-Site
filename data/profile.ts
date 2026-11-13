export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  url?: string;
  highlights: string[];
  stack: string[];
}

export interface FeaturedProduct {
  id: string;
  name: string;
  tagline: string;
  headline: string;
  description: string;
  metric: string;
  period: string;
  href: string;
  external?: boolean;
  image?: string;
  previewImage?: string;
  previewLayout: "small-large" | "even" | "large-small";
  stats?: { value: string; label: string }[];
  tags: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export const profile = {
  name: "Eren Elagoz",
  handle: "ErenElagz",
  role: "Mobile & Full-Stack Engineer · UI/UX Designer",
  status: "Full-Stack Engineer @ South Tours",
  location: "Remote",
  email: "erenelagoz@gmail.com",
  website: "https://erenelagz.com",
  gumroadUrl: "https://erenelagz.gumroad.com",
  summary:
    "Software engineer combining cross-platform mobile development, full-stack architecture, and UI/UX design. Track record delivering production-grade apps—including a mobile product rated 4.8★ across 25+ countries—and 100k+ line full-stack platforms from Figma prototype to store release.",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/erenelagz",
      icon: "akar-icons:github-fill",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/erenelagz",
      icon: "akar-icons:linkedin-fill",
    },
    {
      label: "Dribbble",
      href: "https://dribbble.com/ErenElagz",
      icon: "akar-icons:dribbble-fill",
    },
    {
      label: "Dev.to",
      href: "https://dev.to/erenelagz",
      icon: "fa6-brands:dev",
    },
    {
      label: "Pinterest",
      href: "https://www.pinterest.com/erenelagz/",
      icon: "akar-icons:pinterest-fill",
    },
    {
      label: "Behance",
      href: "https://behance.net/ErenElagz",
      icon: "akar-icons:behance-fill",
    },
    {
      label: "X",
      href: "https://x.com/ErenElagz",
      icon: "akar-icons:x-fill",
    },
  ],
};

export const featuredProducts: FeaturedProduct[] = [
  {
    id: "yofi",
    name: "YoFi",
    tagline: "Net Worth Tracker & Dashboard",
    headline: "Your Money. One Dashboard.",
    description:
      "Stripe, RevenueCat, Gumroad, crypto & net worth unified in a privacy-first offline command center.",
    metric: "yofi.dev",
    period: "2026",
    href: "https://yofi.dev",
    external: true,
    image: "/yofi.svg",
    previewImage:
      "https://cdn.dribbble.com/userupload/49131341/file/76ce95519be53234e05e467b52836cd8.png",
    previewLayout: "small-large",
    tags: ["react native", "next.js", "ui design"],
  },
  {
    id: "agrosphere",
    name: "AgroSphere",
    tagline: "Autonomous Smart Farming & Robotics",
    headline: "AI-Powered Autonomous Farming Robotics & Precision Ecosystem",
    description:
      "TÜBİTAK 1812 BİGG Finalist smart agriculture venture combining aerial SkySense UAVs and ground Terra UGVs. Integrates edge deep learning for plant disease detection, autonomous solar-powered irrigation, and LoRaWAN long-range telemetry across 50Ha farmland.",
    metric: "TÜBİTAK 1812 Finalist",
    period: "2024–2025",
    href: "https://agrospheree.vercel.app/",
    external: true,
    image: "/agrosphere.webp",
    previewImage: "/agrosphere-preview.jpg",
    previewLayout: "even",
    tags: ["typescript", "deep learning", "robotics", "lorawan"],
  },
  {
    id: "sectorops",
    name: "SectorOps",
    tagline: "Industry-Specific Operating Systems",
    headline: "18K+ Professional & Personal Usage Around the World",
    description:
      "Engineered business architecture and industry operating systems with 18,000+ professional and personal users around the world across construction, real estate, logistics, legal, and healthcare. Centralized operational infrastructure with modular relational databases, automated workflows, and live KPI dashboards.",
    metric: "18K+ Worldwide",
    period: "2025–Present",
    href: "https://sectorops.com",
    external: true,
    image: "/sectorops.png",
    previewImage: "/sectorops-preview.png",
    previewLayout: "large-small",
    tags: ["next.js", "typescript", "tailwind css", "business os", "b2b saas"],
  },
  {
    id: "corefound",
    name: "CoreFound",
    tagline: "Startup Community Platform",
    headline: "Architecting a real-time founder matching platform for CoreFound",
    description:
      "Real-time founder & builder matching ecosystem with GDPR-compliant Firestore schema, job-posting workflows, and Play Store release.",
    metric: "Play Store",
    period: "2025",
    href: "https://play.google.com/store/apps/details?id=com.corefound",
    external: true,
    image: "/corefounders.png",
    previewImage:
      "https://cdn.dribbble.com/userupload/46564852/file/4b9cc980085e894b9b0c5c7e34fe7c98.png",
    previewLayout: "large-small",
    tags: ["react native", "firebase", "gdpr", "mobile ui"],
  },
  {
    id: "leckham",
    name: "Leckham",
    tagline: "Offline E-Book Reader",
    headline: "Scaling a 4.8★ offline e-book reader globally across 25+ countries",
    description:
      "Custom EPUB & PDF parsing architecture built with React Native and SQLite for fast local rendering across diverse device specifications.",
    metric: "Play Store",
    period: "2025",
    href: "https://play.google.com/store/apps/details?id=com.leckham&hl=en",
    external: true,
    image: "/leckham.png",
    previewImage: "/leckham/showcase.jpg",
    previewLayout: "small-large",
    tags: ["react native", "sqlite", "epub & pdf", "google play"],
  },
  {
    id: "belen",
    name: "Belen",
    tagline: "AI & AR Tourism Assistant",
    headline: "Autonomous AI & AR-powered Tourism Assistant for TEKNOFEST 2024 Finals",
    description:
      "TEKNOFEST 2024 Tourism Technologies finalist mobile platform combining Gemini AI voice assistant, real-time Augmented Reality historical landmark recognition, and personalized GPS route planning across Turkiye.",
    metric: "TEKNOFEST Finalist",
    period: "2024",
    href: "/projects",
    image: "/belen.png",
    previewImage: "/belen-preview.jpg",
    previewLayout: "even",
    tags: ["react native", "gemini ai", "augmented reality", "google maps"],
  },
  {
    id: "hitbis",
    name: "HitBis",
    tagline: "AI-Powered Bike Sharing & IoT System",
    headline: "Smart urban micro-mobility with QR station unlocks & Gemini-driven route planning",
    description:
      "Integrated IoT and mobile bike-sharing platform combining hardware QR station unlocking, Gemini API AI route assistant, real-time map clustering, and community social features.",
    metric: "Bachelors Thesis",
    period: "2024–2025",
    href: "https://github.com/ErenElagz/HitBis",
    external: true,
    image: "/hitbis.png",
    previewImage: "/hitbis-preview.png",
    previewLayout: "large-small",
    tags: ["react native", "gemini ai", "iot / qr", "maps & gps"],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "South Tours",
    role: "Full-Stack Engineer",
    period: "Oct 2025 — Present",
    location: "Malaga, Spain",
    highlights: [
      "Architected the multi-sided Online Travel Agency (OTA) ecosystem connecting guests, affiliates, and suppliers with dedicated portals and a 6-role RBAC system, scaling a PostgreSQL/Supabase codebase beyond 100,000 lines.",
      "Directed UI design architecture and reusable component systems for the Voytrail B2B platform.",
      "Managed Docker & Coolify infrastructure while mentoring an engineering intern through CI/CD cycles.",
    ],
    stack: ["PostgreSQL", "Docker", "Coolify"],
  },
  {
    company: "Localbird International",
    role: "Mobile UI/UX Designer & Consultant",
    period: "May 2025 — Jul 2025",
    location: "Las Palmas, Spain · Remote",
    highlights: [
      "Created the mobile concept design and Figma design system for their island travel & tour booking platform (UNWTO Startup Competition recognized).",
      "Designed 30+ interactive mobile screens across tour discovery, personalized itineraries, and streamlined booking flows.",
    ],
    stack: ["Figma", "UI/UX Design", "Design Systems", "Prototyping"],
  },
  {
    company: "AgroSphere",
    role: "Co-Founder & CTO (AI & Software)",
    period: "2024 — 2025",
    location: "Ankara, Turkiye",
    highlights: [
      "Co-founded and architected the high-tech autonomous smart farming ecosystem (TÜBİTAK 1812 BİGG Finalist) combining aerial SkySense UAVs and ground Terra UGVs.",
      "Engineered edge computer vision and deep learning pipelines achieving 99.8% crop disease & yield detection accuracy with <15ms inference latency.",
      "Built the full-stack web and mobile telemetry command interface connecting LoRaWAN long-range RF telemetry across 50Ha farmland coverage.",
    ],
    stack: ["Next.js", "Computer Vision", "LoRaWAN", "Deep Learning", "Edge AI", "IoT"],
  },
  {
    company: "Belen App",
    role: "Co-Founder & Lead Mobile Engineer",
    period: "Jan 2024 — Sep 2024",
    location: "Antalya, Turkiye",
    highlights: [
      "Co-founded and engineered the TEKNOFEST 2024 Tourism Technologies finalist mobile app, combining Gemini AI voice assistant with AR landmark exploration and GPS route planning.",
      "Built the cross-platform mobile client in React Native with Google Maps navigation, offline caching, and Laravel REST API backend integration.",
    ],
    stack: ["React Native", "Gemini API", "Augmented Reality", "Google Maps", "Laravel"],
  },
  {
    company: "Hitit University",
    role: "Software Engineer Intern",
    period: "Jul 2024 — Aug 2024",
    location: "Corum, Turkiye",
    highlights: [
      "Built a cross-platform desktop Intern Management System (Electron.js & React) now in active production use by faculty.",
      "Developed an AI-powered Navigation Optimization tool integrating fine-tuned Gemini APIs for spatial routing.",
    ],
    stack: ["Electron.js", "React", "Gemini API"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Mobile & Desktop",
    items: [
      "React Native",
      "Expo",
      "Augmented Reality (AR)",
      "Google Maps API",
      "Electron.js",
      "SQLite",
      "RevenueCat",
      "Play Console",
      "Android Studio",
    ],
  },
  {
    label: "Frontend & UI",
    items: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Figma",
    ],
  },
  {
    label: "Backend & Infra",
    items: [
      "Node.js",
      "Express",
      "Python",
      "Laravel",
      "Strapi",
      "RESTful APIs",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Google Cloud Platform",
      "Supabase",
      "Firebase",
      "Docker",
      "Coolify",
      "CI/CD",
      "Nginx",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Hitit University",
    degree: "B.Eng. in Computer Engineering",
    period: "2021 — 2026",
    location: "Corum, Turkiye",
  },
  {
    institution: "University of Zielona Gora",
    degree: "Erasmus+ Exchange Student",
    period: "2025",
    location: "Zielona Gora, Poland",
  },
];
