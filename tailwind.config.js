/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        "pink-8": "rgba(241, 78, 149, 0.8)",
        "black-1": "rgba(255, 255, 255, 0.1)",
        pink: "#f14e95",
        gray: "#828282",
        "gray-c": "#ccc",
        "gray-4": "rgba(0, 0, 0, 0.04)",
        "gray-d4": "#d4d4d4",
        "dark-red": "rgba(120, 0, 20, 0.8)",
      },
      fontFamily: {
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
        default: ["var(--font-workSans)", "system-ui", "sans-serif"],
        sacra: ["var(--font-sacra)", "system-ui", "sans-serif"],
        workSans: ["var(--font-workSans)", "system-ui", "sans-serif"],
      },
      animation: {
        // Fade up and down
        "fade-up": "fade-up .8s",
        "fade-down": "fade-down 0.5s",
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "s-pulse": "s-pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        // Fade up and down
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "s-pulse": {
          "0%": {
            transform: "scale(0.95)",
          },
          "50%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(0.95)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};
