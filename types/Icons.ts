import {
	ProgrammingLanguages,
	FrontEnd,
	UILibraries,
	BackEnd,
	Databases,
	DevOps,
} from './TechnologyPageProps';

export type SocialIcon =
	| 'Gmail ID'
	| 'GitHub'
	| 'LinkedIn'
	| 'Twitter'
	| 'Instagram';

type Icon =
	| SocialIcon
	| ProgrammingLanguages
	| FrontEnd
	| UILibraries
	| BackEnd
	| Databases
	| DevOps;

export default Icon;
