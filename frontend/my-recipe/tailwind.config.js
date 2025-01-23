/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FEFEF1",
        secondary: {
          DEFAULT: "#1b1b1b",
          d_green: "#395B65",
          d_ash: "rgba(25, 27, 27, 0.5)",
          100: "#d9d9d9",
          200: "b7b7b7",
        },
        icons: {
          DEFAULT: "#8d8d8d",
          orange: "#E77A37",
          l_orange: "#FECB87",
        },
      },
      fontFamily: {
        playwrite: ["Playwrite US Trad", "serif"],
        raleway: ["Raleway", "serif"],
        lato: ["Lato", "serif"],
        papyrus: ["Papyrus", "serif"],
        hiragano: ["Hiragano Sans GB", "sans-serif"],
      },
    },
    plugins: [],
  },
};
