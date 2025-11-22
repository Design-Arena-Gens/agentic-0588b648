import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1f6f8b",
          dark: "#0f3f52"
        },
        accent: "#f6ae2d"
      },
      fontFamily: {
        heading: ["'Cairo'", "system-ui", "sans-serif"],
        body: ["'IBM Plex Sans Arabic'", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        grid: "radial-gradient(circle at center, rgba(31, 111, 139, 0.2) 0, rgba(31, 111, 139, 0.2) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: []
};

export default config;
