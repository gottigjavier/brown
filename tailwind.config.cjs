/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Gotham SSm A, sans-serif']
		},
		extend: {
			fontSize: {
				'display': 'clamp(2.5rem, 8vw, 7rem)',
				'hero': 'clamp(1.8rem, 5vw, 4rem)',
				'section': 'clamp(1.2rem, 3vw, 2.5rem)',
			},
			animation: {
				'fadeIn': 'fadeIn 0.8s ease-out forwards',
				'slideUp': 'slideUp 0.8s ease-out forwards',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
}
