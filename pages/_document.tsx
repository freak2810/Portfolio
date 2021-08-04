import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';
import React from 'react';
import Navbar from '../components/Navbar';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Sacramento&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Navbar />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
