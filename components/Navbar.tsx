import Link from 'next/link';
import { Hamburger } from '@styled-icons/fa-solid';
import { useRouter } from 'next/router';
import NavigationModal from './NavigationModal';
import { useNavigationContext } from '../context/NavigationContext';

const StyledLink = ({ address, title }: { address: string; title: string }) => {
	const { pathname } = useRouter();

	const anchorStyles =
		pathname === '/contact'
			? 'px-2 py-1 font-medium transition-all duration-300 rounded-lg text-text hover:bg-text hover:text-background'
			: 'px-2 py-1 font-medium transition-all duration-300 rounded-lg text-background hover:bg-background hover:text-text';

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
		<></>
	) : (
		<header className={`absolute top-0 w-full bg-text`}>
			<nav className='container flex items-center justify-between px-4 mx-auto'>
				<Link href='/'>
					<a className='py-1 text-2xl font-medium lg:py-0 font-title text-background'>{`Rahul Vaidya`}</a>
				</Link>
				<menu className='w-auto'>{webView}</menu>
				<Hamburger
					onClick={openModal}
					className='my-1 transition-all duration-300 cursor-pointer hamburger-menu text-background hover:text-splash'
					height={20}
					width={20}
				/>
			</nav>
			<NavigationModal />
		</header>
	);
}
