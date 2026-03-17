/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        modalFadeIn: {
          "0%": { opacity: "0", transform: "scale(0.95)", filter: "blur(4px)" },
          "100%": { opacity: "1", transform: "scale(1)", filter: "blur(0px)" },
        },
        modalFadeOut: {
          "0%": { opacity: "1", transform: "scale(1)", filter: "blur(0px)" },
          "100%": {
            opacity: "0",
            transform: "scale(0.95)",
            filter: "blur(4px)",
          },
        },
        iconFill: {
          "0%": { fillOpacity: "0" },
          "100%": { fillOpacity: "1" },
        },
        clickEffect: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.96)" },
          "100%": { transform: "scale(1)" },
        },
        blurUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
            filter: "blur(4px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
      },
      animation: {
        iconFill: "iconFill 0.3s cubic-bezier(.48, 0, 0, 1)",
        clickEffect: "clickEffect 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        modalFadeIn: "modalFadeIn 0.3s ease-out forwards",
        modalFadeOut: "modalFadeOut 0.3s ease-out forwards",
        blurUp: "blurUp 0.3s ease-in forwards",
      },
    },
  },
  plugins: [],
  safelist: [
    { pattern: /row-span-(2|3|4|5|6|7|8|9|10|11|12)/ },
    { pattern: /col-span-(2|3|4|5|6|7|8|9|10|11|12)/ },
    { pattern: /z-(50|100|150)/ },
    "flex-col",
    "self-end",
    "bg-black",
    "bg-red-600",
    "w-64",
    "hidden",
    "z-50",
    "z-100",
    "z-150",
    "animate-modalFadeOut",
    "animate-modelFadeIn",
    "animate-blurUp",
    "users-background",
    "bg-green-500",
  ],
};
