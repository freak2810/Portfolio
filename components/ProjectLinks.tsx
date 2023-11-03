'use client';

import { Code } from '@styled-icons/fa-solid';
import { Web } from '@styled-icons/material-twotone';

const ProjectLinks = (props: {
	githubLink: string | null | undefined;
	deploymentLink: string | null | undefined;
}) => {
	return (
		<div className='flex my-2 '>
			{props.githubLink && (
				<a href={props.githubLink} target='blank' title='Checkout the code'>
					<Code
						className='mr-4 transition-all duration-300 hover:text-splash'
						height={32}
						width={32}
					/>
				</a>
			)}

			{props.deploymentLink && (
				<a
					href={props.deploymentLink}
					target='blank'
					title='Checkout the Deployment'
				>
					<Web
						className='transition-all duration-300 hover:text-splash'
						height={32}
						width={32}
					/>
				</a>
			)}
		</div>
	);
};

export default ProjectLinks;
