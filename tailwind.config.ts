import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D9991",
        "primary-dark": "#368a83",
        dark: "#1F1F1F",
        "footer-bg": "#2a2a2a",
        "pre-footer-bg": "#363636",
      },
      fontFamily: {
        "proxima-nova": ["var(--font-proxima-nova)", "system-ui", "sans-serif"],
        garamond: ["var(--font-garamond)", "Georgia", "serif"],
      },
      fontSize: {
        "hero": ["18px", { lineHeight: "1.4", letterSpacing: "0.1em", fontWeight: "600" }],
        "nav": ["13px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "400" }],
        "section-title": ["32px", { lineHeight: "1.2", letterSpacing: "0.02em" }],
        "card-title": ["18px", { lineHeight: "1.4", letterSpacing: "0.1em", fontWeight: "600" }],
        "body": ["16px", { lineHeight: "1.6" }],
        "small": ["14px", { lineHeight: "1.6" }],
      },
    },
  },
  plugins: [],
};

export default config;
