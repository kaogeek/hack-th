import { defineConfig } from 'astro/config';

/* Adapter */
import node from '@astrojs/node';

/* Integrations */
import tailwind from '@astrojs/tailwind';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind()]
});