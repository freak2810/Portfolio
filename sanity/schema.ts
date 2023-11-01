import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import category from './schemas/category';
import experience from './schemas/experience';
import education from './schemas/education';
import landingPage from './schemas/landing-page';
import socialLink from './schemas/social-links';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blockContent, landingPage, socialLink, education, experience],
};
