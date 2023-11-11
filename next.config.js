module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
				pathname: '/images/cc2avtfw/production/**',
			},
		],
	},
	async redirects() {
		return [
			{
				source: '/about',
				destination: '/',
				permanent: true,
			},
			{
				source: '/experience',
				destination: '/education',
				permanent: true,
			},
		];
	},
};
