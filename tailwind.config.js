/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          blue: '#1a56db',
          deep: '#1e3a8a',
        },
        accent: {
          saffron: '#f97316',
          green: '#16a34a',
        }
      },
      screens: {
        '3xl': '2560px',
        '4xl': '3840px',
      }
    },
  },
  plugins: [],
}
