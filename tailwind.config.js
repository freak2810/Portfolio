module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
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
