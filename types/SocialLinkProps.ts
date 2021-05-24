import Asset from './AssetProps';

export interface SocialLinkProps {
	username: string;
	profileLink: string | null;
	socialProfile: string;
	socialIcon: Asset;
}

export default interface SocialLinksProps {
	links: Array<SocialLinkProps>;
}
