"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patients = exports.updatedTreantmentPatient01 = exports.updatedNamePatient01 = exports.updateTreantment = exports.updateName = exports.patient02 = exports.patient01 = void 0;
exports.patient01 = {
    id: '6319f46a8c83b9f8d6bbc047',
    name: 'Patient01 test',
    totalCostDentalTreatment: 1000,
    numberInstallment: 2,
    installmentAmount: 500,
    paymentMonths: ['01-10-2022', '01-11-2022'],
};
exports.patient02 = {
    id: '6319f46a8c83b9f8d6bbc048',
    name: 'Patient02 test',
    totalCostDentalTreatment: 1000,
    numberInstallment: 2,
    installmentAmount: 500,
    paymentMonths: ['01-10-2022', '01-11-2022'],
};
exports.updateName = {
    name: 'Patient 01 test',
};
exports.updateTreantment = {
    totalCostDentalTreatment: 500,
    numberInstallment: 2,
};
exports.updatedNamePatient01 = {
    id: '6319f46a8c83b9f8d6bbc047',
    name: 'Patient 01 test',
    totalCostDentalTreatment: 1000,
    numberInstallment: 2,
    installmentAmount: 500,
    paymentMonths: ['01-10-2022', '01-11-2022'],
};
exports.updatedTreantmentPatient01 = {
    id: '6319f46a8c83b9f8d6bbc047',
    name: 'Patient 01 test',
    totalCostDentalTreatment: 500,
    numberInstallment: 2,
    installmentAmount: 250,
    paymentMonths: ['01-10-2022', '01-11-2022'],
};
exports.patients = [Object.assign({}, exports.patient01), Object.assign({}, exports.patient02)];
