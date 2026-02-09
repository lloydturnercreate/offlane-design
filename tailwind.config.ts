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
        cream: "#F4F4F0",
        stark: "#111111",
        accent: "#2D5A47",
        placeholder: "#E5E5E0",
        border: "#D4D4D0",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "heading": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "subheading": ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.4" }],
        "service-number": ["clamp(4rem, 10vw, 8rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
      },
      spacing: {
        "section": "clamp(4rem, 12vw, 10rem)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
