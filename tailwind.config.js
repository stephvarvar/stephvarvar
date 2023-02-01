/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'inset': 'inset 1px 1px 25px 1px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}
