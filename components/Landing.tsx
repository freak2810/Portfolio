import React from 'react';
import { LandingProps } from '../types/LandingPageProps';
import SocialLinks from './SocialLinks';
import TypeWriterEffect from './TypeWriterEffect';

export default function Landing({ name, roles, links }: LandingProps) {
	return (
		<main className='container flex flex-col items-center justify-center w-screen h-screen'>
			<h1 className='text-5xl font-semibold text-center select-none text-typography-dark font-title md:text-7xl lg:text-8xl'>
				{name}
			</h1>
			<TypeWriterEffect roles={roles} />
			<SocialLinks links={links} />
		</main>
	);
}
