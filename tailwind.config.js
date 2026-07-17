/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#65a30d', // Bright Green
          dark: '#4d7c0f',
        },
        dark: '#1e293b',
        light: '#64748b',
        'bg-light': '#f8fafc',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'sm': '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        'md': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
