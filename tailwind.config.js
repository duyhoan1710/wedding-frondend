/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      boxShadow: {
        md: "0 12px 20px -2px rgb(104 112 118 / 0.08)",
      },
      colors: {
        "pink-8": "rgba(241, 78, 149, 0.8)",
        "black-1": "rgba(255, 255, 255, 0.1)",
        "black-border": "#00000026",

        pink: "#f14e95",
        gray: "#828282",
        "gray-c": "#ccc",
        "gray-4": "rgba(0, 0, 0, 0.04)",
        "gray-d4": "#d4d4d4",
        "gray-200": "#E6E8EB",
        "gray-500": "rgb(107 114 128)",
        "gray-600": "#404649",
        "gray-800": "rgb(31 41 55)",
        "gray-900": "#11181C",
        "dark-red": "rgba(120, 0, 20, 0.8)",
        "blue-200": "#CEE4FE",
        "blue-600": "#0072F5",
        "green-200": "#DAFBE8",
        "green-700": "#13A452",
        "red-200": "#FDD8E5",
        "red-700": "#F31260",
        "yellow-200": "#FDEFD8",
        "yellow-700": "#B97509",
      },
      fontFamily: {
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
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
  darkMode: "class",
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
    nextui(),
  ],
};
