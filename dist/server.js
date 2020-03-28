"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const env_1 = __importDefault(require("./utils/env"));
/**
 * Start Koa server.
 */
const server = app_1.default.listen(env_1.default.PORT, () => {
    console.log('  App is running at http://localhost:%d in %s mode', env_1.default.PORT, env_1.default.ENVIRONMENT);
    console.log('  Press CTRL-C to stop\n');
});
exports.default = server;
//# sourceMappingURL=server.js.map