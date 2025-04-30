import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        border: "var(--border)",
        input: "var(--input)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      transitionProperty: {
        height: "height",
      },
      transformOrigin: {
        "top-left-100": "100% 0%",
      },
      translate: {
        "y-180": "180deg",
      },
      rotate: {
        "y-180": "180deg",
      },
      perspective: {
        "1000": "1000px",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
    },
  },
  plugins: [],
};

export default config; 