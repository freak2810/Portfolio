import gql from 'graphql-tag';

const GET_LANDING_PAGE_PROPS = gql`
	query getLandingPageProps($id: ID!) {
		landingPage(where: { id: $id }) {
			name
			roles
		}
	}
`;

export default GET_LANDING_PAGE_PROPS;
