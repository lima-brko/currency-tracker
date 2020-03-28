import graphqlHTTP from 'koa-graphql';
import {schema} from '../graphql';
import env from '../utils/env';

export default graphqlHTTP({
  schema,
  graphiql: !env.isProd()
});
