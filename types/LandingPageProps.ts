import SocialLinks from './SocialLinkProps';

export interface LandingProps extends SocialLinks {
	name: string;
	roles: string[];
}

export interface AboutProps {
	about: any;
	image: string;
}

export default interface LandingPageProps extends LandingProps, AboutProps {}
