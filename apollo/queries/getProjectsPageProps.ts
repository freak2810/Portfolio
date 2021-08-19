import gql from 'graphql-tag';

const GET_PROJECT_PAGE_PROPS = gql`
	query getProjectDetails {
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
`;

export default GET_PROJECT_PAGE_PROPS;
