import { gql } from '@apollo/client';

const GET_LANDING_PAGE_PROPS = gql`
	query HomePage($landingPage: ID!) {
		LandingPage(id: $landingPage) {
			_id
			roles
			name
			socialLinks {
				username
				profileLink
				socialProfile
			}
			bioRaw
			profilePicture {
				asset {
					url
				}
			}
		}
	}
`;

export default GET_LANDING_PAGE_PROPS;
