import React from 'react';
import ReactMarkdown from 'react-markdown';
import client from '../apollo/client';
import GET_PROJECT_PAGE_PROPS from '../apollo/queries/getProjectsPageProps';
import SEO from '../components/SEO';
import ProjectPageProps from '../types/ProjectPageProps';
import { Code } from '@styled-icons/fa-solid';
import { Web } from '@styled-icons/material-twotone';

export default function Projects({ projects }: ProjectPageProps) {
	return (
		<>
			<SEO title={`Aditya's Portfolio - Projects`} />
			<section className='container px-4 mx-auto mt-20 lg:max-w-7xl'>
				<h1 className='mb-4 text-5xl font-semibold text-center md:text-6xl'>
					Technologies
				</h1>
				<main>
					{projects.map(p => (
						<article
							key={p.id}
							className='my-4 md:my-8 p-2 pl-4 transition-all duration-300 border-2 border-l-2 rounded-lg hover:shadow-xl border-[transparent] hover:border-text shadow-[#00ff00]'>
							<a
								href={p.githubLink}
								target='blank'
								className='text-2xl font-medium transition-all duration-300 hover:text-splash'>
								{p.name}
							</a>
							<div className='flex flex-wrap my-2'>
								{p.technologies.map(t => (
									<p
										key={t.name}
										className='px-2 mb-2 mr-2 transition-shadow duration-300 border cursor-pointer rounded-xl hover:shadow-inner'>
										{t.name}
									</p>
								))}
							</div>
							{p.description && (
								<ReactMarkdown className='md'>
									{p.description.markdown}
								</ReactMarkdown>
							)}
							<div className='flex my-2 '>
								{p.githubLink && (
									<a
										href={p.githubLink}
										target='blank'
										title='Checkout the code'>
										<Code
											className='mr-4 transition-all duration-300 hover:text-splash'
											height={32}
											width={32}
										/>
									</a>
								)}

								{p.deploymentUrl && (
									<a
										href={p.deploymentUrl}
										target='blank'
										title='Checkout the Deployment'>
										<Web
											className='transition-all duration-300 hover:text-splash'
											height={32}
											width={32}
										/>
									</a>
								)}
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
		query: GET_PROJECT_PAGE_PROPS,
	});

	return {
		props: {
			projects: data.projects,
		},
	};
}
