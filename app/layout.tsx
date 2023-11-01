import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { generateMetadata } from '../components/SEO';
import '../styles/globals.scss';

export const metadata = generateMetadata();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			<body>{children}</body>
			<Footer />
		</>
	);
}
