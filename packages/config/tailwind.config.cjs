const defaultConfig = require('tailwindcss/defaultConfig')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../apps/*/{src,stories}/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '../../packages/*/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '!./**/node_modules/**'
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
