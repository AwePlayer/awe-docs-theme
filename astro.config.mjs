import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula"
    }
  }), svelte(), tailwind(), image()]
});