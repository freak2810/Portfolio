import Head from 'next/head';

interface SEOProps {
	title?: string;
}

export default function SEO({ title }: SEOProps) {
	return (
		<Head>
			<title>{title || `Aditya Manikanth Rao - Portfolio`}</title>
			<meta name='viewport' content='width=device-width' />
			<link rel='icon' href='logo.png' type='image/x-icon' />
			<meta name='title' content={title || `Aditya's Portfolio`} />
			<meta name='author' content='Aditya Manikanth Rao' />
			<meta charSet='UTF-8' />
			<meta httpEquiv='content-language' content='en' />
			<meta
				name='description'
				content='Hi! I am Aditya Manikanth Rao. I am a CS Grad and a Full Stack Developer from Warangal, India. And .... I love my music'
			/>
		</Head>
	);
}
