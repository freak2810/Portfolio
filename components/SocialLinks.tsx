'use client';

import { Link, Maybe } from '../graphql/__generated__';
import { SocialIcon } from '../types/Icons';
import Icon from './Icon';

const Link = (link: Maybe<Link>) => {
	return (
		<a
			className='p-2 hover:bg-gray-100 hover:shadow rounded-2xl'
			title={link?.username || ''}
			aria-roledescription='Link'
			target='blank'
			href={link?.profileLink || `mailto:${link?.username}`}
		>
			<Icon name={link?.socialProfile as SocialIcon} />
		</a>
	);
};

export default function SocialLinks({ links }: { links: Maybe<Link>[] }) {
	return (
		<div className='flex items-center justify-between w-10/12 my-5 sm:w-1/2 lg:w-36'>
			{links.map((link, index) => (
				<Link key={index} {...link} />
			))}
		</div>
	);
}
