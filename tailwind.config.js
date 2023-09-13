module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_purple: { A200_19: "#7b61ff19", A200: "#7b61ff" },
        pink: { 400: "#f25672", "400_19": "#f2567219" },
        amber: { 700: "#ed9c00", "600_19": "#d0bb0019", "700_19": "#ed9c0019" },
        green: { 600: "#27ae60", "600_19": "#27ae6019" },
        gray: { 100: "#f6f6f6" },
        black: { 900: "#000000", "900_33": "#00000033", "900_05": "#00000005" },
        blue_gray: { "400_05": "#8c8c8c05" },
        white: { A700_05: "#ffffff05" },
      },
      fontFamily: { ibmplexmono: "IBM Plex Mono", worksans: "Work Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
