import TypeWriterEffect from './TypeWriterEffect';

export interface LandingProps {
	name: string;
	roles: string[];
}

export default function Landing({ name, roles }: LandingProps) {
	return (
		<div className='container w-screen h-screen flex flex-col justify-center items-center'>
			<h1 className='font-title text-4xl md:text-7xl lg:text-8xl font-semibold'>
				{name}
			</h1>
			<TypeWriterEffect roles={roles} />
		</div>
	);
}
