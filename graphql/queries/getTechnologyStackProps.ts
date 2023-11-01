import { gql } from 'graphql-request';

const GET_TECHNOLOGY_STACK_PROPS = gql`
	query getTechnologyStackProps($id: ID!) {
		technologyPage(where: { id: $id }) {
			stacks {
				name
				technologies {
					name
				}
			}
		}
	}
`;

export default GET_TECHNOLOGY_STACK_PROPS;
