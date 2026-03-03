/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./website/**/*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        themes: {
          brown: "#754833",
          darkbrown: "#a4885d",
          gold: "#d4b472",
        }
      }
    },
  },
  plugins: [],
}

