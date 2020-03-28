"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_graphql_1 = __importDefault(require("koa-graphql"));
const graphql_1 = require("../graphql");
exports.default = koa_graphql_1.default({
    schema: graphql_1.schema,
    graphiql: true
});
//# sourceMappingURL=graphql.js.map