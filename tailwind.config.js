/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F4F0E9",
        "warm-white": "#FBF8F3",
        "deep-maroon": "#6E0F18",
        "dark-maroon": "#4B080E",
        "wine-red": "#851822",
        "soft-beige": "#D9C5AA",
        black: "#111111",
        "muted-black": "#292525",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
