// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const typescriptCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedAt: z.string().transform((str) => new Date(str)),
  }),
});

const bloggingCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedAt: z.string().transform((str) => new Date(str)),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  typescript: typescriptCollection,
  blogging: bloggingCollection,
};
