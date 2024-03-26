/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in the src directory
  ],
  theme: {
    screens: {
      smm: { max: "320px" },
      smn: { min: "375px", max: "600px" },
      sm: { max: "600px" },
      md: "501px",
      lg: "768px",
      xl: "1024px",
    },
    extend: {
      colors: {
        primary: "#2FA043",
      },
    },
  },
  plugins: [],
};
