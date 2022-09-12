"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatientService = exports.patchPatientService = exports.updatePacientService = exports.getPatientsByDateService = exports.getPatientByIdService = exports.getPatientsService = exports.createPatientService = void 0;
const http_status_codes_1 = require("http-status-codes");
const Patient_1 = require("../models/Patient");
const createPatientService = async (patient, ctx) => {
    const newPatient = await (0, Patient_1.createPatientModel)(patient, ctx);
    return { code: http_status_codes_1.StatusCodes.CREATED, data: newPatient };
};
exports.createPatientService = createPatientService;
const getPatientsService = async (ctx, limit) => {
    const allPatients = await (0, Patient_1.getPatientsModel)(ctx, limit);
    return { code: http_status_codes_1.StatusCodes.OK, data: allPatients };
};
exports.getPatientsService = getPatientsService;
const getPatientByIdService = async (id, ctx) => {
    const patient = await (0, Patient_1.getPatientByIdModel)(id, ctx);
    return { code: http_status_codes_1.StatusCodes.OK, data: patient };
};
exports.getPatientByIdService = getPatientByIdService;
const getPatientsByDateService = async (selectedDate, ctx) => {
    const getAllPatients = await (0, Patient_1.getPatientsModel)(ctx);
    const patientsBySelectedMonth = [];
    const splitedDate = selectedDate.split('-');
    const selectedMonth = `${splitedDate[1]}-${splitedDate[2]}`;
    getAllPatients.forEach(patient => {
        const selectedPatients = patient.paymentMonths.some(month => month.includes(selectedMonth));
        if (selectedPatients)
            patientsBySelectedMonth.push(patient);
    });
    return { code: http_status_codes_1.StatusCodes.OK, data: patientsBySelectedMonth };
};
exports.getPatientsByDateService = getPatientsByDateService;
const updatePacientService = async ({ id, totalCostDentalTreatment, numberInstallment, installmentAmount, paymentMonths, }, ctx) => {
    const updatedInstallment = await (0, Patient_1.updatePacientModel)({
        id,
        totalCostDentalTreatment,
        numberInstallment,
        installmentAmount,
        paymentMonths,
    }, ctx);
    return { code: http_status_codes_1.StatusCodes.OK, data: updatedInstallment };
};
exports.updatePacientService = updatePacientService;
const patchPatientService = async ({ id, name }, ctx) => {
    const pacthName = await (0, Patient_1.patchPatientModel)({ id, name }, ctx);
    return { code: http_status_codes_1.StatusCodes.OK, data: pacthName };
};
exports.patchPatientService = patchPatientService;
const deletePatientService = async (id, ctx) => {
    await (0, Patient_1.deletePatientModel)(id, ctx);
    return {
        code: http_status_codes_1.StatusCodes.NO_CONTENT,
        message: 'Patient deteleted successfully',
    };
};
exports.deletePatientService = deletePatientService;
