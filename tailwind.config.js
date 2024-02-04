/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,css}", "index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

