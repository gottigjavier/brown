/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Gotham SSm A, sans-serif']
		},
		extend: {
			colors: {
				surface: {
					dark: '#0a0a0f',
					card: '#1a1a24',
					elevated: '#252533',
				},
				text: {
					primary: '#f1f5f9',
					secondary: '#94a3b8',
					muted: '#64748b',
				},
				accent: {
					DEFAULT: '#fbbf24',
					hover: '#f59e0b',
					light: '#fde68a',
				},
			},
			fontSize: {
				'display': 'clamp(2.5rem, 8vw, 7rem)',
				'hero': 'clamp(1.8rem, 5vw, 4rem)',
				'section': 'clamp(1.2rem, 3vw, 2.5rem)',
				'caption': '0.75rem',
				'body': '1rem',
				'lead': '1.125rem',
				'headline': '1.5rem',
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
			},
			animation: {
				'fadeIn': 'fadeIn 0.8s ease-out forwards',
				'slideUp': 'slideUp 0.8s ease-out forwards',
				'slideInLeft': 'slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'scaleIn': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
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
				slideInLeft: {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				scaleIn: {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
			},
		},
	},
	plugins: [],
}
