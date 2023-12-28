import type { Config } from 'tailwindcss';

import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.svelte', './src/**/*.html', './src/**/*.ts'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '0',
					sm: '2rem',
					lg: '4rem'
				},
				screens: {
					DEFAULT: '100%',
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1280px'
				}
			}
		}
	},
	plugins: [typography]
} satisfies Config;