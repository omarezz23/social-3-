"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_js_1 = __importDefault(require("./modules/auth/auth.js"));
const error_middleware_js_1 = require("./middleware/error.middleware.js");
const config_js_1 = require("./config/config.js");
const db_js_1 = require("./database/db.js");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, db_js_1.connectDB)(app, config_js_1.PORT);
app.all('/', async (req, res, next) => {
    return res.send('Hello, World!');
});
app.use('/auth', auth_js_1.default);
app.use(error_middleware_js_1.globalErrorHandling);
//# sourceMappingURL=index.js.map