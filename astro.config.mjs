// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://debling.com.br',
  integrations: [sitemap()],

  experimental: {
    fonts: [

{
                provider: fontProviders.fontsource(),
        name: "Iosevka Curly",
        cssVariable: "--font-iosevka",
        display: "swap",
      },
      
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
