import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat
} from 'graphql';

const TrackType = new GraphQLObjectType({
  name: 'Track',
  fields: {
    id: {type: GraphQLID},
    fromCurrency: {type: GraphQLString},
    toCurrency: {type: GraphQLString},
    fromPrice: {type: GraphQLFloat},
    toPrice: {type: GraphQLFloat},
    until: {type: GraphQLString},
    email: {type: GraphQLString}
  }
});

export default TrackType;
