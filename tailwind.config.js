/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        flat: "#777777",
        // primary: "rgb(245 94 219)",
        primary: "rgb(94 177 245)",
        secondary: "rgb(219 234 254)",
        hovsec: "#187cd3",
        graybg: "rgb(249 250 251)",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        logo: "Playwrite NG Modern",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")({})],
};
