import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkLint from "remark-lint";

// https://astro.build/config
export default defineConfig({
  output: "static",
  experimental: {
    assets: true,
  },
  integrations: [mdx(), svelte(), tailwind(), react()],
  markdown: {
    remarkPlugins: [remarkLint],
  },
});
