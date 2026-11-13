export interface ProjectItem {
  id: string;
  category: "repo" | "iot" | "ai";
  title: string;
  description: string;
  githubUrl?: string;
  stars: number;
  forks: number;
  icon: string;
  language?: string;
  updated?: string;
}

export const projects: ProjectItem[] = [
  // Open Source & Software
  {
    id: "windows-update-fix",
    category: "repo",
    title: "Windows-Update-Fix",
    description:
      "Automated utility script diagnosing and repairing common Windows Update failures (DISM/SFC checks, service resets, cache cleanup).",
    githubUrl: "https://github.com/ErenElagz/Windows-Update-Fix",
    stars: 9,
    forks: 4,
    language: "Batchfile",
    updated: "2026-10",
    icon: "lucide:terminal",
  },
  {
    id: "gemini-chatbot",
    category: "repo",
    title: "ChatBot-in-React-Native-Gemini",
    description:
      "Conversational mobile UI integrating the Google Gemini API with clean message streaming and prompt handling.",
    githubUrl:
      "https://github.com/ErenElagz/Beginner-Chat-Bot-in-React-Native-Gemini",
    stars: 9,
    forks: 3,
    language: "JavaScript",
    updated: "2026-06",
    icon: "tabler:message-chatbot-filled",
  },
  {
    id: "football-manager",
    category: "repo",
    title: "Football-Manager-Game",
    description:
      "Text-based tactical football manager built in Python with OOP, 38-week league seasons, team tactics, and simulation engine.",
    githubUrl: "https://github.com/ErenElagz/Football-Manager-Game",
    stars: 8,
    forks: 0,
    language: "Python",
    updated: "2025-11",
    icon: "fa6-solid:football",
  },
  {
    id: "all-in-dev-repo",
    category: "repo",
    title: "all-in-dev",
    description:
      "Curated repository and free e-book cataloging 3,200+ developer and designer tools, libraries, and learning resources.",
    githubUrl: "https://github.com/ErenElagz/all-in-dev",
    stars: 7,
    forks: 1,
    language: "Markdown",
    updated: "2026-11",
    icon: "lucide:book-open",
  },
  {
    id: "farm-simulator",
    category: "repo",
    title: "Farm-Simulator-Game",
    description:
      "Web-based farm management game with dynamic weekly marketplace pricing, crop yields, and financial investment loops.",
    githubUrl: "https://github.com/ErenElagz/Farm-Simulator-Game",
    stars: 5,
    forks: 6,
    language: "JavaScript",
    updated: "2026-10",
    icon: "fa6-solid:tractor",
  },
  {
    id: "atlas-tourism",
    category: "repo",
    title: "Atlas-Tourism-Assistant",
    description:
      "Interactive mobile tourism guide built in React Native with city destination discovery, landmark details, and fluid navigation.",
    githubUrl: "https://github.com/ErenElagz/Atlas-Tourism-Assistant",
    stars: 1,
    forks: 0,
    language: "JavaScript",
    updated: "2024-09",
    icon: "solar:compass-bold",
  },
  {
    id: "agrosphere-web",
    category: "repo",
    title: "AgroSphere-Website",
    description:
      "Web platform and interactive product showcase for the AgroSphere autonomous UAV/UGV precision agriculture ecosystem.",
    githubUrl: "https://github.com/ErenElagz/AgroSphere-Website",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    updated: "2026-01",
    icon: "lucide:sprout",
  },
  {
    id: "sectorops",
    category: "repo",
    title: "SectorOps",
    description:
      "Industry operating systems with 18,000+ professional and personal users worldwide across construction, real estate, logistics, legal, and healthcare.",
    githubUrl: "https://sectorops.com",
    stars: 18,
    forks: 4,
    language: "TypeScript / Next.js",
    updated: "2026-11",
    icon: "lucide:layers",
  },
  {
    id: "intern-management",
    category: "repo",
    title: "Internship-Management-Software",
    description:
      "Cross-platform desktop application built for universities to manage, track, and analyze student internship programs with dashboards.",
    githubUrl:
      "https://github.com/ErenElagz/Internship-Managment-Software-for-Universities",
    stars: 1,
    forks: 0,
    language: "JavaScript",
    updated: "2025-11",
    icon: "lucide:layout-dashboard",
  },
  {
    id: "hospital-system",
    category: "repo",
    title: "Hospital-Appointment-System",
    description:
      "Appointment scheduling and clinic management system with role-based access control, user authentication, and admin dashboards.",
    githubUrl: "https://github.com/ErenElagz/Hospital-Appointment-System",
    stars: 3,
    forks: 2,
    language: "PHP / MySQL",
    updated: "2025-11",
    icon: "solar:hospital-bold",
  },
  {
    id: "electron-template",
    category: "repo",
    title: "electron-react-tailwind-template",
    description:
      "Scaffold template combining Electron, React, and Tailwind CSS for rapid cross-platform desktop application development.",
    githubUrl:
      "https://github.com/barbarbar338/electron-react-tailwind-template",
    stars: 2,
    forks: 0,
    language: "TypeScript",
    updated: "2025-11",
    icon: "fa6-solid:desktop",
  },
  {
    id: "company-os",
    category: "repo",
    title: "company-os",
    description:
      "Comprehensive operating system framework designed to streamline startup pipelines, product roadmaps, and agile team sprints.",
    githubUrl: "https://github.com/ErenElagz/company-os",
    stars: 1,
    forks: 0,
    language: "Markdown",
    updated: "2024-08",
    icon: "lucide:briefcase",
  },
  {
    id: "warehouse-mgmt",
    category: "repo",
    title: "Warehouse-Management-Automation",
    description:
      "Text-based inventory management system tracking stock variations, product categories, and warehouse operations.",
    githubUrl:
      "https://github.com/ErenElagz/Warehouse-Management-Automation-Python",
    stars: 0,
    forks: 0,
    language: "Python",
    updated: "2024-06",
    icon: "lucide:boxes",
  },
  {
    id: "rn-10-features",
    category: "repo",
    title: "10-Features-in-React-Native",
    description:
      "Modular sample repository demonstrating 10 core mobile features: auth, navigation, state, reanimated, notifications, camera, and maps.",
    githubUrl:
      "https://github.com/ErenElagz/10-Features-in-React-Native-Mobile-App",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    updated: "2025-11",
    icon: "tabler:device-mobile",
  },

  // IoT & Embedded
  {
    id: "hitbis-iot",
    category: "iot",
    title: "HitBis: Bicycle Renting & AI Assistant",
    description:
      "IoT bike-sharing platform built with React Native 0.76 and Gemini API, featuring station QR camera unlocking, GPS route clustering, and biker community networking.",
    githubUrl: "https://github.com/ErenElagz/HitBis",
    stars: 1,
    forks: 0,
    icon: "tabler:bike",
  },
  {
    id: "blynk-arm",
    category: "iot",
    title: "Blynk-Robotic-Arm",
    description:
      "3-axis robotic arm project powered by ESP32, stepper motors, electromagnet, and Blynk IoT cloud control.",
    githubUrl: "https://github.com/ErenElagz/Blynk-Robotic-Arm",
    stars: 0,
    forks: 0,
    icon: "mdi:robot",
  },
  {
    id: "esp32-arm",
    category: "iot",
    title: "Esp32-Robotic-Arm-Controller",
    description:
      "Bluetooth-controlled 3-servo robotic arm controller built on ESP32 microcontroller hardware.",
    githubUrl: "https://github.com/ErenElagz/Esp32-Robotic-Arm-Controller",
    stars: 0,
    forks: 0,
    icon: "mdi:arm-barrier-up",
  },
  {
    id: "drone-comms",
    category: "iot",
    title: "Drone-Communication-Systems",
    description:
      "Technical architecture research and presentation covering UAV telemetry, RF frequency channels, and ground telemetry links.",
    githubUrl: "https://github.com/ErenElagz/Drone-Communication-Systems",
    stars: 1,
    forks: 0,
    icon: "solar:radar-2-bold",
  },

  // Machine Learning & AI
  {
    id: "belen-ai-tourism",
    category: "ai",
    title: "Belen: AI & AR Tourism Assistant",
    description:
      "TEKNOFEST 2024 Tourism Technologies finalist platform combining Gemini AI voice assistant, AR historical landmark recognition, and custom route exploration.",
    stars: 8,
    forks: 3,
    icon: "solar:compass-bold",
    language: "React Native / Laravel",
    updated: "2024-09",
  },
  {
    id: "ai-route-planner",
    category: "ai",
    title: "AI-Based-Route-Planner-Optimizer",
    description:
      "Intelligent travel route optimization system calculating multi-factor efficient paths using machine learning and spatial heuristics.",
    githubUrl:
      "https://github.com/ErenElagz/AI-Based-Route-Planner-Optimizer",
    stars: 3,
    forks: 2,
    language: "TypeScript",
    updated: "2024-10",
    icon: "solar:routing-2-bold",
  },
  {
    id: "vg-sales-lr",
    category: "ai",
    title: "Video-Games-Sales-Prediction-Linear-Regression",
    description:
      "1986–2022 video games sales forecasting workflow using feature engineering and Linear Regression.",
    githubUrl:
      "https://github.com/ErenElagz/Video-Games-Sales-Future-Prediction-Using-Linear-Regression",
    stars: 1,
    forks: 0,
    icon: "mingcute:game-2-fill",
  },
  {
    id: "lstm-price",
    category: "ai",
    title: "Price-Prediction-Using-LSTM-Neural-Networks",
    description:
      "Time-series crypto and stock price forecasting utilizing Long Short-Term Memory (LSTM) recurrent neural networks.",
    githubUrl:
      "https://github.com/ErenElagz/Price-Prediction-Using-LSTM-Algorithm-in-Neural-Networks",
    stars: 1,
    forks: 0,
    icon: "mingcute:brain-fill",
  },
  {
    id: "ai-network-analysis",
    category: "ai",
    title: "AI-Systems-in-the-Network-Analysis",
    description:
      "Exploration of artificial neural networks for network traffic management, dynamic flow optimization, and congestion mitigation.",
    githubUrl:
      "https://github.com/ErenElagz/AI-Systems-in-the-Network-Analysis",
    stars: 0,
    forks: 0,
    icon: "lucide:network",
  },
  {
    id: "amazon-poly",
    category: "ai",
    title: "Amazon Stock Price Prediction",
    description:
      "Polynomial Regression ML pipeline trained on historical equity price data.",
    githubUrl:
      "https://github.com/ErenElagz/AMAZON-PRICE-PREDICTION-MACHINE_LEARNING",
    stars: 0,
    forks: 0,
    icon: "ri:amazon-fill",
  },
  {
    id: "btc-lr",
    category: "ai",
    title: "Bitcoin-Price-Prediction",
    description:
      "Bitcoin price prediction pipeline using Python data preprocessing and linear regression models.",
    githubUrl: "https://github.com/ErenElagz/Bitcoin-Price-Prediction",
    stars: 0,
    forks: 0,
    icon: "ri:btc-fill",
  },
];
