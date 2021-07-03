import {
	Gmail,
	Github,
	Linkedin,
	Twitter,
	Instagram,
} from '@styled-icons/simple-icons';

interface IconProps {
	type: string;
}

const DIMENSION = 35;

export default function Icon({ type }: IconProps) {
	if (type === 'Gmail ID')
		return <Gmail height={DIMENSION} width={DIMENSION} color='#EA4335' />;
	else if (type === 'GitHub')
		return <Github height={DIMENSION} width={DIMENSION} color='#181717' />;
	else if (type === 'LinkedIn')
		return <Linkedin height={DIMENSION} width={DIMENSION} color='#0A66C2' />;
	else if (type === 'Twitter')
		return <Twitter height={DIMENSION} width={DIMENSION} color='#1DA1F2' />;
	else if (type === 'Instagram')
		return <Instagram height={DIMENSION} width={DIMENSION} color='#E4405F' />;
	else return <div />;
}
