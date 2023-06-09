import { defineConfig } from 'astro/config'

/* Adapter */
import node from '@astrojs/node'

/* Integrations */
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'middleware',
  }),
  integrations: [tailwind()],
})
