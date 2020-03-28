import mongoose from 'mongoose';

const TrackSchema = new mongoose.Schema(
  {
    fromCurrency: {
      type: String,
      required: true
    },
    toCurrency: {
      type: String,
      required: true
    },
    fromPrice: {
      type: Number,
      required: true
    },
    toPrice: {
      type: Number,
      required: true
    },
    until: {
      type: Date,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  {
    collection: 'tracks',
    timestamps: true
  }
);

const TrackModel = mongoose.model('Track', TrackSchema);

export default TrackModel;
