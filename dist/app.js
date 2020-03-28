"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = __importDefault(require("./utils/env"));
mongoose_1.default.connect(env_1.default.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const routes_1 = __importDefault(require("./routes"));
const app = new koa_1.default();
app.use(routes_1.default.routes());
app.use(routes_1.default.allowedMethods());
exports.default = app;
//# sourceMappingURL=app.js.map