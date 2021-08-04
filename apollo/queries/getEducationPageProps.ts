import gql from 'graphql-tag';

const GET_EDUCATION_PAGE_PROPS = gql`
	query getLandingPageProps($id: ID!) {
		educationDetail(where: { id: $id }) {
			educationInstitutes {
				id
				instituteName
				caption
				courseName
				duration
				location
				marksPercentage
				description
			}
		}
	}
`;

export default GET_EDUCATION_PAGE_PROPS;
