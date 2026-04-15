// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
	integrations: [
		mdx({
			remarkPlugins: [remarkGfm],
		}),
	],
});
