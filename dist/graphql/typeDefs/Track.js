"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const TrackType = new graphql_1.GraphQLObjectType({
    name: 'Track',
    fields: {
        id: { type: graphql_1.GraphQLID },
        fromCurrency: { type: graphql_1.GraphQLString },
        toCurrency: { type: graphql_1.GraphQLString },
        fromPrice: { type: graphql_1.GraphQLFloat },
        toPrice: { type: graphql_1.GraphQLFloat },
        until: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString }
    }
});
exports.default = TrackType;
//# sourceMappingURL=Track.js.map