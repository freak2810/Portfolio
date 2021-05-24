import SEO from '../components/SEO';
import Landing, { LandingProps } from '../components/Landing';
import GET_LANDING_PAGE_PROPS from '../apollo/queries/getLandingPageProps';
import client from '../apollo/client';

interface LandingPageProps extends LandingProps {}

export default function Home(props: LandingPageProps) {
	return (
		<div>
			<SEO />
			<Landing name={props.name} roles={props.roles} />
		</div>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: GET_LANDING_PAGE_PROPS,
		variables: { id: process.env.USER_ID },
	});

	const { name, roles } = data.landingPage;

	return {
		props: { name, roles },
	};
}
