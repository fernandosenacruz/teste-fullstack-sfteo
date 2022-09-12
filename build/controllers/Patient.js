"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletedPatient = exports.patchPatient = exports.updatePacient = exports.getPatientsByDate = exports.getPatientById = exports.getPatients = exports.createPatient = void 0;
const paymentMonthGenerate_1 = __importDefault(require("../helpers/paymentMonthGenerate"));
const installmentAmountGenerate_1 = __importDefault(require("../helpers/installmentAmountGenerate"));
const Patient_1 = require("../services/Patient");
const createPatient = async (req, res, _next, ctx) => {
    const { name, totalCostDentalTreatment, numberInstallment } = req.body;
    const installmentAmount = (0, installmentAmountGenerate_1.default)(totalCostDentalTreatment, numberInstallment);
    const paymentMonths = (0, paymentMonthGenerate_1.default)(numberInstallment);
    const { code, data } = await (0, Patient_1.createPatientService)({
        name,
        totalCostDentalTreatment,
        numberInstallment,
        installmentAmount,
        paymentMonths,
    }, ctx);
    return res.status(code).json(data);
};
exports.createPatient = createPatient;
const getPatients = async (req, res, _next, ctx) => {
    const { limit } = req.query;
    const { code, data } = await (0, Patient_1.getPatientsService)(ctx, limit);
    return res.status(code).json(data);
};
exports.getPatients = getPatients;
const getPatientById = async (req, res, _next, ctx) => {
    const { id } = req.params;
    const { code, data } = await (0, Patient_1.getPatientByIdService)(id, ctx);
    return res.status(code).json(data);
};
exports.getPatientById = getPatientById;
const getPatientsByDate = async (req, res, _next, ctx) => {
    const { selectedMonth } = req.query;
    const { code, data } = await (0, Patient_1.getPatientsByDateService)(selectedMonth, ctx);
    return res.status(code).json(data);
};
exports.getPatientsByDate = getPatientsByDate;
const updatePacient = async (req, res, _next, ctx) => {
    const { id } = req.params;
    const { totalCostDentalTreatment, numberInstallment } = req.body;
    const installmentAmount = (0, installmentAmountGenerate_1.default)(totalCostDentalTreatment, numberInstallment);
    const paymentMonths = (0, paymentMonthGenerate_1.default)(numberInstallment);
    const { code, data } = await (0, Patient_1.updatePacientService)({
        id,
        totalCostDentalTreatment,
        numberInstallment,
        installmentAmount,
        paymentMonths,
    }, ctx);
    return res.status(code).json(data);
};
exports.updatePacient = updatePacient;
const patchPatient = async (req, res, _next, ctx) => {
    const { id } = req.params;
    const { name } = req.body;
    const { code, data } = await (0, Patient_1.patchPatientService)({ id, name }, ctx);
    res.status(code).json(data);
};
exports.patchPatient = patchPatient;
const deletedPatient = async (req, res, _next, ctx) => {
    const { id } = req.params;
    const { code, message } = await (0, Patient_1.deletePatientService)(id, ctx);
    return res.status(code).json({ message });
};
exports.deletedPatient = deletedPatient;
