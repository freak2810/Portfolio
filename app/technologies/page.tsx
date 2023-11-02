import sdk from '../../graphql/client';
import { generateMetadata } from '../../components/SEO';
import TechnologyIcon from '../../components/TechnologyIcon';
import Icon from '../../types/Icons';

export const metadata = generateMetadata(`Aditya's Portfolio - Technologies`);

const Technologies = async () => {
	const data = await getPageData();

	return (
		<>
			<section className='container px-4 mx-auto mt-20 lg:max-w-7xl'>
				<h1 className='mb-4 text-5xl font-semibold text-center md:text-6xl'>
					Technologies
				</h1>
				<main className='grid grid-cols-1 lg:grid-cols-2'>
					{data.map((stack, index) => (
						<article key={index} className='mx-2 my-4'>
							<h1 className='text-2xl font-medium text-center md:text-3xl'>
								{stack.type}
							</h1>
							<div className='flex flex-wrap justify-center my-5'>
								{stack.technologies?.map(t => (
									<div className='mx-4 mb-5 lg:mx-7' key={t}>
										{<TechnologyIcon size={50} name={t as Icon} />}
									</div>
								))}
							</div>
						</article>
					))}
				</main>
			</section>
		</>
	);
};

export default Technologies;

const getPageData = async () => {
	const data = await sdk.TechnologyPage();

	return data.allTechnologyPage;
};
