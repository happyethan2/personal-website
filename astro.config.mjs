import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',  // server side rendering (SSR)]
  adapter: node({ mode: 'standalone' }),  // bundle a self contained server
  integrations: [tailwind({ applyBaseStyles: true }), mdx()],  
  srcDir: 'src',
  server: { host: true }
});
