"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatientModel = exports.patchPatientModel = exports.updatePacientModel = exports.getPatientByIdModel = exports.getPatientsModel = exports.createPatientModel = void 0;
const createPatientModel = async ({ name, totalCostDentalTreatment, numberInstallment, installmentAmount, paymentMonths, }, ctx) => {
    const newPatient = await ctx.prisma.patient.create({
        data: {
            name,
            totalCostDentalTreatment,
            numberInstallment,
            installmentAmount,
            paymentMonths,
        },
    });
    return newPatient;
};
exports.createPatientModel = createPatientModel;
const getPatientsModel = async (ctx, limit) => {
    const hasLimit = limit && { take: +limit };
    const allPatients = await ctx.prisma.patient.findMany(Object.assign({ orderBy: { name: 'asc' } }, hasLimit));
    return allPatients;
};
exports.getPatientsModel = getPatientsModel;
const getPatientByIdModel = async (id, ctx) => {
    const patientById = await ctx.prisma.patient.findFirst({
        where: { id },
    });
    return patientById;
};
exports.getPatientByIdModel = getPatientByIdModel;
const updatePacientModel = async ({ id, totalCostDentalTreatment, numberInstallment, installmentAmount, paymentMonths, }, ctx) => {
    const updatedIntallment = await ctx.prisma.patient.update({
        where: { id },
        data: {
            totalCostDentalTreatment,
            numberInstallment,
            installmentAmount,
            paymentMonths,
        },
    });
    return updatedIntallment;
};
exports.updatePacientModel = updatePacientModel;
const patchPatientModel = async ({ id, name }, ctx) => {
    const pacthNamePatient = await ctx.prisma.patient.update({
        where: { id },
        data: {
            name,
        },
    });
    return pacthNamePatient;
};
exports.patchPatientModel = patchPatientModel;
const deletePatientModel = async (id, ctx) => {
    const deletePatient = await ctx.prisma.patient.delete({
        where: { id },
    });
    return deletePatient;
};
exports.deletePatientModel = deletePatientModel;
