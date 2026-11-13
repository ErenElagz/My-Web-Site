export interface BlogItem {
  id: number;
  title: string;
  date: string;
  category: "mobile" | "indie" | "web";
  featured?: boolean;
  readTime?: string;
  tags?: string[];
  mediumUrl?: string;
  devtoUrl?: string;
  image?: string;
  description: string;
}

export const blogs: BlogItem[] = [
  {
    id: 4637793,
    title:
      "I Built a Financial Dashboard for Indie Devs and Digital Creators and It is Free",
    date: "2026-09-12",
    category: "indie",
    featured: true,
    readTime: "3 min read",
    tags: ["Indie Dev", "SaaS", "Finance"],
    devtoUrl:
      "https://dev.to/erenelagz/how-i-unified-stripe-revenuecat-and-gumroad-revenue-into-one-dashboard-3clk",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Feaq9mswom2vzby0izr7i.jpg",
    description:
      "How I unified scattered revenue streams from Stripe, RevenueCat, and Gumroad into a single privacy-first dashboard for indie makers.",
  },
  {
    id: 2820462,
    title: "Best Feeling as an Entrepreneur: It is First Sale.",
    date: "2025-09-04",
    category: "indie",
    readTime: "2 min read",
    tags: ["Startup", "Indie Hacking", "Gumroad"],
    mediumUrl:
      "https://erenelagz.medium.com/best-feeling-as-a-entrepreneur-it-is-first-sale-eed618f1590e",
    devtoUrl:
      "https://dev.to/erenelagz/best-feeling-as-a-entrepreneur-it-is-first-sale-4me3",
    image: "https://cdn-images-1.medium.com/max/1024/0*BalJc0Ye9HBNvq0V",
    description:
      "Reflecting on shipping CompanyOs, making my first sale on Gumroad, and the validation loop that turns side projects into real products.",
  },
  {
    id: 2795626,
    title:
      "My 8 Year Android Development Story as a Student, And Finally I Made It!",
    date: "2025-08-24",
    category: "mobile",
    readTime: "3 min read",
    tags: ["Android", "Career", "Mobile"],
    mediumUrl:
      "https://erenelagz.medium.com/my-8-year-android-development-story-as-a-student-and-finally-i-made-it-2ce6e7a16a29",
    devtoUrl:
      "https://dev.to/erenelagz/my-8-year-android-development-story-as-a-student-and-finally-i-made-it-3g9c",
    image: "https://cdn-images-1.medium.com/max/1024/0*yskDicgX8DZcUNvY",
    description:
      "From high school curiosity to releasing production apps on Google Play: lessons learned across 8 years of building Android apps.",
  },
  {
    id: 2426876,
    title: "Short Talk: The Future of React Native Architecture",
    date: "2025-04-23",
    category: "mobile",
    readTime: "4 min read",
    tags: ["React Native", "Architecture", "Mobile"],
    mediumUrl:
      "https://erenelagz.medium.com/short-talk-for-react-native-2c28bcb695b4",
    devtoUrl:
      "https://dev.to/erenelagz/short-talk-for-future-of-react-native-171",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ft79b6o18fa9rxwqwh0sf.png",
    description:
      "A candid take on Fabric renderer, TurboModules, Bridgeless mode, and what the evolving ecosystem means for cross-platform apps.",
  },
  {
    id: 2365105,
    title:
      "React Native Reanimated 3: The Ultimate Guide to High-Performance Animations in 2025.",
    date: "2025-03-29",
    category: "mobile",
    readTime: "3 min read",
    tags: ["React Native", "Animations", "Reanimated"],
    mediumUrl:
      "https://erenelagz.medium.com/react-native-reanimated-3-the-ultimate-guide-to-high-performance-animations-in-2025-d2d2579e5bf5",
    devtoUrl:
      "https://dev.to/erenelagz/react-native-reanimated-3-the-ultimate-guide-to-high-performance-animations-in-2025-4ae4",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ft79b6o18fa9rxwqwh0sf.png",
    description:
      "Deep dive into shared element transitions, worklets, gesture handlers, and 60 FPS mobile animations using Reanimated 3.",
  },
  {
    id: 2340156,
    title:
      "The Rise of Remote Work: How Technology is Shaping the Future of Work in 202.",
    date: "2025-03-18",
    category: "web",
    readTime: "4 min read",
    tags: ["Remote Work", "Productivity", "Tech Trends"],
    mediumUrl:
      "https://erenelagz.medium.com/the-rise-of-remote-work-how-technology-is-shaping-the-future-of-work-in-2025-d43c4fbfbe7b",
    devtoUrl:
      "https://dev.to/erenelagz/the-rise-of-remote-work-how-technology-is-shaping-the-future-of-work-in-2025-484e",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnew7qc24df0bbly3iprp.jpg",
    description:
      "Analyzing asynchronous communication, remote engineering tooling, and sustainable habits for distributed software teams.",
  },
  {
    id: 2298906,
    title:
      "The Future of Web Development in 2025: Trends, Tools, and Technologies.",
    date: "2025-02-26",
    category: "web",
    readTime: "3 min read",
    tags: ["Web Dev", "React", "Frontend"],
    mediumUrl:
      "https://erenelagz.medium.com/the-future-of-web-development-in-2025-trends-tools-and-technologies-to-watch-97aad33216de",
    devtoUrl:
      "https://dev.to/erenelagz/the-future-of-web-development-in-2025-trends-tools-and-technologies-to-watch-4fgo",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4i4ss6b30psz7x1cedgb.jpg",
    description:
      "An overview of compiler advancements, edge rendering, modern CSS architectures, and evolving frontend toolchains.",
  },
  {
    id: 2283890,
    title:
      "Must-Know React Native Libraries for Faster Mobile App Development in 2025.",
    date: "2025-02-17",
    category: "mobile",
    readTime: "4 min read",
    tags: ["React Native", "Libraries", "Tooling"],
    mediumUrl:
      "https://erenelagz.medium.com/must-know-react-native-libraries-for-faster-mobile-app-development-in-2025-5b21a2e28a25",
    devtoUrl:
      "https://dev.to/erenelagz/must-know-react-native-libraries-for-faster-mobile-app-development-in-2025-1h70",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqnhhfj5jyacikafuz2e2.jpeg",
    description:
      "Essential libraries for routing, state, networking, caching, and monetization that boost mobile shipping velocity.",
  },
  {
    id: 2278443,
    title: "3200 Developer and Designer Tools Free E-Book",
    date: "2025-02-14",
    category: "web",
    readTime: "2 min read",
    tags: ["Open Source", "Resources", "Design"],
    mediumUrl:
      "https://erenelagz.medium.com/3200-developer-tools-and-resource-free-e-book-9cf39b15e1f3",
    devtoUrl:
      "https://dev.to/erenelagz/3200-developer-and-designer-tools-free-e-book-2hfm",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F72p0vn10wchyu7ft3xig.png",
    description:
      "Announcing All in Dev: a free and open-source directory cataloging 3,200+ developer libraries, icons, tools, and UI inspiration hubs.",
  },
  {
    id: 2275631,
    title:
      "The Future of Cross-Platform Mobile Development: Trends and Technologies",
    date: "2025-02-13",
    category: "mobile",
    readTime: "3 min read",
    tags: ["Mobile", "Cross-Platform", "Architecture"],
    mediumUrl:
      "https://erenelagz.medium.com/the-future-of-cross-platform-mobile-development-trends-and-technologies-to-watch-389d4caf203f",
    devtoUrl:
      "https://dev.to/erenelagz/the-future-of-cross-platform-mobile-development-trends-and-technologies-to-watch-feg",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzmi0zc3v31sskel1valk.png",
    description:
      "Evaluating New Architecture (Fabric & TurboModules), Kotlin Multiplatform, and hybrid performance optimizations.",
  },
  {
    id: 2267462,
    title: "10 Essential Tips for Optimizing Performance in React Native Apps",
    date: "2025-02-09",
    category: "mobile",
    readTime: "3 min read",
    tags: ["React Native", "Performance", "Optimization"],
    mediumUrl:
      "https://erenelagz.medium.com/10-essential-tips-for-optimizing-performance-in-react-native-apps-8dfc21d9504a",
    devtoUrl:
      "https://dev.to/erenelagz/10-essential-tips-for-optimizing-performance-in-react-native-apps-4j93",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzmi0zc3v31sskel1valk.png",
    description:
      "Practical advice for reducing bundle size, avoiding wasteful re-renders, profiling memory leaks, and smoothing list scrolling.",
  },
  {
    id: 2260340,
    title: "Top 10 React Native UI Libraries for Stunning Mobile Apps.",
    date: "2025-02-05",
    category: "mobile",
    readTime: "3 min read",
    tags: ["React Native", "UI Design", "Libraries"],
    mediumUrl:
      "https://medium.com/@erenelagz/top-10-react-native-ui-libraries-for-stunning-mobile-apps-19f551353b35",
    devtoUrl:
      "https://dev.to/erenelagz/top-10-react-native-ui-libraries-for-mobile-development-538j",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqnhhfj5jyacikafuz2e2.jpeg",
    description:
      "A comparison of leading UI libraries for mobile, reviewing feature sets, developer experience, and design consistency.",
  },
  {
    id: 2253804,
    title:
      "Best React Native Map Modules: Comparison of the Most Popular 8 Libraries",
    date: "2025-02-01",
    category: "mobile",
    readTime: "4 min read",
    tags: ["React Native", "Maps", "Geolocation"],
    mediumUrl:
      "https://erenelagz.medium.com/best-react-native-map-libraries-comparison-of-the-7-map-module-2879e2974d9e",
    devtoUrl:
      "https://dev.to/erenelagz/best-react-native-map-modules-comparison-of-the-most-popular-8-libraries-201b",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4nsl0akqo5iu2u7mqwfz.jpg",
    description:
      "Benchmarking map rendering, marker performance, clustering, and routing across 8 mobile mapping packages.",
  },
];
