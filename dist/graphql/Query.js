"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Track_1 = __importDefault(require("./typeDefs/Track"));
const Track_2 = __importDefault(require("../models/Track"));
const Query = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
        tracks: {
            type: graphql_1.GraphQLList(Track_1.default),
            resolve: () => Track_2.default.find().exec()
        },
        track: {
            type: Track_1.default,
            args: {
                id: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLID) }
            },
            resolve: (root, args) => Track_2.default.findById(args.id).exec()
        }
    }
});
exports.default = Query;
//# sourceMappingURL=Query.js.map