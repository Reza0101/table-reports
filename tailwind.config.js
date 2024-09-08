/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx, js, ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          primary: "#F4F5F7",
          secondary: "#72777E",
        },
        border: {
          primary: "#D8DBE1",
        },
        highlight: {
          primary: {
            blue: "#0072F0"
          }
        }

      }
    },
  },
  plugins: [],
}

