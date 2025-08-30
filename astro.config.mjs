import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

const mode = process.env.ASTRO_ADAPTER_MODE || 'standalone';

export default defineConfig({
  output: 'server',
  adapter: node({ mode }),
  // adapter: node({ mode: 'standalone' }),
  integrations: [tailwind({ applyBaseStyles: true }), mdx()],
  srcDir: 'src',
  server: { host: true },
});
