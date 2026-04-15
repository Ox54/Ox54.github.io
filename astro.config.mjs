// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
	site: 'https://ox54.github.io',
	integrations: [
		mdx({
			remarkPlugins: [remarkGfm],
		}),
	],
});
