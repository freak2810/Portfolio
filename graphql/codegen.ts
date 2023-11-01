import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema:
		'https://cc2avtfw.api.sanity.io/v2023-08-01/graphql/production/default',
	documents: ['graphql/queries/*.ts'],
	generates: {
		'graphql/__generated__/index.ts': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-graphql-request',
			],
			config: {},
		},
	},
};
export default config;
