/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        "desktop": "#018281",
        "grey" : {
          "DEFAULT": "#C0C0C0",
          "flare": "#DDDDDD"
        },
        "win-blue": "#030AA3"
      },
      dropShadow : {
        "windows": "2px 2px #555555",
        "reverse": "2px 2px #DDDDDD"
      }
    },
  },
  plugins: [],
}