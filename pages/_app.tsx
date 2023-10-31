import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import NavigationModalContextProvider from '../context/NavigationContext';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NavigationModalContextProvider>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</NavigationModalContextProvider>
	);
}
export default MyApp;
