'use client';

import Link from 'next/link';
// @ts-expect-error - no types
import { Hamburger } from '@styled-icons/fa-solid';
import { usePathname } from 'next/navigation';
import NavigationModal from './NavigationModal';

const StyledLink = ({ address, title }: { address: string; title: string }) => {
	const pathname = usePathname();

	const anchorStyles =
		pathname === '/contact'
			? 'px-2 py-1 font-medium transition-all duration-300 rounded-lg text-text hover:bg-text hover:text-background'
			: 'px-2 py-1 font-medium transition-all duration-300 rounded-lg text-background hover:bg-background hover:text-text';

	return (
		<li className='mx-2'>
			<Link
				href={address}
				className={anchorStyles}
				style={
					address === pathname
						? {
								border:
									pathname === '/contact'
										? '1px solid #112d4e'
										: '1px solid #DBE2EF',
						  }
						: {}
				}
			>
				{title}
			</Link>
		</li>
	);
};

export const webView = (
	<ul className='items-center justify-between hidden lg:flex'>
		<StyledLink title='Home' address='/' />
		<StyledLink title='Education & Experience' address='/education' />
		<StyledLink title='Technologies & Skills' address='/technologies' />
		<StyledLink title='Projects' address='/projects' />
		<StyledLink title='Contact Me' address='/contact' />
	</ul>
);

export default function Navbar() {
	const pathname = usePathname();

	// const { openModal } = useNavigationContext();

	return pathname && ['/contact', '/studio'].includes(pathname) ? null : (
		<div className={`absolute top-0 w-full bg-text`}>
			<div className='container flex items-center justify-between px-4 mx-auto'>
				<Link
					href='/'
					className='py-1 text-2xl font-medium lg:py-0 font-title text-background'
				>
					{`Aditya Manikanth Rao`}
				</Link>
				<menu className='w-auto'>{webView}</menu>
				<Hamburger
					// onClick={openModal}
					className='my-1 transition-all duration-300 cursor-pointer hamburger-menu text-background hover:text-splash'
					height={20}
					width={20}
				/>
			</div>
			<NavigationModal />
		</div>
	);
}
