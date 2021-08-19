export interface TechnologyProps {
	name: string;
}

export interface ProjectProps {
	id: string;
	name: string;
	deploymentUrl?: string;
	githubLink?: string;
	technologies: TechnologyProps[];
	description: {
		markdown: string;
	};
	cover?: {
		url: string;
	};
}

interface ProjectPageProps {
	projects: ProjectProps[];
}

export default ProjectPageProps;
