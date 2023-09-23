/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from 'sanity/cli';

const projectId = 'cc2avtfw';
const dataset = 'production';

export default defineCliConfig({
	graphql: [
		{
			playground: true,
			tag: 'default',
		},
	],
	api: { projectId, dataset },
});
