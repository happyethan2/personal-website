import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node(),
  // adapter: node({ mode: 'standalone' }),
  integrations: [tailwind({ applyBaseStyles: true }), mdx()],
  srcDir: 'src',
  server: { host: true },
});
