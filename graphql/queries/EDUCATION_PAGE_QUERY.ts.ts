import { gql } from 'graphql-tag';

const GET_EDUCATION_PAGE_PROPS = gql`
	query EducationPage {
		allEducationPage {
			_id
			scores
			location
			achievements
			__typename
			course
			institute
			affiliation
			period
		}
		allExperiencePage {
			_id
			responsibilitiesRaw
			__typename
			company
			role
			type
			period
		}
	}
`;

export default GET_EDUCATION_PAGE_PROPS;
