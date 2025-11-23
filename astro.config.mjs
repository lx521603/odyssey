import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://odyssey-theme.sapling.supply/',
  sitemap: true,
  integrations: [sitemap(), mdx(), lit(), icon(), react()],
  
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname
      }
    }
  }
});
