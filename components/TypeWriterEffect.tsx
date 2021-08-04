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
					wrapperClassName: 'select-none text-2xl md:text-3xl lg:text-4xl',
					cursorClassName: 'select-none text-2xl md:text-3xl lg:text-4xl',
					autoStart: true,
					loop: true,
					deleteSpeed: 100,
					skipAddStyles: false,
				}}
				onInit={typewriter => {
					typewriter.pauseFor(2500).deleteAll().start();
				}}
			/>
		</div>
	);
}
