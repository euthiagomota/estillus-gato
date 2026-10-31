import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    screens: { sm: "480px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1440px" },
    extend: {
      colors: {
        ink: "var(--color-ink)",
        graphite: "var(--color-graphite)",
        muted: "var(--color-muted)",
        paper: "var(--color-paper)",
        surface: "var(--color-surface)",
        line: "var(--color-line)",
        sand: "var(--color-sand)",
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "var(--page-max)" },
    },
  },
  plugins: [],
};
export default config;
