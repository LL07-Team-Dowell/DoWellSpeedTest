/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2FA043",
      },
    },
  },
  plugins: [],
};
