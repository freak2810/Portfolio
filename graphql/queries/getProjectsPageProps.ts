import { gql } from 'graphql-request';

const GET_PROJECT_PAGE_PROPS = gql`
	query getProjectDetails($id: ID!) {
		projectsPage(where: { id: $id }) {
			projects {
				id
				name
				githubLink
				deploymentUrl
				technologies {
					name
				}
				description {
					markdown
				}
				cover {
					url
				}
			}
		}
	}
`;

export default GET_PROJECT_PAGE_PROPS;
