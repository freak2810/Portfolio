import { Hamburger } from '@styled-icons/fa-solid';
import Link from 'next/link';
import Image from 'next/image';
import { webView } from '../components/Navbar';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import NavigationModal from '../components/NavigationModal';
import { useNavigationContext } from '../context/NavigationContext';

export default function Contact() {
	const { openModal } = useNavigationContext();

	return <>
        <header className='absolute top-0 w-full bg-background'>
            <nav className='container flex items-center justify-between px-4 mx-auto'>
                <Link href='/' className='py-1 text-2xl font-medium lg:py-0 font-title'>
                    {`Aditya Manikanth Rao`}
                </Link>
                <menu className='w-auto'>{webView}</menu>
                <Hamburger
                    onClick={openModal}
                    className='transition-all duration-300 cursor-pointer hamburger-menu text-text hover:text-splash'
                    height={16}
                    width={16}
                />
            </nav>
            <NavigationModal />
        </header>
        <SEO />
        <section className='grid min-h-screen pt-16 lg:h-screen place-items-center bg-text'>
            <main className='container items-center px-4 mx-auto mb-4 lg:mb-0 justify-items-center lg:justify-around lg:flex'>
                <div className='max-w-sm mx-auto lg:max-w-none'>
                    <h1 className='text-5xl text-center text-background'>{`I'd love to hear from you`}</h1>
                    <Image
                        src={'/img/music.svg'}
                        height={1}
                        width={1}
                        layout={'responsive'}
                        alt='Bird listening to music'
                    />
                </div>
                <ContactForm />
            </main>
        </section>
    </>;
}
