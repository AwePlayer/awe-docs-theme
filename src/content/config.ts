import { z, defineCollection } from "astro:content";
const docsCollection = defineCollection({
  type: "content",
  schema: z.object({
    draft: z.boolean().default(false),
    date: z.date().transform((str) => new Date(str)),
    title: z.string(),
  }),
});
export const collections = {
  docs: docsCollection,
};
