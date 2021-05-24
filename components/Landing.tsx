import React from 'react';
import { LandingProps } from '../types/LandingPageProps';
import SocialLinks from './SocialLinks';
import TypeWriterEffect from './TypeWriterEffect';

export default function Landing({ name, roles, links }: LandingProps) {
	return (
		<div className='container w-screen h-screen flex flex-col justify-center items-center'>
			<h1 className='font-title font-semibold text-5xl text-center select-none md:text-7xl lg:text-8xl'>
				{name}
			</h1>
			<TypeWriterEffect roles={roles} />
			<SocialLinks links={links} />
		</div>
	);
}
