import ReactMarkdown from 'react-markdown';
import { AboutProps } from '../types/LandingPageProps';

export default function About({ about, image }: AboutProps) {
	return (
		<div className=''>
			<h1 className='mb-4 text-5xl font-semibold text-center md:text-6xl'>
				About
			</h1>
			<div className='flex flex-col-reverse items-center justify-center px-5 my-10 lg:px-10 lg:flex-row'>
				<div className='px-2 my-10 lg:px-8 lg:w-2/3 lg:my-0'>
					<ReactMarkdown className='lg:text-lg md about'>{about}</ReactMarkdown>
				</div>
				<img
					src={image}
					alt='Aditya Manikanth Rao'
					className='rounded rounded-xl'
					width={350}
					height='auto'
				/>
			</div>
		</div>
	);
}
