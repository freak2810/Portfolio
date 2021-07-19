import {
	Gmail,
	Github,
	Linkedin,
	Twitter,
	Instagram,
} from '@styled-icons/simple-icons';

import IconType from '../types/Icons';
import {
	Javascript,
	Typescript,
	C,
	Cplusplus,
	Python,
} from '@styled-icons/simple-icons';

import {
	Html5,
	Css3,
	ReactLogo,
	Redux,
	Sass,
	Apollographql,
	Nextdotjs,
	Expo,
} from '@styled-icons/simple-icons';

import {
	Bootstrap,
	Tailwindcss,
	Chakraui,
	Materialui,
} from '@styled-icons/simple-icons';

import { Nodedotjs, Express, Graphql } from '@styled-icons/simple-icons';
import { Mysql, Postgresql, Mongodb, Redis } from '@styled-icons/simple-icons';

export interface IconProps {
	name: IconType;
	color?: string;
	size?: number;
}

const DIMENSION = 35;

export default function Icon({ name, color, size }: IconProps) {
	const DIMENSION = size || 35;

	if (name === 'Gmail ID')
		return (
			<Gmail height={DIMENSION} width={DIMENSION} color={color || '#EA4335'} />
		);
	else if (name === 'GitHub')
		return (
			<Github height={DIMENSION} width={DIMENSION} color={color || '#181717'} />
		);
	else if (name === 'LinkedIn')
		return (
			<Linkedin
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#0A66C2'}
			/>
		);
	else if (name === 'Twitter')
		return (
			<Twitter
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#1DA1F2'}
			/>
		);
	else if (name === 'Instagram')
		return (
			<Instagram
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#E4405F'}
			/>
		);
	//
	// Programming Languages
	//
	else if (name === 'JavaScript')
		return (
			<Javascript
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#F7DF1E'}
			/>
		);
	else if (name === 'TypeScript')
		return (
			<Typescript
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#3178C6'}
			/>
		);
	else if (name === 'C')
		return (
			<C height={DIMENSION} width={DIMENSION} color={color || '#A8B9CC'} />
		);
	else if (name === 'C++')
		return (
			<Cplusplus
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#00599C'}
			/>
		);
	else if (name === 'Python')
		return (
			<Python height={DIMENSION} width={DIMENSION} color={color || '#00599C'} />
		);
	//
	// Front End
	//
	else if (name === 'HTML')
		return (
			<Html5 height={DIMENSION} width={DIMENSION} color={color || '#E34F26'} />
		);
	else if (name === 'CSS')
		return (
			<Css3 height={DIMENSION} width={DIMENSION} color={color || '#1572B6'} />
		);
	else if (name === 'SASS')
		return (
			<Sass height={DIMENSION} width={DIMENSION} color={color || '#CC6699'} />
		);
	else if (name === 'React')
		return (
			<ReactLogo
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#61DAFB'}
			/>
		);
	else if (name === 'Redux')
		return (
			<Redux height={DIMENSION} width={DIMENSION} color={color || '#764ABC'} />
		);
	else if (name === 'Apollo Client')
		return (
			<Apollographql
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#311C87'}
			/>
		);
	else if (name === 'NextJS')
		return (
			<Nextdotjs
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#000000'}
			/>
		);
	else if (name === 'React Native')
		return (
			<ReactLogo
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#61DAFB'}
			/>
		);
	else if (name === 'Expo')
		return (
			<Expo height={DIMENSION} width={DIMENSION} color={color || '#000020'} />
		);
	//
	// UI Libraries
	//
	else if (name === 'Bootstrap')
		return (
			<Bootstrap
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#7952B3'}
			/>
		);
	else if (name === 'Material UI')
		return (
			<Materialui
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#0081CB'}
			/>
		);
	else if (name === 'Tailwind CSS')
		return (
			<Tailwindcss
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#38B2AC'}
			/>
		);
	else if (name === 'Chakra UI')
		return (
			<Chakraui
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#319795'}
			/>
		);
	//
	// Backend
	//
	else if (name === 'NodeJS')
		return (
			<Nodedotjs
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#339933'}
			/>
		);
	else if (name === 'Express')
		return (
			<Express
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#000000'}
			/>
		);
	else if (name === 'GraphQL')
		return (
			<Graphql
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#E434AA'}
			/>
		);
	//
	// Databases
	//
	else if (name === 'MySQL')
		return (
			<Mysql height={DIMENSION} width={DIMENSION} color={color || '#4479A1'} />
		);
	else if (name === 'PostgreSQL')
		return (
			<Postgresql
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#4169E1'}
			/>
		);
	else if (name === 'MongoDB')
		return (
			<Mongodb
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#47A248'}
			/>
		);
	else if (name === 'Redis')
		return (
			<Redis height={DIMENSION} width={DIMENSION} color={color || '#DC382D'} />
		);
	else return <div />;
}
