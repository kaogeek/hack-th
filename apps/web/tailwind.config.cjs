const defaultConfig = require('tailwindcss/defaultConfig')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Anuphan Variable"', ...defaultConfig.theme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
