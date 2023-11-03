import { gql } from 'graphql-request';

const PROJECTS_PAGE_QUERY = gql`
	query ProjectsPage {
		allProjectsPage {
			_id
			name
			githubLink
			deploymentLink
			stack
			descriptionRaw
			cover {
				asset {
					url
				}
			}
		}
	}
`;

export default PROJECTS_PAGE_QUERY;
