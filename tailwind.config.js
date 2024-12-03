/** @type {import('tailwindcss').Config} */

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx,css,ttf}",
    "./screen/**/*.{js,jsx,ts,tsx,css,ttf}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0089FF",
        primaryTreatment: "#ED7390",
        primaryExercises: "#E59850",
        primaryCallDoctor: "#73E6ED",
      },
      fontFamily: {
        palatino: ["PalatinoLinotype"],
        openSans: ["OpenSans"],
        nunito: ["Nunito"],
        oleo: ["OleoScript"],
        nunitoBold: ["NunitoBold"],
      },
    },
  },
  plugins: [],
};
