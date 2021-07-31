import Link from 'next/link';

import { Hamburger } from '@styled-icons/fa-solid';

export default function Navbar() {
	const webView = (
		<ul className='justify-between hidden lg:flex'>
			<li className='p-0 mx-2'>
				<Link href='/'>
					<a>Home</a>
				</Link>
			</li>
			<li className='mx-2'>
				<Link href='/'>
					<a>Education & Experience</a>
				</Link>
			</li>
			<li className='mx-2'>
				<Link href='/technologies'>
					<a>Technologies & Skills</a>
				</Link>
			</li>
			<li className='mx-2'>
				<Link href='/'>
					<a>Contact Me</a>
				</Link>
			</li>
		</ul>
	);

	return (
		<header className='absolute top-0 w-screen h-12 mx-auto '>
			<nav className='container flex items-center justify-between px-4 mx-auto'>
				<Link href='/'>
					<a className='text-2xl font-bold font-title'>{`Aditya Manikanth Rao`}</a>
				</Link>
				<menu className='w-auto'>{webView}</menu>
				<Hamburger className='hamburger-menu' height={16} width={16} />
			</nav>
		</header>
	);
}
