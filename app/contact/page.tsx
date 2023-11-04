import Image from 'next/image';
import { generateMetadata } from '../../components/SEO';
import ContactHeader from '../../components/ContactHeader';
import ContactForm from '../../components/ContactForm';

export const metadata = generateMetadata();

export default function Contact() {
	return (
		<>
			<ContactHeader />
			<section className='grid pt-16 h-screen-with-header place-items-center bg-text'>
				<main className='container items-center px-4 mx-auto mb-4 lg:mb-0 justify-items-center lg:justify-around lg:flex'>
					<div className='max-w-sm mx-auto lg:max-w-none'>
						<h1 className='text-5xl text-center text-background'>{`I'd love to hear from you`}</h1>
						<div className='relative w-full mt-16 h-60 lg:h-96'>
							<Image
								src={'/img/music.svg'}
								fill
								alt='Bird listening to music'
							/>
						</div>
					</div>
					<ContactForm />
				</main>
			</section>
		</>
	);
}
