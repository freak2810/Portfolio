import { GraphQLClient } from 'graphql-request';
import { getSdk } from './__generated__';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_SANITY_CMS || '');

const sdk = getSdk(client);

export default sdk;
