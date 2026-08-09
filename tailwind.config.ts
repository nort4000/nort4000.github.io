import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        panel: "#0F172A",
        card: "#111827",
        brand: "#2563EB",
        muted: "#CBD5E1",
      },
      boxShadow: {
        glow: "0 0 60px rgba(37,99,235,.20)",
      },
    },
  },
  plugins: [],
} satisfies Config;
