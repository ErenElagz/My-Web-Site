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
  status: "Full Stack Developer @ South Tours",
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
    metric: "yofi.dev · RevenueCat",
    period: "2026",
    href: "https://yofi.dev",
    external: true,
    image: "/yofi.svg",
    previewImage:
      "https://cdn.dribbble.com/userupload/49131341/file/76ce95519be53234e05e467b52836cd8.png",
    previewLayout: "small-large",
    tags: ["react native", "next.js", "revenuecat", "ui design"],
  },
  {
    id: "agrosphere",
    name: "AgroSphere",
    tagline: "Autonomous Smart Farming & Robotics",
    headline: "AI-Powered Autonomous Farming Robotics & Precision Ecosystem",
    description:
      "TÜBİTAK 1812 supported smart agriculture venture combining aerial SkySense UAVs and ground Terra UGVs. Integrates edge deep learning for plant disease detection, autonomous solar-powered irrigation, and LoRaWAN long-range telemetry across 50Ha farmland.",
    metric: "TÜBİTAK 1812",
    period: "2024–2025",
    href: "https://agrospheree.vercel.app/",
    external: true,
    image: "/agrosphere.webp",
    previewImage:
      "https://cdn.dribbble.com/userupload/18356941/file/original-87e645c49eb4122cd70784e6edbda2c5.png?crop=13x10-789x592",
    previewLayout: "even",
    tags: ["next.js", "deep learning", "robotics", "lorawan", "tübitak 1812"],
  },
  {
    id: "corefound",
    name: "CoreFound",
    tagline: "Startup Community Platform",
    headline: "Architecting a real-time founder matching platform for CoreFound",
    description:
      "Real-time founder & builder matching ecosystem with GDPR-compliant Firestore schema, job-posting workflows, and Play Store release.",
    metric: "Play Store · GDPR",
    period: "2025",
    href: "/corefound",
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
    metric: "4.8★ · 25+ Countries",
    period: "2025",
    href: "https://play.google.com/store/apps/details?id=com.leckham&hl=en",
    external: true,
    image: "/leckham.png",
    previewImage:
      "https://cdn.dribbble.com/userupload/42714031/file/original-63b47bf031f02b5b6f435170cc75c840.png?crop=0x0-843x632",
    previewLayout: "even",
    tags: ["react native", "sqlite", "iot / qr", "google play"],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "South Tours",
    role: "Full Stack Developer & Team Lead",
    period: "Oct 2025 — Present",
    location: "Malaga, Spain",
    url: "https://mondivago.com",
    highlights: [
      "Engineered the primary OTA booking architecture (mondivago.com) with a 6-role RBAC system, scaling a PostgreSQL/Supabase codebase beyond 100,000 lines.",
      "Directed UI design architecture and reusable component systems for the Voytrail B2B platform.",
      "Managed Docker & Coolify infrastructure while mentoring an engineering intern through CI/CD cycles.",
    ],
    stack: ["Next.js", "PostgreSQL", "Supabase", "Docker", "Coolify"],
  },
  {
    company: "Localbird International",
    role: "Mobile App Developer & UI Consultant",
    period: "May 2025 — Jul 2025",
    location: "Las Palmas · Remote",
    highlights: [
      "Established a scalable design system and redesigned 30+ mobile screens informed by quantitative user feedback.",
      "Refactored legacy mobile application architecture to improve scalability and ship core feature expansions.",
    ],
    stack: ["React Native", "Design Systems", "Figma", "TypeScript"],
  },
  {
    company: "AgroSphere",
    role: "Co-Founder & CTO (AI & Software)",
    period: "2024 — 2025",
    location: "Ankara, Turkiye",
    url: "https://agrospheree.vercel.app/",
    highlights: [
      "Co-founded and architected the high-tech autonomous smart farming ecosystem (TÜBİTAK 1812 supported) combining aerial SkySense UAVs and ground Terra UGVs.",
      "Engineered edge computer vision and deep learning pipelines achieving 99.8% crop disease & yield detection accuracy with <15ms inference latency.",
      "Built the full-stack web and mobile telemetry command interface connecting LoRaWAN long-range RF telemetry across 50Ha farmland coverage.",
    ],
    stack: ["Next.js", "Computer Vision", "LoRaWAN", "Deep Learning", "Edge AI", "IoT"],
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
