import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
  },
  integrations: [
    mdx({
      drafts: true,
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "dracula",
      },
    }),
    svelte(),
    tailwind(),
    image(),
    react(),
  ],
});
