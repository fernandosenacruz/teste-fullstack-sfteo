"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const patient_1 = __importDefault(require("./routers/patient"));
const error_1 = require("./middlewares/error");
const server = (0, express_1.default)();
server.use(express_1.default.json(), (0, cors_1.default)(), patient_1.default, error_1.errorHandler);
exports.default = server;
