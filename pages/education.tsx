import React from 'react';
import client from '../apollo/client';
import GET_EDUCATION_PAGE_PROPS from '../apollo/queries/getEducationPageProps';
import SEO from '../components/SEO';
import EducationPageProps from '../types/EducationPageProps';

export default function Education({ institutes }: EducationPageProps) {
	return (
		<>
			<SEO title={`Aditya's Portfolio: Education & Experience`} />
			<section className='container px-4 mx-auto mt-20 lg:max-w-7xl'>
				<h1 className='mb-4 text-5xl font-semibold text-center md:text-6xl'>
					Education
				</h1>
				<main className='flex flex-col items-center my-4'>
					{institutes.map(i => (
						<div className='w-full my-4 lg:w-8/12' key={i.id}>
							<h1 className='my-2 text-4xl font-semibold'>{i.courseName}</h1>
							<h2 className='mt-2 text-2xl font-semibold'>
								{i.instituteName}
								<span className='ml-2 text-lg font-medium'>{i.location}</span>
							</h2>
							<h2 className='text-lg font-medium'>{i.caption}</h2>
							<h3 className=''>{i.duration}</h3>
							<h4 className='font-semibold'>{i.marksPercentage}</h4>
							<p className='my-2 whitespace-pre-wrap'>{i.description}</p>
						</div>
					))}
				</main>
			</section>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: GET_EDUCATION_PAGE_PROPS,
		variables: { id: 'ckrxc4bpsc6th0d56wsbjt696' },
	});

	return {
		props: {
			institutes: data.educationDetail.educationInstitutes,
		},
	};
}
