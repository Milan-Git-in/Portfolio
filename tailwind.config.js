/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "500px",
      },
      transitionDuration: {
        850: "850ms",
      },
    },
  },
  plugins: [],
};
