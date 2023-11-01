import client from '../apollo/client';
import { GET_LANDING_PAGE_PROPS } from '../apollo/queries';
import About from '../components/About';
import Landing from '../components/Landing';
import { generateMetadata } from '../components/SEO';

// metadata
export const metadata = generateMetadata();

const Page = async () => {
	const data = await getPageData();

	return (
		<>
			<Landing name={data.name} roles={data.roles} links={data.links} />
			<About about={data.about} image={data.image} />
		</>
	);
};

const getPageData = async () => {
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

export default Page;
