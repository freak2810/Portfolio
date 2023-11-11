'use client';

import { Hamburger } from '@styled-icons/fa-solid';
import Link from 'next/link';
import { useNavigationContext } from '../context/NavigationContext';
import NavigationModal from './NavigationModal';
import { webView } from './Navbar';

export default function ContactHeader() {
	const { openModal } = useNavigationContext();

	return (
		<header className='absolute top-0 w-full bg-background'>
			<nav className='container flex items-center justify-between px-4 mx-auto'>
				<Link
					href='/'
					className='py-1 text-2xl font-medium lg:py-0 font-title'
				>
					{`Aditya Manikanth Rao`}
				</Link>
				<menu className='w-auto'>{webView}</menu>
				<Hamburger
					onClick={openModal}
					className='transition-all duration-300 cursor-pointer hamburger-menu text-text hover:text-splash'
					height={16}
					width={16}
				/>
			</nav>
			<NavigationModal />
		</header>
	);
}
