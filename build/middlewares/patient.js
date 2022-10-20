"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateNamePatient = exports.validateUpdatePatient = exports.validateCreatePatient = void 0;
const createPatient_1 = require("../schemas/createPatient");
const validateCreatePatient = async (req, _res, next) => {
    await createPatient_1.createPatientSchema.validateAsync(req.body);
    return next();
};
exports.validateCreatePatient = validateCreatePatient;
const validateUpdatePatient = async (req, _res, next) => {
    await createPatient_1.updatePatientSchema.validateAsync(req.body);
    return next();
};
exports.validateUpdatePatient = validateUpdatePatient;
const validateUpdateNamePatient = async (req, _res, next) => {
    await createPatient_1.updateNamePatientSchema.validateAsync(req.body);
    return next();
};
exports.validateUpdateNamePatient = validateUpdateNamePatient;
