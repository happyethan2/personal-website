import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'server',
  integrations: [tailwind({ applyBaseStyles: true }), mdx()],
  srcDir: 'src',
  server: { host: true }
});
