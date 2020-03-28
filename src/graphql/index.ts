import {GraphQLSchema} from 'graphql';

import query from './Query';
import mutation from './Mutation';

export const schema = new GraphQLSchema({
  query,
  mutation
});
