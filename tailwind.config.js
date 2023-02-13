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
         dropShadow: {
            buttonShadow: "0px 26px 32px rgba(12, 214, 201, 0.25)",
         },
      },
   },
};
