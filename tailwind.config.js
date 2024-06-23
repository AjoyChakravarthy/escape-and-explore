/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: 'thin',
          scrollbarColor: ""
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px"
          },
          "&::-webkit-scrollbar-track": {
            background: "white"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: " #c5e3e8 ",
            borderRadius: "20px"
          },

        }
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    }

  ],
}

