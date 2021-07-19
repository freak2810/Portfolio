import SEO from '../components/SEO';
import TechnologyIcon from '../components/TechnologyIcon';
import { GET_TECHNOLOGY_STACK_PROPS } from '../apollo/queries';
import client from '../apollo/client';
import TechnologyPageProps from '../types/TechnologyPageProps';

export default function Technologies({ stacks }: TechnologyPageProps) {
	return (
		<>
			<SEO title={`Aditya's Portfolio - Technologies`} />
			<main className='container mx-auto lg:max-w-4xl'>
				<h1 className='text-6xl font-medium'>Technologies</h1>
				{stacks.map((stack, index) => (
					<article key={index} className='my-8'>
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
