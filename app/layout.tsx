import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { generateMetadata } from '../components/SEO';
import NavigationModalContextProvider from '../context/NavigationContext';
import '../styles/globals.scss';

export const metadata = generateMetadata();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<NavigationModalContextProvider>
					<Navbar />
					{children}
					<Footer />
				</NavigationModalContextProvider>
			</body>
		</html>
	);
}
