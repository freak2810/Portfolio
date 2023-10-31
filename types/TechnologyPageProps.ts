export type ProgrammingLanguages =
	| 'JavaScript'
	| 'TypeScript'
	| 'C'
	| 'C++'
	| 'Python';

export type FrontEnd =
	| 'HTML'
	| 'CSS'
	| 'SASS'
	| 'SCSS'
	| 'React'
	| 'Redux'
	| 'Apollo Client'
	| 'NextJS'
	| 'React Native'
	| 'Expo';

export type UILibraries =
	| 'Bootstrap'
	| 'Material UI'
	| 'Chakra UI'
	| 'Tailwind CSS';

export type BackEnd = 'NodeJS' | 'Express' | 'GraphQL';

export type Databases = 'MySQL' | 'PostgreSQL' | 'MongoDB' | 'Redis';

export type DevOps = 'Git' | 'GitHub' | 'Docker';

export interface TechnologyProps {
	name:
		| ProgrammingLanguages
		| FrontEnd
		| UILibraries
		| BackEnd
		| Databases
		| DevOps;
}

export interface TechnologyStackProps {
	name: string;
	technologies: TechnologyProps[];
}

export default interface TechnologyPageProps {
	stacks: TechnologyStackProps[];
}
