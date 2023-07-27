import { z, defineCollection } from "astro:content";
const docsCollection = defineCollection({
  type: "content",
  schema: z.object({
    draft: z.boolean().default(false),
    date: z.date().transform((str) => new Date(str)),
    title: z.string(),
    // category: z.enum(["svelte"]).optional(),
    // tags: z.array(z.string()).optional(),
  }),
});
export const collections = {
  docs: docsCollection,
};
