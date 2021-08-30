import SocialLinks from './SocialLinkProps';

export interface LandingProps extends SocialLinks {
	name: string;
	roles: string[];
}

export interface AboutProps {
	about: string;
	image: string;
}

export default interface LandingPageProps extends LandingProps, AboutProps {}
