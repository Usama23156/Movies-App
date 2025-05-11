/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainColor:'var(--main-color)',
        textColor:'var(--text-color)',
        bgColor:'var(--bg-color)',
      },
    },
  },
  plugins: [],
}


