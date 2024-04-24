/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/**/*.{html,js,ttf}", "./**/*.{html,js}", "./src/**/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins'],
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
}