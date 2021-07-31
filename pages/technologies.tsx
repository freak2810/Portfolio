import SEO from '../components/SEO';
import TechnologyIcon from '../components/TechnologyIcon';
import { GET_TECHNOLOGY_STACK_PROPS } from '../apollo/queries';
import client from '../apollo/client';
import TechnologyPageProps from '../types/TechnologyPageProps';

export default function Technologies({ stacks }: TechnologyPageProps) {
	return (
		<>
			<SEO title={`Aditya's Portfolio - Technologies`} />
			<section className='container w-full px-4 mt-20'>
				<h1 className='mb-4 text-6xl font-semibold'>Technologies</h1>
				<main className='grid grid-cols-2 mx-auto lg:max-w-7xl'>
					{stacks.map((stack, index) => (
						<article key={index} className='mx-2 my-4'>
							<h1 className='text-3xl'>{stack.name}</h1>
							<div className='flex flex-wrap my-5'>
								{stack.technologies.map(t => (
									<div className='mb-5 mr-12' key={t.name}>
										<TechnologyIcon size={50} name={t.name} />
									</div>
								))}
							</div>
						</article>
					))}
				</main>
			</section>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: GET_TECHNOLOGY_STACK_PROPS,
		variables: { id: 'ckqo4fxt4r83f0c006leup6i3' },
	});

	return {
		props: {
			stacks: data.technologyPage.stacks,
		},
	};
}
