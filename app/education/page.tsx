import ReactMarkdown from 'react-markdown';
import { generateMetadata } from '../../components/SEO';
import sdk from '../../graphql/client';

export const metadata = generateMetadata(
	`Aditya's Portfolio: Education & Experience`
);

const Education = async () => {
	const { institutes } = await getData();

	return (
		<section className='container px-4 mx-auto mt-20 lg:max-w-7xl'>
			<h1 className='mb-4 text-5xl font-semibold text-center md:text-6xl'>
				Education
			</h1>
			<div className='flex flex-col items-center my-4'>
				{institutes.map(i => (
					<div className='w-full my-4 lg:w-8/12' key={i._id}>
						<h1 className='my-2 text-4xl font-semibold'>{i.course}</h1>
						<h2 className='mt-2 text-2xl font-semibold'>
							{i.institute}
							<span className='ml-2 text-lg font-medium'>{i.location}</span>
						</h2>
						<h2 className='text-lg font-medium'>{i.affiliation}</h2>
						<h3 className=''>{i.period}</h3>
						<h4 className='font-semibold'>{i.scores}</h4>
						{i.achievements &&
							i.achievements.map((a, index) => (
								<ul className='ml-5 list-disc' key={index}>
									<li>
										<p className='mt-2 md'>{a}</p>
									</li>
								</ul>
							))}
					</div>
				))}
			</div>
		</section>
	);
};

export default Education;

const getData = async () => {
	const data = await sdk.EducationPage();

	return {
		institutes: data.allEducationPage,
	};
};
