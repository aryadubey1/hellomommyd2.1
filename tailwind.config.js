/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baby-pink':   '#F8C8DC',
        'baby-blue':   '#BDE0FE',
        'mint':        '#CFFFE5',
        'beige':       '#FDF6EC',
        'brand-dark':  '#4A3728',
        'brand-rose':  '#E8718D',
        'brand-teal':  '#5BBCAD',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nunito:  ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(74,55,40,0.08)',
        card: '0 2px 16px rgba(74,55,40,0.10)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FDF6EC 0%, #F8C8DC 50%, #BDE0FE 100%)',
        'cta-gradient':  'linear-gradient(135deg, #CFFFE5 0%, #BDE0FE 100%)',
      },
    },
  },
  plugins: [],
}
