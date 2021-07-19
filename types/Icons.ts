import {
	ProgrammingLanguages,
	FrontEnd,
	UILibraries,
	BackEnd,
	Databases,
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
	| Databases;

export default Icon;
