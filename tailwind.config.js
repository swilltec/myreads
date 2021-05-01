module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'font-ale': ["Alegreya", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
