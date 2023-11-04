'use client';

import { sendEmail } from '../app/contact/action';

export default function ContactForm() {
	// if (isSubmitted) return 'Message Sent🤩';
	// if (submissionFailed) return 'Failed😓. Try again';
	// if (isSending) return 'Sending Message😋';

	return (
		<form
			action={sendEmail}
			className='max-w-sm mx-auto lg:max-w-none flex flex-col items-center px-4 my-2 lg:px-8 lg:py-4 border rounded-lg border-[#E84855]'
		>
			<h1 className='hidden my-2 text-3xl text-background lg:inline'>
				Drop a message
			</h1>
			<div className='flex flex-col w-full my-4 text-background lg:w-96'>
				<label htmlFor='name' className='my-1 text-[#E84855]'>
					Name
				</label>
				<input
					required
					className='p-2 text-xl font-medium rounded-md'
					type={'text'}
					name='name'
					placeholder='John Doe'
					maxLength={40}
					minLength={2}
				/>
			</div>
			<div className='flex flex-col w-full my-4 text-background lg:w-96'>
				<label htmlFor='email' className='my-1 text-[#E84855]'>
					Email
				</label>
				<input
					required
					className='p-2 text-xl font-medium rounded-md '
					name='email'
					type={'email'}
					placeholder='john.doe@example.com'
				/>
			</div>
			<div className='flex flex-col w-full my-4 text-background lg:w-96'>
				<label htmlFor='email' className='my-1 text-[#E84855]'>
					Message
				</label>
				<textarea
					required
					className='p-2 text-xl font-medium rounded-md outline-none resize-none'
					name='message'
					placeholder={`Let me know what's on your mind 💭`}
					maxLength={200}
				/>
			</div>
			<input
				type='submit'
				className='px-8 py-2 my-4 font-medium transition-colors duration-300 rounded-md cursor-pointer lg:my-1 text-md bg-background hover:bg-splash hover:text-background'
			/>
		</form>
	);
}
