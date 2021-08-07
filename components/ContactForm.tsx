import { FormEvent, useState } from 'react';

export default function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	function onFormSubmitHandler(e: FormEvent) {
		e.preventDefault();
	}

	return (
		<form className='max-w-sm mx-auto lg:max-w-none flex flex-col items-center px-4 my-2 lg:px-8 lg:py-4 border rounded-lg border-[#E84855]'>
			<h1 className='hidden my-2 text-4xl text-background lg:inline'>
				Leave a message
			</h1>
			<div className='flex flex-col w-full my-4 text-background lg:w-96'>
				<label htmlFor='name' className='my-1 text-[#E84855]'>
					Name
				</label>
				<input
					required
					className='p-2 text-xl font-medium rounded-md'
					type={'text'}
					value={name}
					name='name'
					onChange={e => setName(e.target.value)}
					placeholder='John Doe'
					maxLength={40}
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
					value={email}
					onChange={e => setEmail(e.target.value)}
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
					name='email'
					value={message}
					onChange={e => setMessage(e.target.value)}
					placeholder={`Let me know what's on your mind 💭`}
					maxLength={200}
				/>
			</div>
			<button
				onClick={onFormSubmitHandler}
				className='px-8 py-2 my-4 font-medium transition-colors duration-300 rounded-md lg:my-1 text-md bg-background hover:bg-splash hover:text-background'>
				Send
			</button>
		</form>
	);
}
