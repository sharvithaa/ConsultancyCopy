/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          customColor: '#FF725E', // Use your desired hex color code
        },
      },
    },

  plugins: [],
}

