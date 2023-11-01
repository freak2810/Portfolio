import About from '../components/About';
import Landing from '../components/Landing';
import { generateMetadata } from '../components/SEO';
import sdk from '../graphql/client';

// metadata
export const metadata = generateMetadata();

const Page = async () => {
	const data = await getPageData();

	return (
		<>
			<Landing
				name={data?.name}
				roles={data?.roles || []}
				socialLinks={data?.socialLinks}
			/>
			<About
				about={data?.bioRaw}
				image={data?.profilePicture?.asset?.url || ''}
			/>
		</>
	);
};

const getPageData = async () => {
	const data = await sdk.HomePage({
		landingPage: '02b23706-d758-42e6-bb64-bb916d13d48d',
	});

	return data.LandingPage;
};

export default Page;
