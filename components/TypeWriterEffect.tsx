import Typewriter from 'typewriter-effect';

interface Roles {
	roles: string[];
}

export default function TypeWriterEffect({ roles }: Roles) {
	return (
		<div className='my-3'>
			<Typewriter
				options={{
					strings: roles,
					wrapperClassName: 'font-sans-serif text-2xl md:text-3xl lg:text-4xl',
					cursorClassName: 'font-sans-serif text-2xl md:text-3xl lg:text-4xl',
					autoStart: true,
					loop: true,
					deleteSpeed: 100,
					skipAddStyles: false,
				}}
				onInit={typewriter => {
					typewriter
						.callFunction(() => {
							console.log('String typed out!');
						})
						.pauseFor(2500)
						.deleteAll()
						.callFunction(() => {
							console.log('All strings were deleted');
						})
						.start();
				}}
			/>
		</div>
	);
}
