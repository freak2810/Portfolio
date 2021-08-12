import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import NavigationModalContextProvider from '../context/NavigationContext';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NavigationModalContextProvider>
			<Navbar />

			<Component {...pageProps} />
		</NavigationModalContextProvider>
	);
}
export default MyApp;
