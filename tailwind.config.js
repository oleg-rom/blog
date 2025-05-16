/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        mdplus: '900px',
      },
      colors: {
        accent: 'var(--color-accent)',
        highlight: 'var(--color-highlight)',
        bgLight: 'var(--color-bg-light)',
        bgDark: 'var(--color-bg-dark)',
        text: 'var(--color-text)',
        subtext: 'var(--color-subtext)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
