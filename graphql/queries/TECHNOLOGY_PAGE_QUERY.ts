import { gql } from 'graphql-request';

const TECHNOLOGY_PAGE_QUERY = gql`
	query TechnologyPage {
		allTechnologyPage {
			_id
			type
			technologies
		}
	}
`;

export default TECHNOLOGY_PAGE_QUERY;
