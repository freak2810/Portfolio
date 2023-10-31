import ReactMarkdown from 'react-markdown';
import client from '../apollo/client';
import GET_EDUCATION_PAGE_PROPS from '../apollo/queries/getEducationPageProps';
import SEO from '../components/SEO';
import EducationPageProps from '../types/EducationPageProps';

export default function Education({
	institutes,
	companies,
}: EducationPageProps) {
	return (
		<>
			<SEO title={`Aditya's Portfolio: Education & Experience`} />
			<section className='container px-4 mx-auto mt-20 lg:max-w-7xl'>
				<h1 className='mb-4 text-5xl font-semibold text-center md:text-6xl'>
					Experience
				</h1>
				<div className='flex flex-col items-center my-4 mb-16'>
					{companies.map(c => (
						<div className='w-full my-4 lg:w-8/12' key={c.id}>
							<h1 className='my-2 text-4xl font-semibold'>{c.role}</h1>
							<h2 className='mt-2 text-2xl font-semibold'>{c.name}</h2>
							<h4 className='font-semibold'>{c.jobType}</h4>
							<h3 className=''>{c.duration}</h3>
							{c.achievements && (
								<ReactMarkdown className='mt-2 md'>
									{c.achievements}
								</ReactMarkdown>
							)}
						</div>
					))}
				</div>
				<h1 className='mb-4 text-5xl font-semibold text-center md:text-6xl'>
					Education
				</h1>
				<div className='flex flex-col items-center my-4'>
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
							{i.description && (
								<ReactMarkdown className='mt-2 md'>
									{i.description}
								</ReactMarkdown>
							)}
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: GET_EDUCATION_PAGE_PROPS,
		variables: {
			educationId: 'ckrxc4bpsc6th0d56wsbjt696',
			employmentId: 'cks5gxjigb1q90b5854xkas8p',
		},
	});

	return {
		props: {
			institutes: data.educationDetail.educationInstitutes,
			companies: data.companyDetail.companies,
		},
	};
}
