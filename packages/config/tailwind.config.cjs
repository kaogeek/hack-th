const defaultConfig = require('tailwindcss/defaultConfig')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '../../packages'
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
