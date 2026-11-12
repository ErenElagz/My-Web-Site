export interface DesignItem {
  id: number | string;
  title: string;
  description: string;
  category: "mobile" | "web" | "component" | "branding";
  figmaUrl?: string;
  dribbbleUrl?: string;
  behanceUrl?: string;
  image: string;
}

export const designs: DesignItem[] = [
  {
    id: "yofi-store",
    title: "Yofi: Mobile App Store Screenshots",
    description:
      "App Store and Google Play visual showcase highlighting privacy-first expense tracking, clean card layouts, and monthly insights.",
    category: "mobile",
    dribbbleUrl:
      "https://dribbble.com/shots/27760395-Yofi-Mobile-App-Store-Screenshots",
    image:
      "https://cdn.dribbble.com/userupload/49131341/file/76ce95519be53234e05e467b52836cd8.png",
  },
  {
    id: "yofi-landing",
    title: "Yofi.dev: Mobile App Landing Page",
    description:
      "Conversion-focused marketing landing page design with dark aesthetic, product feature highlights, and interactive mockups.",
    category: "web",
    dribbbleUrl:
      "https://dribbble.com/shots/27750603-Yofi-dev-Mobile-App-Landing-Page-Design",
    image:
      "https://cdn.dribbble.com/userupload/49094121/file/e0100f860e4e9fbb71db101550f6e04a.png",
  },
  {
    id: "travel-app",
    title: "Travel App UI: City & Nomad Exploration",
    description:
      "Dark-mode mobile interface designed for city exploration, destination guides, and interactive tourist routing.",
    category: "mobile",
    dribbbleUrl: "https://dribbble.com/shots/27403743-Travel-App-UI-Design",
    image:
      "https://cdn.dribbble.com/userupload/47826386/file/712ee66fd85ba34700e8e53b9228f3ac.png",
  },
  {
    id: "corefound-community",
    title: "CoreFound: CoFounder Community App",
    description:
      "Complete mobile onboarding, registration flow, and founder matching UI crafted for startup builders.",
    category: "mobile",
    dribbbleUrl:
      "https://dribbble.com/shots/27036140-CoreFound-CoFounder-Community-Mobile-App",
    image:
      "https://cdn.dribbble.com/userupload/46564852/file/4b9cc980085e894b9b0c5c7e34fe7c98.png",
  },
  {
    id: "corefound-job-board",
    title: "CoreFound: Job Board & Posting Screens",
    description:
      "Mobile job feed and role application flow with clean card metadata, tag filters, and recruiter actions.",
    category: "mobile",
    dribbbleUrl:
      "https://dribbble.com/shots/26994651-Job-Board-Screen-from-CoreFound",
    image:
      "https://cdn.dribbble.com/userupload/46424560/file/6bdf58a852c437b487a5fbff3d3d35e4.png",
  },
  {
    id: "auth-screens",
    title: "Mobile Auth Screens: Sign In & Sign Up Workflow",
    description:
      "Frictionless onboarding and authentication flows with social login, input validation, and password recovery states.",
    category: "mobile",
    dribbbleUrl:
      "https://dribbble.com/shots/26962035-Auth-Screens-WorkFlow-Sign-In-Sign-Up",
    image:
      "https://cdn.dribbble.com/userupload/46313544/file/7c67c384d7309c658e4a5c391463a95f.png",
  },
  {
    id: "qr-modal",
    title: "QR Code Modal: Web UI Component",
    description:
      "Minimalist web component design for desktop-to-mobile handoff with clean typography and subtle borders.",
    category: "component",
    dribbbleUrl:
      "https://dribbble.com/shots/26880948-QR-Code-Modal-Design-Web-UI-Component",
    image:
      "https://cdn.dribbble.com/userupload/46052114/file/4748f227db25f9e1e037cac8d4fa29ec.png",
  },
  {
    id: "dev-blog",
    title: "Developer Blog & News Platform",
    description:
      "Editorial portfolio and tech publication website concept featuring high-contrast typography and clean reading layouts.",
    category: "web",
    dribbbleUrl: "https://dribbble.com/shots/26775838-Developer-Blog-Website",
    image:
      "https://cdn.dribbble.com/userupload/45714195/file/f0b0c565703c403252740f640bf7de58.png",
  },
  {
    id: "manga-tracker",
    title: "Manga & Anime Tracking Mobile App",
    description:
      "Sleek mobile app design for chapter tracking, reading progress, and custom manga libraries.",
    category: "mobile",
    behanceUrl:
      "https://www.behance.net/gallery/224304239/Anime-Manga-Tracking-App",
    dribbbleUrl: "https://dribbble.com/shots/25937387-Anime-Manga-Tracker-App",
    image:
      "https://cdn.dribbble.com/userupload/43035774/file/original-a29146f044cbdbff7bde6dd9ae3bcfe1.png?crop=0x0-1685x1264",
  },
  {
    id: "bike-sharing",
    title: "HitBis: Bike Sharing & Renting Screens",
    description:
      "Mobile UX flow for IoT bike unlocks, station geolocation, and real-time ride tracking.",
    category: "mobile",
    behanceUrl:
      "https://www.behance.net/gallery/222557443/Bike-Sharing-and-Renting-App-Mobile-App-Design",
    dribbbleUrl:
      "https://dribbble.com/shots/25839647-Bike-Sharing-and-Renting-App-Screens",
    image:
      "https://cdn.dribbble.com/userupload/42714031/file/original-63b47bf031f02b5b6f435170cc75c840.png?crop=0x0-843x632",
  },
  {
    id: "tourism-assistant",
    title: "AI Tourism Voice & Visual Assistant",
    description:
      "Multi-modal AI assistant interface with camera-based attraction recognition and smart route planning.",
    category: "mobile",
    behanceUrl:
      "https://www.behance.net/gallery/218547521/Tourism-Asisstant-ChatBot-Voice-and-Visual-Assistant/",
    dribbbleUrl:
      "https://dribbble.com/shots/25583837-Tourism-Asisstant-ChatBot-Voice-and-Visual-Assistant/",
    image:
      "https://cdn.dribbble.com/userupload/21031321/file/original-3e3031e8bab4ec16b4ea13d8e23f93af.png?crop=0x0-843x632/",
  },
  {
    id: "agriculture-drone",
    title: "Agriculture Drone Tech Landing Page",
    description:
      "Modern minimalist landing page design for precision agriculture and drone fleet management.",
    category: "web",
    behanceUrl:
      "https://www.behance.net/gallery/217841173/Farming-Drone-echnologies-Website-Landing-Page-Design",
    dribbbleUrl:
      "https://dribbble.com/shots/25450152-Agriculture-Drone-Technology-Website-Landing-Page-Design",
    image:
      "https://cdn.dribbble.com/userupload/18356941/file/original-87e645c49eb4122cd70784e6edbda2c5.png?crop=13x10-789x592",
  },
];
