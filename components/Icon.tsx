import {
	Gmail,
	Github,
	Linkedin,
	Twitter,
	Instagram,
} from 'styled-icons/simple-icons';
import styled from 'styled-components';
import IconType from '../types/Icons';
import {
	Javascript,
	Typescript,
	C,
	Cplusplus,
	Python,
} from 'styled-icons/simple-icons';

import {
	Html5,
	Css3,
	ReactLogo,
	Redux,
	Sass,
	Apollographql,
	Nextdotjs,
	Expo,
} from 'styled-icons/simple-icons';

import {
	Bootstrap,
	Tailwindcss,
	Chakraui,
	Materialdesign,
} from 'styled-icons/simple-icons';

import { Nodedotjs, Express, Graphql } from 'styled-icons/simple-icons';

import { Mysql, Postgresql, Mongodb, Redis } from 'styled-icons/simple-icons';

import { Git, Docker } from 'styled-icons/simple-icons';

export interface IconProps {
	name: IconType;
	color?: string;
	size?: number;
}

export default function Icon({ name, color, size }: IconProps) {
	const DIMENSION = size || '2.5rem';

	if (name === 'Gmail ID')
		return styled(Gmail)`
			color: ${color || '#EA4335'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'GitHub')
		return styled(Github)`
			color: ${color || '#181717'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'LinkedIn')
		return styled(Linkedin)`
			color: ${color || '#0077B5'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'Twitter')
		return styled(Twitter)`
			color: ${color || '#1DA1F2'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'Instagram')
		return styled(Instagram)`
			color: ${color || '#E4405F'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	//
	// Programming Languages
	//
	else if (name === 'JavaScript')
		return styled(Javascript)`
			color: ${color || '#F7DF1E'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'TypeScript')
		return styled(Typescript)`
			color: ${color || '#007ACC'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'C')
		return styled(C)`
			color: ${color || '#A8B9CC'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'C++')
		return styled(Cplusplus)`
			color: ${color || '#00599C'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'Python')
		return styled(Python)`
			color: ${color || '#3776AB'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	//
	// Front End
	//
	else if (name === 'HTML')
		return styled(Html5)`
			color: ${color || '#E34F26'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'CSS')
		return styled(Css3)`
			color: ${color || '#1572B6'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'SASS')
		return styled(Sass)`
			color: ${color || '#CC6699'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'React')
		return styled(ReactLogo)`
			color: ${color || '#61DAFB'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'Redux')
		return styled(Redux)`
			color: ${color || '#764ABC'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'Apollo Client')
		return styled(Apollographql)`
			color: ${color || '#311C87'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'NextJS')
		return styled(Nextdotjs)`
			color: ${color || '#000000'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'React Native')
		return styled(ReactLogo)`
			color: ${color || '#61DAFB'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'Expo')
		return styled(Expo)`
			color: ${color || '#000020'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	//
	// UI Libraries
	//
	else if (name === 'Bootstrap')
		return styled(Bootstrap)`
			color: ${color || '#7952B3'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'Material UI')
		return styled(Materialdesign)`
			color: ${color || '#0081CB'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'Tailwind CSS')
		return styled(Tailwindcss)`
			color: ${color || '#38B2AC'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'Chakra UI')
		return styled(Chakraui)`
			color: ${color || '#319795'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	//
	// Backend
	//
	else if (name === 'NodeJS')
		return styled(Nodedotjs)`
			color: ${color || '#339933'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'Express')
		return styled(Express)`
			color: ${color || '#000000'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'GraphQL')
		return styled(Graphql)`
			color: ${color || '#E10098'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	//
	// Databases
	//
	else if (name === 'MySQL')
		return styled(Mysql)`
			color: ${color || '#4479A1'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'PostgreSQL')
		return styled(Postgresql)`
			color: ${color || '#336791'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'MongoDB')
		return styled(Mongodb)`
			color: ${color || '#47A248'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'Redis')
		return styled(Redis)`
			color: ${color || '#DC382D'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	//
	// Misc
	//
	else if (name === 'Git')
		return styled(Git)`
			color: ${color || '#F05032'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else if (name === 'Docker')
		return styled(Docker)`
			color: ${color || '#2496ED'};
			height: ${DIMENSION};
			width: ${DIMENSION};
		`;
	else return <div />;
}
