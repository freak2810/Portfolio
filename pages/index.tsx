import SEO from '../components/SEO';
import Landing from '../components/Landing';
import GET_LANDING_PAGE_PROPS from '../apollo/queries/getLandingPageProps';
import client from '../apollo/client';
import LandingPageProps from '../types/LandingPageProps';
import About from '../components/About';

export default function Home(props: LandingPageProps) {
	return (
		<>
			<SEO />
			<Landing name={props.name} roles={props.roles} links={props.links} />
			<About about={props.about} image={props.image} />
		</>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: GET_LANDING_PAGE_PROPS,
		variables: { landingPage: '02b23706-d758-42e6-bb64-bb916d13d48d' },
	});

	return {
		props: {
			name: data.LandingPage.name,
			roles: data.LandingPage.roles,
			links: data.LandingPage.socialLinks,
			about: data.LandingPage.bioRaw,
			image: data.LandingPage.profilePicture.asset.url,
		},
	};
}
