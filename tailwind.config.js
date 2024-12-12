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
        "custom-blue": "rgba(0, 137, 255, 0.30)",
        "custom-bg": "rgba(0, 122, 255, 0.04)",
        "custom-bg-burger": "rgba(36, 39, 96, 0.05)",
        "custom-icon": "rgba(0, 98, 255, 0.05)",
      },
      fontFamily: {
        palatino: ["PalatinoLinotype"],
        openSans: ["OpenSans"],
        nunito: ["Nunito"],
        oleo: ["OleoScript"],
        nunitoBold: ["NunitoBold"],
        assistant: ["Assistant"],
        inter: ["Inter"],
      },
      boxShadow: {
        custom: "0px 4px 8px 0px rgba(0, 0, 0, 0.15)",
        "custom-sd": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
