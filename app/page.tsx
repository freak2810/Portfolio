import client from '../apollo/client';
import { GET_LANDING_PAGE_PROPS } from '../apollo/queries';
import Landing from '../components/Landing';
import SEO, { generateMetadata } from '../components/SEO';
import LandingPageProps from '../types/LandingPageProps';
import { Metadata } from 'next';

export const metadata = generateMetadata();

const getLandingPageData = async (): Promise<LandingPageProps> => {
	const { data } = await client.query({
		query: GET_LANDING_PAGE_PROPS,
		variables: { landingPage: '02b23706-d758-42e6-bb64-bb916d13d48d' },
	});

	return {
		name: data.LandingPage.name,
		roles: data.LandingPage.roles,
		links: data.LandingPage.socialLinks,
		about: data.LandingPage.bioRaw,
		image: data.LandingPage.profilePicture.asset.url,
	};
};

const Home = async () => {
	const data = await getLandingPageData();

	return (
		<>
			<Landing name={data.name} roles={data.roles} links={data.links} />
			{/* <About about={props.about} image={props.image} /> */}
		</>
	);
};

export default Home;
