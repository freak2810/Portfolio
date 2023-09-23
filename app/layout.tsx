import NavigationModalContextProvider from '../context/NavigationContext';

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
	return <html lang='en'>{props.children}</html>;
}
