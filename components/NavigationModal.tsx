import Modal from 'react-modal';
import Link from 'next/link';
import { Times } from '@styled-icons/fa-solid';
import { useNavigationContext } from '../context/NavigationContext';

const StyledLink = ({ address, title }: { address: string; title: string }) => {
	const { closeModal } = useNavigationContext();

	return (
        (<Link
            href={address}
            onClick={closeModal}
            className='p-1 my-2 text-2xl font-semibold transition-all duration-300 rounded-lg hover:bg-splash hover:text-background'>

            {title}

        </Link>)
    );
};

export default function NavigationModal() {
	const { isOpen, openModal, closeModal } = useNavigationContext();

	return (
		<Modal
			isOpen={isOpen}
			shouldCloseOnEsc
			onRequestClose={closeModal}
			className='w-screen h-screen bg-background'
			contentLabel='Mobile navigation Modal'>
			<div
				onClick={closeModal}
				className='relative z-20 flex flex-col items-center justify-center h-screen bg-background'>
				<button onClick={closeModal} className='absolute top-2 right-2'>
					<Times
						className='transition-all duration-300 hover:text-splash'
						color='#112d4e'
						height={24}
						width={24}
					/>
				</button>
				<StyledLink title='Home' address='/' />
				<StyledLink title='Education & Experience' address='/education' />
				<StyledLink title='Technologies & Skills' address='/technologies' />
				<StyledLink title='Projects' address='/projects' />
				<StyledLink title='Contact Me' address='/contact' />
			</div>
		</Modal>
	);
}
