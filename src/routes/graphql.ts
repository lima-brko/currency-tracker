import graphqlHTTP from 'koa-graphql';
import {schema} from '../graphql';

export default graphqlHTTP({
  schema,
  graphiql: true
});
