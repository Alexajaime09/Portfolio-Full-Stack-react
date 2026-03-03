export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Quicksand", "sans-serif"],
        secondary: ["Outfit"],
        third: ["Maven Pro"],
      },
      colors: {
        bg: "rgb(12, 12, 12)",
        verde: "#00C853",
        subtitle: "#cecece",
        greyCard: "#808080",
        textCard: "#85878b",
      },
    },
  },
  plugins: [],
};
