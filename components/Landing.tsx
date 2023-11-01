import { LandingPage } from '../graphql/__generated__';
import SocialLinks from './SocialLinks';
import TypeWriterEffect from './TypeWriterEffect';

// आदित्य मणिकंठ राव

export default function Landing({
	name,
	roles,
	socialLinks,
}: Pick<LandingPage, 'name' | 'roles' | 'socialLinks'>) {
	return (
		<main className='container flex flex-col items-center justify-center h-screen mx-auto'>
			<h1 className='text-5xl font-medium text-center select-none font-title md:text-7xl lg:text-8xl'>
				{name}
			</h1>
			{/* <TypeWriterEffect roles={roles} /> */}
			<SocialLinks links={socialLinks || []} />
		</main>
	);
}
