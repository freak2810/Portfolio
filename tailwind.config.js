/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			title: ['Sacramento', 'cursive'],
			// title: ['WindSong', 'cursive'],
		},
		colors: {
			text: '#112d4e',
			background: '#f9f7f7',
			splash: '#E84855',
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
