module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			title: ['Sacramento', 'cursive'],
		},
		colors: {
			background: '#222831',
			text: '#DDDDDD',
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
