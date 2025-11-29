// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://debling.com.br',
  output: 'static',
  integrations: [sitemap()],
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
  },

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
