"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TrackSchema = new mongoose_1.default.Schema({
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
}, {
    collection: 'tracks',
    timestamps: true
});
const TrackModel = mongoose_1.default.model('Track', TrackSchema);
exports.default = TrackModel;
//# sourceMappingURL=Track.js.map