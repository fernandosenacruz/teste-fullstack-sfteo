"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const errorHandler = (err, _req, res, next) => {
    console.log(err);
    if (err.isJoi) {
        return res.status(http_status_codes_1.default.BAD_REQUEST).json({
            statusCode: http_status_codes_1.default.BAD_REQUEST,
            message: err.details[0].message,
        });
    }
    if (err.statusCode === http_status_codes_1.default.INTERNAL_SERVER_ERROR)
        return res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).json({
            statusCode: http_status_codes_1.default.INTERNAL_SERVER_ERROR,
            message: err.message,
        });
    return next();
};
exports.errorHandler = errorHandler;
