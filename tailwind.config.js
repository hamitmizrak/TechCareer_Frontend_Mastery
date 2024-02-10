/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_4_TailwindCss/**/*.{html,js}",
  ],
  theme: {
    container: {
      center: true,
    }, /* end container */
    extend: {
      colors: {
        "techCareer-green":
          "#00C26D",
        primary:
          "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        techcareerElyazi:
          [
            "Dancing Script",
            "cursive",
            "sans-serif",
          ],
          techcareerRoboto:[
             'Roboto', 'sans-serif'
          ],

        open: [
          "Open Sans",
          "sans-serif",
        ],
        borderWidth:
          {
            // 14: "14px",
          },
      },
    }, /* end extend */
    plugins: [],
  },
}; /* end module.exports */
