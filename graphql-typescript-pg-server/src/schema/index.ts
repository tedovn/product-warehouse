import { makeExecutableSchema } from 'graphql-tools';
import schema from './graphql/schema.gql';
import { calculations, product, warehouse, warehouseHistory } from './resolvers';

const resolvers = [calculations, product, warehouse, warehouseHistory];

export default makeExecutableSchema({ typeDefs: schema, resolvers: resolvers as any });