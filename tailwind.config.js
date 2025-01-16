import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color1':"#262d53",
        'color2':"#4a7fce",
        'color3':"#69c8d4",
      },
      fontFamily:{
        'lato':'"Lato", serif;',
        'Noto':'"Noto Sans", serif;'
      }
    },
  },
  plugins: [daisyui],
}

