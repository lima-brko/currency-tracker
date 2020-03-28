"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Track_1 = __importDefault(require("./typeDefs/Track"));
const Track_2 = __importDefault(require("../models/Track"));
const Mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createTrack: {
            type: Track_1.default,
            args: {
                fromCurrency: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                toCurrency: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                fromPrice: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat) },
                toPrice: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLFloat) },
                until: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                email: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: (root, args) => {
                const trackModel = new Track_2.default(args);
                return trackModel.save();
            }
        }
    }
});
exports.default = Mutation;
//# sourceMappingURL=Mutation.js.map