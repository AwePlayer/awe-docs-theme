import { z, defineCollection } from "astro:content";
const docsCollection = defineCollection({
  type: "content",
  schema: z.object({
    draft: z.boolean().default(false),
    date: z.date().transform((str) => new Date(str)),
    title: z.string(),
    category: z.enum(["svelte"]),
    tags: z.array(z.string()),
  }),
});
export const collections = {
  docs: docsCollection,
};
