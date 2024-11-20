/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      tablet: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary-tomato': 'hsl(4, 100%, 67%)',
      'Dark-slateGray': 'hsl(234, 29%, 20%)',
      'Charcoal-Grey': 'hsl(235, 18%, 26%)',
      Grey: 'hsl(231, 7%, 60%)',
      White: 'hsl(0, 0%, 100%)',
    },
    extend: {
      backgroundImage: {
        'pattern-desktop': "url('/images/illustration-sign-up-desktop.svg')",
        'pattern-mobile': "url('/images/illustration-sign-up-mobile.svg')",
      }
    },
  },
  plugins: [],
}