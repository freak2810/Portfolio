import { gql } from 'graphql-request';

const TECHNOLOGY_PAGE_QUERY = gql`
	query TechnologyPage {
		allTechnologyPage {
			id
			type
			technologies
		}
	}
`;

export default TECHNOLOGY_PAGE_QUERY;
