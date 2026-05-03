/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Kanit', 'sans-serif'],
    },
    extend: {
      colors: {
        dark: '#0C0C0C',
        light: '#D7E2EA',
        accent: '#B600A8',
        accent2: '#7621B0',
        accent3: '#BE4C00',
        border: '#D7E2EA',
      },
      borderRadius: {
        'xl': '2rem',
        '2xl': '2.5rem',
        '3xl': '3.75rem',
        '4xl': '5rem',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)',
        'contact-gradient': 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
      },
    },
  },
  plugins: [],
}

