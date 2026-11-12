import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--page)",
        surface: "var(--surface)",
        "surface-soft": "var(--surface-soft)",
        "surface-subtle": "var(--surface-raised)",
        "surface-hover": "var(--surface-card)",
        border: "var(--line)",
        "border-hover": "var(--line-tag)",
        "text-primary": "var(--text-strong)",
        "text-secondary": "var(--text)",
        "text-muted": "var(--muted)",
        accent: "var(--blue)",
        "accent-fg": "var(--text-on-blue)",
        "chip-bg": "var(--chip-bg)",
        "chip-text": "var(--chip-text)",
      },
      fontFamily: {
        sans: ["var(--font-figtree)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
