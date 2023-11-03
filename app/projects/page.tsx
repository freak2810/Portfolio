import sdk from '../../graphql/client';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import ProjectLinks from '../../components/ProjectLinks';

const Page = async () => {
	const data = await getData();

	return (
		<section className='container px-4 mx-auto mt-20 lg:max-w-7xl'>
			<h1 className='mb-4 text-5xl font-semibold text-center md:text-6xl'>
				Projects
			</h1>
			<main>
				{data.map(p => (
					<a
						target='blank'
						key={p._id}
						href={p.githubLink || p.deploymentLink || ''}
					>
						<article className='my-4 md:my-8 p-2 pl-4 transition-all duration-300 border-2 border-l-2 rounded-lg hover:shadow-xl border-[transparent] hover:border-text'>
							<div className='my-1'>
								{p.cover?.asset?.url ? (
									<div className='relative w-full h-80'>
										<Image
											className='object-cover'
											fill
											src={p.cover.asset.url}
											alt={p.name || ''}
										/>
									</div>
								) : null}
							</div>
							<a
								href={p.githubLink || ''}
								target='blank'
								className='text-2xl font-medium transition-all duration-300 hover:text-splash'
							>
								{p.name}
							</a>
							<div className='flex flex-wrap my-2'>
								{p.stack?.map(s => (
									<p
										key={s}
										className='px-2 mb-2 mr-2 transition-shadow duration-300 border cursor-pointer rounded-xl hover:shadow-inner'
									>
										{s}
									</p>
								))}
							</div>
							{p.descriptionRaw && (
								<div className='md'>
									<PortableText value={p.descriptionRaw} />
								</div>
							)}
							<ProjectLinks
								deploymentLink={p.deploymentLink}
								githubLink={p.githubLink}
							/>
						</article>
					</a>
				))}
			</main>
		</section>
	);
};

export default Page;

const getData = async () => {
	const data = await sdk.ProjectsPage();

	return data.allProjectsPage;
};
