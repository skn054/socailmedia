/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8a2be2",
        light: "#fcedf0",
        grey: "#cbcbcb",
        lightGrey: "#a9a9a9",
        darkGrey: "#5a5a5a80",
        dark: "#102b3f",
        darkSecondary: "#ffffff",
        hoverBlue: "#001e39",
        green: "#1c9c76",
      },
    },
  },
  plugins: [],
};
