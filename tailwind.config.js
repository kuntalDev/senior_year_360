/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: '15px',
    },
    extend: {
      colors: {
        'primary': '#45A6FF',
        'secondary': '#112537',
      },
    },
    screens: {
      'sm': '640px',
      
      'md': '768px',
      
      'lg': '991px',

      'lmd': '1024px',

      'xl': '1140px',

      '2xl': '1310px',

      '3xl': '1440px',
    }
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}
