"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNamePatientSchema = exports.updatePatientSchema = exports.createPatientSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createPatientSchema = joi_1.default.object({
    name: joi_1.default.string().min(2).required(),
    totalCostDentalTreatment: joi_1.default.number().min(100).required(),
    numberInstallment: joi_1.default.number().greater(1).required(),
});
exports.updatePatientSchema = joi_1.default.object({
    totalCostDentalTreatment: joi_1.default.number().min(100).required(),
    numberInstallment: joi_1.default.number().greater(1).required(),
});
exports.updateNamePatientSchema = joi_1.default.object({
    name: joi_1.default.string().min(2).required(),
});
