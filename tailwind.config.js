module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    textShadow: {
      default: "0 0 10px #659dfa",
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
