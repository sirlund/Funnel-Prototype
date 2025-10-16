/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#4A90E2',
				secondary: '#50C878',
				danger: '#E74C3C'
			}
		}
	},
	plugins: []
};
