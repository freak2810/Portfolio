import gql from 'graphql-tag';

const GET_EDUCATION_PAGE_PROPS = gql`
	query getEducationDetails($educationId: ID!, $employmentId: ID!) {
		companyDetail(where: { id: $employmentId }) {
			companies {
				id
				role
				name
				duration
				jobType
				achievements
			}
		}

		educationDetail(where: { id: $educationId }) {
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
