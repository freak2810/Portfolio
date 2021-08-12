import { useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link';
import { Times } from '@styled-icons/fa-solid';
import { useNavigationContext } from '../context/NavigationContext';

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
						className='hover:text-splash'
						color='#112d4e'
						height={24}
						width={24}
					/>
				</button>
				<Link href='/'>
					<a
						onClick={closeModal}
						className='p-1 my-2 text-2xl font-semibold rounded-lg hover:bg-splash hover:text-background'>
						Home
					</a>
				</Link>
				<Link href='/education'>
					<a
						onClick={closeModal}
						className='p-1 my-2 text-2xl font-semibold rounded-lg hover:bg-splash hover:text-background'>
						Education & Experience
					</a>
				</Link>
				<Link href='/technologies'>
					<a
						onClick={closeModal}
						className='p-1 my-2 text-2xl font-semibold rounded-lg hover:bg-splash hover:text-background'>
						Technology & Skills
					</a>
				</Link>
				<Link href='/projects'>
					<a
						onClick={closeModal}
						className='p-1 my-2 text-2xl font-semibold rounded-lg hover:bg-splash hover:text-background'>
						Projects
					</a>
				</Link>
				<Link href='/contact'>
					<a
						onClick={closeModal}
						className='p-1 my-2 text-2xl font-semibold rounded-lg hover:bg-splash hover:text-background'>
						Contact Me
					</a>
				</Link>
			</div>
		</Modal>
	);
}
