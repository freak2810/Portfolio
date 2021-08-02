import Link from 'next/link';

import { Hamburger } from '@styled-icons/fa-solid';

const StyledLink = ({ address, title }: { address: string; title: string }) => (
	<li className='mx-2'>
		<Link href={address}>
			<a className='p-2 font-medium transition-all duration-300 rounded-md text-text hover:bg-text hover:text-background'>
				{title}
			</a>
		</Link>
	</li>
);

export default function Navbar() {
	const webView = (
		<ul className='items-center justify-between hidden lg:flex'>
			<StyledLink title='Home' address='/' />
			<StyledLink title='Education & Experience' address='/' />
			<StyledLink title='Technologies & Skills' address='/technologies' />
			<StyledLink title='Projects' address='/' />
			<StyledLink title='Contact Me' address='/' />
		</ul>
	);

	return (
		<header className='absolute top-0 w-screen h-13 bg-background'>
			<nav className='container flex items-center justify-between px-4 mx-auto bg-background'>
				<Link href='/'>
					<a className='text-2xl font-medium font-title text-text'>{`Aditya Manikanth Rao`}</a>
				</Link>
				<menu className='w-auto'>{webView}</menu>
				<Hamburger
					className='hamburger-menu'
					color='#dddddd'
					height={16}
					width={16}
				/>
			</nav>
		</header>
	);
}
