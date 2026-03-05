/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Quicksand", "sans-serif"],
        secondary: ["Outfit", "sans-serif"],
        third: ["Maven Pro", "sans-serif"],
      },
      colors: {
        bg: "rgb(12, 12, 12)",
        verde: "#00C853",
        subtitle: "#cecece",
        greyCard: "#808080",
        textCard: "#85878b",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
