/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "80vh": "80vh",
        232: "232px",
      },
      fontSize: {
        head: "36px",
        sm: "16px",
        xs: "12px",
      },
      fontWeight: {
        light: "100",
      },
      width: {
        176: "11rem",
        395.91: "24.744rem",
      },
      flex:{
        2:"0 0 auto"
      }
    },
  },
  plugins: [],
};
