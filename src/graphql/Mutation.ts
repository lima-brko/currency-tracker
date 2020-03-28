import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat
} from 'graphql';

import TrackType from './typeDefs/Track';
import TrackModel from '../models/Track';
import mongoose from 'mongoose';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createTrack: {
      type: TrackType,
      args: {
        fromCurrency: {type: GraphQLNonNull(GraphQLString)},
        toCurrency: {type: GraphQLNonNull(GraphQLString)},
        fromPrice: {type: GraphQLNonNull(GraphQLFloat)},
        toPrice: {type: GraphQLNonNull(GraphQLFloat)},
        until: {type: GraphQLNonNull(GraphQLString)},
        email: {type: GraphQLNonNull(GraphQLString)}
      },
      resolve: (root, args): Promise<mongoose.Document> => {
        const trackModel = new TrackModel(args);
        return trackModel.save();
      }
    }
  }
});

export default Mutation;
