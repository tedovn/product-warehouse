import { makeExecutableSchema } from 'graphql-tools';
import schema from './graphql/schema.gql';
import { user, pet, calculations } from './resolvers';

const resolvers = [user, pet, calculations];

export default makeExecutableSchema({ typeDefs: schema, resolvers: resolvers as any });