import { SocialIcon } from '../types/Icons';
import SocialLinksProps, { SocialLinkProps } from '../types/SocialLinkProps';
import Icon from './Icon';

const Link = (link: SocialLinkProps) => {
	return (
		<a
			className='p-2 hover:bg-gray-100 hover:shadow rounded-2xl'
			title={link.username}
			aria-roledescription='Link'
			target='blank'
			href={link.profileLink || `mailto:${link.username}`}
		>
			<Icon name={link.socialProfile as SocialIcon} />
		</a>
	);
};

export default function SocialLinks({ links }: SocialLinksProps) {
	return (
		<div className='flex items-center justify-between w-10/12 my-5 sm:w-1/2 lg:w-1/6'>
			{links.map((link, index) => (
				<Link key={index} {...link} />
			))}
		</div>
	);
}
