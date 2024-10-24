/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans"], // Font
      },
      // Colors
      colors: {
        // Neutral colors
        neutral_900: "#0A0D14",
        neutral_500: "#525866",
        neutral_300: "#CDD0D5",
        neutral_100: "#F6F8FA",
        neutral_0: "#FFFFFF",
        // Blue
        blue_darker: "#162664",
        blue_dark: "#253EA7",
        blue_base: "#375DFB",
        blue_light: "#C2D6FF",
        blue_ligther: "#EBF1FF",
        // Orange
        orange_darker: "#BB3D1A",
        orange_dark: "#DE4C24",
        orange_basa: "#F27654",
        orange_light: "#FDB7A4",
        orange_lighter: "#FEE8E2",
        // Red
        red_darker: "#710E21",
        red_dark: "#AF1D38",
        red_base: "#DF1C41",
        red_light: "#F8C9D2",
        red_lighter: "#FDEDF0",
        // Yellow
        yellow_darker: "#693D11",
        yellow_dark: "#B47818",
        yellow_base: "#F2AE40",
        yellow_light: "#FBDFB1",
        yellow_lighter: "#FEF7EC",
        // Green
        green_darker: "#176448",
        green_dark: "#176448",
        green_base: "#38C793",
        green_light: "#CBF5E5",
        green_lighter: "#EFFAF6",
        // Purple
        purple_darker: "#2B1664",
        purple_dark: "#5A36BF",
        purple_base: "#6E3FF3",
        purple_light: "#CAC2FF",
        purple_lighter: "#EEEBFF",
        // Pink
        pink_darker: "#D2306B",
        pink_dark: "#E4508D",
        pink_base: "#EE7BAE",
        pink_light: "#F5ACCE",
        pink_lighter: "#FBE8F1",
        // Teal
        teal_darker: "#164564",
        teal_dark: "#1F87AD",
        teal_base: "#35B9E9",
        teal_light: "#C2EFFF",
        teal_lighter: "#EBFAFF",
      },
    },
  },
  plugins: [],
};
