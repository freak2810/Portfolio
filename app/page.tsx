import Image from 'next/image';

const Page = () => {
	return (
		<div className='relative z-0 h-screen'>
			<h1 className='absolute z-10 flex flex-col font-sans font-black text-red-500 -translate-y-1/2 top-1/2 text-9xl'>
				<span>Namaste</span>
				<span>{"I'm"}</span>
				<span className='underline'>Aditya</span>
			</h1>
			<div className='absolute right-0 w-2/5 translate-x-32 translate-y-16 h-4/5'>
				<Image
					loading='eager'
					alt='Aditya Manikanth Rao'
					layout='fill'
					src='https://cdn.sanity.io/images/cc2avtfw/production/1b24126c3c69c0226023505011ecb2b474b30436-532x532.jpg'
				/>
			</div>
		</div>
	);
};

export default Page;
