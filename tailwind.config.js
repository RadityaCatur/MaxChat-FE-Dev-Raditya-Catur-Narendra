/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1020px',
        'xl': '1440px',
        '2xl': '1536px',
      }
    }
  },
  plugins: []
};