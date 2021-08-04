import SEO from '../components/SEO';
import TechnologyIcon from '../components/TechnologyIcon';
import { GET_TECHNOLOGY_STACK_PROPS } from '../apollo/queries';
import client from '../apollo/client';
import TechnologyPageProps from '../types/TechnologyPageProps';

export default function Technologies({ stacks }: TechnologyPageProps) {
	return (
		<>
			<SEO title={`Aditya's Portfolio - Technologies`} />
			<section className='container px-4 mx-auto mt-20 lg:max-w-7xl'>
				<h1 className='mb-4 text-5xl font-semibold text-center md:text-6xl'>
					Technologies
				</h1>
				<main className='grid grid-cols-1 lg:grid-cols-2'>
					{stacks.map((stack, index) => (
						<article key={index} className='mx-2 my-4'>
							<h1 className='text-2xl text-center md:text-3xl'>{stack.name}</h1>
							<div className='flex flex-wrap justify-center my-5'>
								{stack.technologies.map(t => (
									<div className='mx-4 mb-5 lg:mx-7' key={t.name}>
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
