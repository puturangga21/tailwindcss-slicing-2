const { purple } = require("color-name");

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html"],
   theme: {
      container: {
         center: true,
      },
      extend: {
         fontFamily: {
            supreme: ["Supreme", "sans-serif"],
         },
         colors: {
            purple: "#513962",
            grey: "#5A5A5A",
         },
      },
   },
   plugins: [require("prettier-plugin-tailwindcss")],
};
