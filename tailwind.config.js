/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "green-1": "#4e5a57",
      "green-2": "#5a6868",
    },
    extend: {
      fontFamily: {
        hp: ["Harry Potter", "sans-serif"],
      },
    },
    animation: {
      pulse: "pulse 1s infinite alternate",
    },
    keyframes: {
      pulse: {
        "0%, 100%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.2)" },
      },
    },
  },
  plugins: [],
};
