import { Hamburger } from '@styled-icons/fa-solid';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { webView } from '../components/Navbar';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import NavigationModal from '../components/NavigationModal';
import { useNavigationContext } from '../context/NavigationContext';

export default function Contact() {
	const { openModal } = useNavigationContext();

	return (
		<>
			<header className='absolute top-0 w-full h-13 bg-[#F9F7F7]'>
				<nav className='container flex items-center justify-between px-4 mx-auto'>
					<Link href='/'>
						<a className='text-2xl font-medium font-title text-[#112d4e]'>{`Aditya Manikanth Rao`}</a>
					</Link>
					<menu className='w-auto'>{webView}</menu>
					<Hamburger
						onClick={openModal}
						className='hamburger-menu'
						color='#112d4e'
						height={16}
						width={16}
					/>
				</nav>
				<NavigationModal />
			</header>
			<SEO />
			<section className='min-h-screen lg:h-screen grid place-items-center pt-16 bg-[#112d4e]'>
				<main className='container items-center px-4 mx-auto justify-items-center lg:justify-around lg:flex'>
					<div className='max-w-sm mx-auto lg:max-w-none'>
						<h1 className='text-5xl text-center text-[#F9F7F7]'>{`I'd love to hear from you`}</h1>
						<Image
							src={'/img/music.svg'}
							height={1}
							width={1}
							layout={'responsive'}
							alt='Bird listening to music'
						/>
					</div>
					<ContactForm />
				</main>
			</section>
		</>
	);
}
