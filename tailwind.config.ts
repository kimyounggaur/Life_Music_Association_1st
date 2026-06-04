import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-soft": "var(--color-bg-soft)",
        mint: "var(--color-bg-mint)",
        primary: "var(--color-primary)",
        "primary-deep": "var(--color-primary-deep)",
        coral: "var(--color-coral)",
        mustard: "var(--color-mustard)",
        ink: "var(--color-ink)"
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"]
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        lift: "var(--shadow-lift)"
      }
    }
  },
  plugins: []
};

export default config;
