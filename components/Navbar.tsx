import Link from 'next/link';
import { Hamburger } from '@styled-icons/fa-solid';
import { useRouter } from 'next/router';
import NavigationModal from './NavigationModal';
import { useNavigationContext } from '../context/NavigationContext';

const StyledLink = ({ address, title }: { address: string; title: string }) => {
	const { pathname } = useRouter();

	const anchorStyles =
		pathname === '/contact'
			? 'px-2 py-1 font-medium transition-all duration-300 rounded-lg text-[#112d4e] hover:bg-[#112d4e] hover:text-[#DBE2EF]'
			: 'px-2 py-1 font-medium transition-all duration-300 rounded-lg text-[#DBE2EF] hover:bg-[#DBE2EF] hover:text-[#112d4e]';

	return (
		<li className='mx-2'>
			<Link href={address}>
				<a
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
					}>
					{title}
				</a>
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
	const { pathname } = useRouter();
	const { openModal } = useNavigationContext();

	return pathname === '/contact' ? (
		<div />
	) : (
		<header className={`absolute top-0 w-full h-13 bg-[#112d4e]`}>
			<nav className='container flex items-center justify-between px-4 mx-auto'>
				<Link href='/'>
					<a className='text-2xl font-medium font-title text-[#F9F7F7]'>{`Aditya Manikanth Rao`}</a>
				</Link>
				<menu className='w-auto'>{webView}</menu>
				<Hamburger
					onClick={openModal}
					className='hamburger-menu'
					color='#F9F7F7'
					height={16}
					width={16}
				/>
			</nav>
			<NavigationModal />
		</header>
	);
}
