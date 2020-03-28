import {
  GraphQLID,
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
    },
    updateTrack: {
      type: TrackType,
      args: {
        id: {type: GraphQLNonNull(GraphQLID)},
        fromCurrency: {type: GraphQLNonNull(GraphQLString)},
        toCurrency: {type: GraphQLNonNull(GraphQLString)},
        fromPrice: {type: GraphQLNonNull(GraphQLFloat)},
        toPrice: {type: GraphQLNonNull(GraphQLFloat)},
        until: {type: GraphQLNonNull(GraphQLString)},
        email: {type: GraphQLNonNull(GraphQLString)}
      },
      resolve: (root, args): Promise<mongoose.Document> => TrackModel.findByIdAndUpdate(args.id, args).exec()
    },
    deleteTrack: {
      type: TrackType,
      args: {
        id: {type: GraphQLNonNull(GraphQLID)}
      },
      resolve: (root, args): Promise<mongoose.Document> => TrackModel.findById(args.id).remove().exec()
    }
  }
});

export default Mutation;
