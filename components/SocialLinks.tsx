import Image from 'next/image';
import SocialLinksProps, { SocialLinkProps } from '../types/SocialLinkProps';

const Link = (link: SocialLinkProps) => {
	return (
		<a
			className='hover:animate-pulse p-2 flex rounded-2xl hover:bg-gray-100'
			title={link.username}
			aria-roledescription='Link'
			target='blank'
			href={link.profileLink || `mailto:${link.username}`}>
			<Image
				className='self-center'
				src={link.socialIcon.url}
				alt={link.username || link.socialProfile}
				width={35}
				height={35}
				layout='intrinsic'
			/>
		</a>
	);
};

export default function SocialLinks({ links }: SocialLinksProps) {
	return (
		<div className='my-5 flex justify-between items-center w-10/12 sm:w-1/2 lg:w-1/3'>
			{links.map((link, index) => (
				<Link key={index} {...link} />
			))}
		</div>
	);
}
