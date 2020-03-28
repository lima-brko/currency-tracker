import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';
import mongoose from 'mongoose';

import TrackType from './typeDefs/Track';
import TrackModel from '../models/Track';

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    tracks: {
      type: GraphQLList(TrackType),
      resolve: (): Promise<mongoose.Document[]> => TrackModel.find().exec()
    },
    track: {
      type: TrackType,
      args: {
        id: {type: GraphQLNonNull(GraphQLID)}
      },
      resolve: (root, args): Promise<mongoose.Document> => TrackModel.findById(args.id).exec()
    }
  }
});

export default Query;
