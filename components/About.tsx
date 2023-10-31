import ReactMarkdown from 'react-markdown';
import { AboutProps } from '../types/LandingPageProps';
// @ts-expect-error - No types available
import toMarkdown from '@sanity/block-content-to-markdown';
// import Image from 'next/legacy/image';
import Image from 'next/image';

export default function About({ about, image }: AboutProps) {
	return (
		<div className=''>
			<h1 className='mb-4 text-5xl font-semibold text-center md:text-6xl'>
				About
			</h1>
			<div className='flex flex-col-reverse items-center justify-center px-5 my-10 lg:px-10 lg:flex-row'>
				<div className='px-2 my-10 lg:px-8 lg:w-2/3 lg:my-0'>
					{/* @ts-ignore */}
					<ReactMarkdown className='text-lg md about'>
						{toMarkdown(about)}
					</ReactMarkdown>
				</div>
				<Image
					className='cursor-pointer rounded-xl'
					src={image}
					alt='Aditya Manikanth Rao'
					layout='fixed'
					width={350}
					height={466.66}
				/>
			</div>
		</div>
	);
}
