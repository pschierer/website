// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import aws from 'astro-sst';

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: aws(),
	vite: {
		server: {
			allowedHosts: ["45489480-8434-4090-aac4-d0eb6496a847-00-3hw59jyqca2lh.spock.replit.dev"],
		}
	},
	integrations: [
		starlight({
			title: 'BOTW glitches',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'guides',
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
