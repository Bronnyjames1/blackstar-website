import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0212",
        graphite: "#12051F",
        steel: "#33114B",
        violet: "#682890",
        electric: "#A35ED4",
        silver: "#F2F0F2",
        muted: "#A6A0AB"
      },
      fontFamily: {
        sans: ["Rajdhani", "Segoe UI", "ui-sans-serif", "system-ui"],
        display: ["Orbitron", "Rajdhani", "Segoe UI", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(163, 94, 212, 0.24)",
        purple: "0 0 28px rgba(163, 94, 212, 0.34)"
      }
    }
  },
  plugins: []
};

export default config;
