import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gs-paper":   "#F4F1EA",
        "gs-paper-2": "#ECE9E2",
        "gs-white":   "#FFFFFF",
        "gs-grey-1":  "#E7E7E7",
        "gs-grey-2":  "#C9C9C9",
        "gs-grey-3":  "#8A8A8A",
        "gs-grey-4":  "#5C5C5C",
        "gs-ink":     "#0A0A0A",
      },
      fontFamily: {
        anton:   ["var(--font-display)", "Helvetica Neue", "Arial", "sans-serif"],
        archivo: ["var(--font-archivo)", "Helvetica Neue", "Arial", "sans-serif"],
        caveat:  ["var(--font-caveat)", "cursive"],
        mono:    ["var(--font-mono)", "ui-monospace", "SF Mono", "Menlo", "monospace"],
      },
      screens: {
        sm:  "560px",
        md:  "980px",
        lg:  "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
