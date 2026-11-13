export interface DesignItem {
  id: number | string;
  title: string;
  description: string;
  category: "mobile" | "web" | "component" | "branding";
  figmaUrl?: string;
  dribbbleUrl?: string;
  behanceUrl?: string;
  pinterestUrl?: string;
  image: string;
}

export const designs: DesignItem[] = [
  {
    id: "yofi-store",
    title: "Yofi: Mobile App Store Screenshots",
    description:
      "App Store and Google Play visual showcase highlighting privacy-first expense tracking, clean card layouts, and monthly financial insights.",
    category: "mobile",
    dribbbleUrl:
      "https://dribbble.com/shots/27760395-Yofi-Mobile-App-Store-Screenshots",
    pinterestUrl: "https://www.pinterest.com/pin/987062443353011551/",
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
    pinterestUrl: "https://www.pinterest.com/erenelagz/web-design/",
    image:
      "https://cdn.dribbble.com/userupload/49094121/file/e0100f860e4e9fbb71db101550f6e04a.png",
  },
  {
    id: "travel-app",
    title: "Travel App UI: City & Nomad Exploration",
    description:
      "Dark-mode mobile interface designed for city exploration, destination guides, interactive tourist routing, and nomad discovery.",
    category: "mobile",
    dribbbleUrl: "https://dribbble.com/shots/27403743-Travel-App-UI-Design",
    pinterestUrl: "https://www.pinterest.com/erenelagz/mobile-app-design/",
    image:
      "https://cdn.dribbble.com/userupload/47826386/file/712ee66fd85ba34700e8e53b9228f3ac.png",
  },
  {
    id: "corefound-community",
    title: "CoreFound: CoFounder Community App",
    description:
      "Complete mobile onboarding, registration flow, and founder matching UI crafted for startup builders and entrepreneurs.",
    category: "mobile",
    dribbbleUrl:
      "https://dribbble.com/shots/27036140-CoreFound-CoFounder-Community-Mobile-App",
    pinterestUrl: "https://www.pinterest.com/erenelagz/mobile-app-design/",
    image:
      "https://cdn.dribbble.com/userupload/46564852/file/4b9cc980085e894b9b0c5c7e34fe7c98.png",
  },
  {
    id: "corefound-job-board",
    title: "CoreFound: Job Board & Posting Screens",
    description:
      "Mobile job feed and role application flow with clean card metadata, tag filters, and recruiter quick-actions.",
    category: "mobile",
    dribbbleUrl:
      "https://dribbble.com/shots/26994651-Job-Board-Screen-from-CoreFound",
    pinterestUrl: "https://www.pinterest.com/erenelagz/mobile-app-design/",
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
    pinterestUrl: "https://www.pinterest.com/erenelagz/mobile-app-design/",
    image:
      "https://cdn.dribbble.com/userupload/46313544/file/7c67c384d7309c658e4a5c391463a95f.png",
  },
  {
    id: "corefound-job-app",
    title: "CoreFound: Job Board Mobile App Experience",
    description:
      "Creation flow for job openings, tag-based candidate filtering, and mobile application pipeline management.",
    category: "mobile",
    dribbbleUrl:
      "https://dribbble.com/shots/26932726-CoreFound-Job-Board-Mobile-App",
    pinterestUrl: "https://www.pinterest.com/erenelagz/mobile-app-design/",
    image:
      "https://cdn.dribbble.com/userupload/46217364/file/f8d7e1d7c239110b1be5e9b0bd25c35c.png",
  },
  {
    id: "qr-modal",
    title: "QR Code Modal: Web UI Component",
    description:
      "Minimalist web component design for desktop-to-mobile handoff with clean typography, dark background, and subtle borders.",
    category: "component",
    dribbbleUrl:
      "https://dribbble.com/shots/26880948-QR-Code-Modal-Design-Web-UI-Component",
    pinterestUrl: "https://www.pinterest.com/erenelagz/component-design/",
    image:
      "https://cdn.dribbble.com/userupload/46052114/file/4748f227db25f9e1e037cac8d4fa29ec.png",
  },
  {
    id: "dev-blog",
    title: "Developer Blog & Tech News Platform",
    description:
      "Editorial portfolio and tech publication website concept featuring high-contrast typography, reading times, and clean article layouts.",
    category: "web",
    dribbbleUrl: "https://dribbble.com/shots/26775838-Developer-Blog-Website",
    pinterestUrl: "https://www.pinterest.com/erenelagz/web-design/",
    image:
      "https://cdn.dribbble.com/userupload/45714195/file/f0b0c565703c403252740f640bf7de58.png",
  },
  {
    id: "job-search-login",
    title: "Job Search Portal: Mobile Login Screen",
    description:
      "Modern mobile authentication screen with custom branding, structured credential inputs, and seamless OAuth buttons.",
    category: "mobile",
    dribbbleUrl:
      "https://dribbble.com/shots/26722305-Job-Search-Login-Screen",
    pinterestUrl: "https://www.pinterest.com/erenelagz/mobile-app-design/",
    image:
      "https://cdn.dribbble.com/userupload/45544144/file/2b2f7552634b5aec07fce7acfa03cfa1.png",
  },
  {
    id: "ecoeats-sharing",
    title: "EcoEats: Food Sharing App Concept",
    description:
      "Sustainable community surplus food sharing interface featuring interactive map navigation, item categories, and donor chats.",
    category: "mobile",
    dribbbleUrl:
      "https://dribbble.com/shots/26388203-EcoEats-Free-Sharing-App-Concept",
    pinterestUrl: "https://www.pinterest.com/erenelagz/mobile-app-design/",
    image:
      "https://cdn.dribbble.com/userupload/44460974/file/98e647bcf9eac170819421764421f90c.png",
  },
  {
    id: "manga-tracker",
    title: "Manga & Anime Tracking Mobile App",
    description:
      "Sleek mobile app design for chapter tracking, reading progress, notification alerts, and custom manga libraries.",
    category: "mobile",
    behanceUrl:
      "https://www.behance.net/gallery/224304239/Anime-Manga-Tracking-App",
    dribbbleUrl: "https://dribbble.com/shots/25937387-Anime-Manga-Tracker-App",
    pinterestUrl: "https://www.pinterest.com/erenelagz/mobile-app-design/",
    image:
      "https://cdn.dribbble.com/userupload/43035774/file/original-a29146f044cbdbff7bde6dd9ae3bcfe1.png",
  },
  {
    id: "bike-sharing",
    title: "HitBis: Bike Sharing & Renting Screens",
    description:
      "Mobile UX flow for IoT bike unlocks, station geolocation, battery status, and real-time ride tracking.",
    category: "mobile",
    behanceUrl:
      "https://www.behance.net/gallery/222557443/Bike-Sharing-and-Renting-App-Mobile-App-Design",
    dribbbleUrl:
      "https://dribbble.com/shots/25839647-Bike-Sharing-and-Renting-App-Screens",
    pinterestUrl: "https://www.pinterest.com/erenelagz/mobile-app-design/",
    image:
      "https://cdn.dribbble.com/userupload/42714031/file/original-63b47bf031f02b5b6f435170cc75c840.png",
  },
  {
    id: "web-television-component",
    title: "Web Television & Video Streaming Component",
    description:
      "Interactive card and video section design featuring live broadcast schedules, responsive player controls, and sleek dark aesthetic.",
    category: "component",
    dribbbleUrl:
      "https://dribbble.com/shots/25782611-Web-Television-Component-Section",
    pinterestUrl: "https://www.pinterest.com/erenelagz/component-design/",
    image:
      "https://cdn.dribbble.com/userupload/42549234/file/original-b321715e0d1ea0aabe7b071657aa1263.png",
  },
  {
    id: "podcast-section",
    title: "Tech Podcast & Media Player Section",
    description:
      "Minimalist audio player component for tech publications with episode playlists, audio waveform scrubbers, and creator tags.",
    category: "component",
    dribbbleUrl:
      "https://dribbble.com/shots/25687031-Podcast-Section-for-the-Minimalist-New-Technology-Web-Sites",
    pinterestUrl: "https://www.pinterest.com/erenelagz/component-design/",
    image:
      "https://cdn.dribbble.com/userupload/36957739/file/original-951ed553a982be2a75d49b226cb63140.png",
  },
  {
    id: "agriculture-farming-logo",
    title: "Minimalist Agriculture Farming Branding & Logo",
    description:
      "Clean geometric brand identity, vector glyphs, and iconography designed for autonomous agritech and precision farming startups.",
    category: "branding",
    dribbbleUrl:
      "https://dribbble.com/shots/25642113-Minimalist-Agroculture-Farming-Branding-Logo",
    pinterestUrl: "https://www.pinterest.com/erenelagz/graphic-design/",
    image:
      "https://cdn.dribbble.com/userupload/30129906/file/original-539d47cdd2287d0067c60cebd63de618.png",
  },
  {
    id: "developer-ebook",
    title: "Developer E-Book: Design & Resource Showcase",
    description:
      "Reading view and curated resource landing layout crafted for developer tools, libraries, and design asset documentation.",
    category: "web",
    dribbbleUrl:
      "https://dribbble.com/shots/25631748-Developer-E-Book-Design-and-Development",
    pinterestUrl: "https://www.pinterest.com/erenelagz/web-design/",
    image:
      "https://cdn.dribbble.com/userupload/27624030/file/original-7e557f2e7956b7ef43f14ef07d1fe5c3.png",
  },
  {
    id: "greensphere-branding",
    title: "GreenSphere: Sustainable Brand & Logo Identity",
    description:
      "Modern circular emblem with vibrant green gradient accents, created for sustainable tech, carbon auditing, and renewable ventures.",
    category: "branding",
    dribbbleUrl:
      "https://dribbble.com/shots/25624147-GreenSphere-Concept-Logo-Branding-Design",
    pinterestUrl: "https://www.pinterest.com/erenelagz/graphic-design/",
    image:
      "https://cdn.dribbble.com/userupload/26284780/file/original-47e97d0d85c5373029e158a6f67f846b.png",
  },
  {
    id: "category-buttons-component",
    title: "Categories & Interactive Button System",
    description:
      "Clean web UI component showcasing active pill filters, hover depth, category icons, and high-contrast dark states.",
    category: "component",
    dribbbleUrl:
      "https://dribbble.com/shots/25602149-Categories-Components-Buttons-Web-Design",
    pinterestUrl: "https://www.pinterest.com/erenelagz/component-design/",
    image:
      "https://cdn.dribbble.com/userupload/23647254/file/original-616a15baef64fc945b8ecd70d4ff8d5a.png",
  },
  {
    id: "social-media-section",
    title: "Social Following & Community Widget",
    description:
      "Clean card component highlighting follower counts, multi-network social links, and call-to-action subscribe triggers.",
    category: "component",
    dribbbleUrl:
      "https://dribbble.com/shots/25594885-Social-Media-Following-Section-for-Web-Design",
    pinterestUrl: "https://www.pinterest.com/erenelagz/component-design/",
    image:
      "https://cdn.dribbble.com/userupload/22088104/file/original-b83d257afdbf8738bb1c36857353aa05.png",
  },
  {
    id: "tourism-assistant",
    title: "AI Tourism Voice & Visual Assistant",
    description:
      "Multi-modal AI assistant interface with camera-based attraction recognition, speech bubble inputs, and smart route planning.",
    category: "mobile",
    behanceUrl:
      "https://www.behance.net/gallery/218547521/Tourism-Asisstant-ChatBot-Voice-and-Visual-Assistant/",
    dribbbleUrl:
      "https://dribbble.com/shots/25583837-Tourism-Asisstant-ChatBot-Voice-and-Visual-Assistant",
    pinterestUrl: "https://www.pinterest.com/erenelagz/mobile-app-design/",
    image:
      "https://cdn.dribbble.com/userupload/21031321/file/original-3e3031e8bab4ec16b4ea13d8e23f93af.png",
  },
  {
    id: "farming-tech-modern-landing",
    title: "Modern Agriculture & Farming Tech Landing Page",
    description:
      "Clean hero banner and feature breakdown for autonomous agricultural drones, crop analytics, and farm yield automation.",
    category: "web",
    dribbbleUrl:
      "https://dribbble.com/shots/25573662-Modern-and-Minimalist-Agriculture-and-Farming-Tech-Landing-Page",
    pinterestUrl: "https://www.pinterest.com/erenelagz/web-design/",
    image:
      "https://cdn.dribbble.com/userupload/20656047/file/original-301f149d89fd229801d77694a4f83c97.png",
  },
  {
    id: "agriculture-farming-landing",
    title: "Precision AgriTech Ecosystem Web Portal",
    description:
      "Enterprise landing page structure highlighting IoT sensor networks, field health index, and farm operations management.",
    category: "web",
    dribbbleUrl:
      "https://dribbble.com/shots/25564410-Agriculture-and-Farming-Technology-Landing-Page",
    pinterestUrl: "https://www.pinterest.com/erenelagz/web-design/",
    image:
      "https://cdn.dribbble.com/userupload/20195878/file/original-b2a23464261717ea181a8e7681309714.png",
  },
  {
    id: "dark-auth-screens",
    title: "Dark Login & Auth Screens Mobile UI Concept",
    description:
      "Atmospheric dark theme onboarding and login flow featuring glassmorphism elements, security inputs, and password recovery.",
    category: "mobile",
    dribbbleUrl:
      "https://dribbble.com/shots/25549746-Dark-Login-and-Auth-Screens-Mobile-App-UI-Concept-Design",
    pinterestUrl: "https://www.pinterest.com/erenelagz/mobile-app-design/",
    image:
      "https://cdn.dribbble.com/userupload/19592359/file/original-b4b7289b0ee8c19e1e84ec867f35bc17.png",
  },
  {
    id: "donate-support-card",
    title: "Donate & Support Card Component for Websites",
    description:
      "Clean donation UI card with currency presets, payment method selection, and custom contribution amount options.",
    category: "component",
    dribbbleUrl:
      "https://dribbble.com/shots/25539092-Donate-and-Support-Card-Design-for-Websites",
    pinterestUrl: "https://www.pinterest.com/erenelagz/component-design/",
    image:
      "https://cdn.dribbble.com/userupload/19399889/file/original-50a367f203233bd237982498009269eb.png",
  },
  {
    id: "ecoeats-donation-flow",
    title: "EcoEats: Food Sharing & Donation Mobile Concept",
    description:
      "User-friendly donation flow allowing volunteers and restaurants to schedule surplus food pickups with real-time drop-off alerts.",
    category: "mobile",
    dribbbleUrl:
      "https://dribbble.com/shots/25539054-EcoEats-Food-Sharing-and-Donation-Mobile-App-Concept-Design",
    pinterestUrl: "https://www.pinterest.com/erenelagz/mobile-app-design/",
    image:
      "https://cdn.dribbble.com/userupload/19399783/file/original-aa53fdb87ed86dd50f5aac23529c3a6e.png",
  },
  {
    id: "city-info-reviews",
    title: "City Information & Reviewing Mobile App UI",
    description:
      "Location-aware city exploration app featuring interactive reviews, place bookmarking, photo galleries, and visitor ratings.",
    category: "mobile",
    dribbbleUrl:
      "https://dribbble.com/shots/25537268-City-Information-anf-Reviewing-Mobile-App-UI-Screen-Design",
    pinterestUrl: "https://www.pinterest.com/erenelagz/mobile-app-design/",
    image:
      "https://cdn.dribbble.com/userupload/19362526/file/original-6b36daa41c8f895211ff3d364d43b247.png",
  },
  {
    id: "app-preferences-screens",
    title: "App Preferences & Personalization Onboarding",
    description:
      "Multi-step preference screens for tourism and entertainment apps with category pills, toggle chips, and dynamic recommendation feed.",
    category: "mobile",
    dribbbleUrl:
      "https://dribbble.com/shots/25521277-App-Preferences-Screens-for-Tourism-and-Entertainment-Apps",
    pinterestUrl: "https://www.pinterest.com/erenelagz/mobile-app-design/",
    image:
      "https://cdn.dribbble.com/userupload/18941436/file/original-cec20d5dd1d941f86edaf17693819afa.png",
  },
  {
    id: "minimalist-auth-screen",
    title: "Minimalist Auth Screen with Accent Highlights",
    description:
      "High-contrast clean mobile authentication flow with sunny yellow CTA accents, minimal input borders, and streamlined sign-in.",
    category: "mobile",
    dribbbleUrl:
      "https://dribbble.com/shots/25515894-Auth-Screen-Design-for-the-Minimalist-Mobile-Apps",
    pinterestUrl: "https://www.pinterest.com/erenelagz/mobile-app-design/",
    image:
      "https://cdn.dribbble.com/userupload/18836897/file/original-20eb7b1cae94c7bb5b2faf0e65b049e3.png",
  },
  {
    id: "agriculture-drone",
    title: "Agriculture Drone Technology Landing Page",
    description:
      "Modern minimalist landing page design for precision agriculture, drone fleet management, and real-time aerial sensor metrics.",
    category: "web",
    behanceUrl:
      "https://www.behance.net/gallery/217841173/Farming-Drone-echnologies-Website-Landing-Page-Design",
    dribbbleUrl:
      "https://dribbble.com/shots/25450152-Agriculture-Drone-Technology-Website-Landing-Page-Design",
    pinterestUrl: "https://www.pinterest.com/erenelagz/web-design/",
    image:
      "https://cdn.dribbble.com/userupload/18356941/file/original-87e645c49eb4122cd70784e6edbda2c5.png",
  },
];
