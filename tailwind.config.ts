import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        cal: "var(--font-cal-sans), sans-serif",
        geist: "var(--font-geist-sans), sans-serif",},
        lexend: ["Lexend", "sans-serif"],
    },
  },
  plugins: [],
} satisfies Config;
