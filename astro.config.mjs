import { defineConfig } from "astro/config";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), mdx(), tailwind(), image(), react()],
  markdown: {
    shikiConfig: {
      theme: "slack-dark",
    },
  },
});
