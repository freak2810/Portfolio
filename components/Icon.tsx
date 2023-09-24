// @ts-nocheck
import {
	SiGmail,
	SiGithub,
	SiLinkedin,
	SiTwitter,
	SiInstagram,
	SiJavascript,
	SiTypescript,
	SiC,
	SiCplusplus,
	SiPython,
	SiHtml5,
	SiCss3,
	SiSass,
	SiReact,
	SiRedux,
	SiApollographql,
	SiNextdotjs,
	SiExpo,
	SiBootstrap,
	SiMaterialdesign,
	SiTailwindcss,
	SiChakraui,
	SiMysql,
	SiPostgresql,
	SiMongodb,
	SiRedis,
	SiGit,
	SiDocker,
	SiNodedotjs,
	SiExpress,
	SiGraphql,
} from '@icons-pack/react-simple-icons';

import IconType from '../types/Icons';

export interface IconProps {
	name: IconType;
	color?: string;
	size?: number;
}

export default function Icon({ name, color, size }: IconProps) {
	const DIMENSION = size || '2.5rem';

	console.log(name);

	if (name === 'Gmail ID')
		return (
			<SiGmail
				type='gmail'
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#EA4335'}
			/>
		);
	else if (name === 'GitHub')
		return (
			<SiGithub
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#181717'}
			/>
		);
	else if (name === 'LinkedIn')
		return (
			<SiLinkedin
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#0A66C2'}
			/>
		);
	else if (name === 'Twitter')
		return (
			<SiTwitter
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#1DA1F2'}
			/>
		);
	else if (name === 'Instagram')
		return (
			<SiInstagram
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
			<SiJavascript
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#F7DF1E'}
			/>
		);
	else if (name === 'TypeScript')
		return (
			<SiTypescript
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#3178C6'}
			/>
		);
	else if (name === 'C')
		return (
			<SiC height={DIMENSION} width={DIMENSION} color={color || '#A8B9CC'} />
		);
	else if (name === 'C++')
		return (
			<SiCplusplus
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#00599C'}
			/>
		);
	else if (name === 'Python')
		return (
			<SiPython
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#00599C'}
			/>
		);
	//
	// Front End
	//
	else if (name === 'HTML')
		return (
			<SiHtml5
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#E34F26'}
			/>
		);
	else if (name === 'CSS')
		return (
			<SiCss3 height={DIMENSION} width={DIMENSION} color={color || '#1572B6'} />
		);
	else if (name === 'SASS')
		return (
			<SiSass height={DIMENSION} width={DIMENSION} color={color || '#CC6699'} />
		);
	else if (name === 'React')
		return (
			<SiReact
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#61DAFB'}
			/>
		);
	else if (name === 'Redux')
		return (
			<SiRedux
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#764ABC'}
			/>
		);
	else if (name === 'Apollo Client')
		return (
			<SiApollographql
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#311C87'}
			/>
		);
	else if (name === 'NextJS')
		return (
			<SiNextdotjs
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#000000'}
			/>
		);
	else if (name === 'React Native')
		return (
			<SiReact
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#61DAFB'}
			/>
		);
	else if (name === 'Expo')
		return (
			<SiExpo height={DIMENSION} width={DIMENSION} color={color || '#000020'} />
		);
	//
	// UI Libraries
	//
	else if (name === 'Bootstrap')
		return (
			<SiBootstrap
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#7952B3'}
			/>
		);
	else if (name === 'Material UI')
		return (
			<SiMaterialdesign
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#0081CB'}
			/>
		);
	else if (name === 'Tailwind CSS')
		return (
			<SiTailwindcss
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#38B2AC'}
			/>
		);
	else if (name === 'Chakra UI')
		return (
			<SiChakraui
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
			<SiNodedotjs
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#339933'}
			/>
		);
	else if (name === 'Express')
		return (
			<SiExpress
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#000000'}
			/>
		);
	else if (name === 'GraphQL')
		return (
			<SiGraphql
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
			<SiMysql
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#4479A1'}
			/>
		);
	else if (name === 'PostgreSQL')
		return (
			<SiPostgresql
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#4169E1'}
			/>
		);
	else if (name === 'MongoDB')
		return (
			<SiMongodb
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#47A248'}
			/>
		);
	else if (name === 'Redis')
		return (
			<SiRedis
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#DC382D'}
			/>
		);
	//
	// Misc
	//
	else if (name === 'Git')
		return (
			<SiGit height={DIMENSION} width={DIMENSION} color={color || '#F05032'} />
		);
	else if (name === 'Docker')
		return (
			<SiDocker
				height={DIMENSION}
				width={DIMENSION}
				color={color || '#2496ED'}
			/>
		);
	else return <div />;
}
