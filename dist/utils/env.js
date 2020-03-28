"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env' });
exports.ENVIRONMENT = process.env.NODE_ENV;
exports.MONGODB_URI = process.env.MONGODB_URI_LOCAL;
exports.default = {
    ENVIRONMENT: exports.ENVIRONMENT,
    MONGODB_URI: exports.MONGODB_URI,
    PORT: process.env.PORT
};
//# sourceMappingURL=env.js.map