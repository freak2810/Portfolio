import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import '../styles/globals.css';
import Menu from '../components/menu';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-poppins',
});

const Layout = (props: { children: ReactNode }) => {
	return (
		<html className={`${poppins.className} w-screen`} lang='en'>
			<body className='flex flex-row'>
				<div className='w-2/3 px-16 bg-red-100'>
					<section className='max-w-5xl'>{props.children}</section>
				</div>
				<Menu />
			</body>
		</html>
	);
};

export default Layout;
