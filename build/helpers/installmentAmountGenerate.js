"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const installmentAmountGenerate = (totalCostDentalTreatment, numberInstallment) => {
    return Math.floor(totalCostDentalTreatment / numberInstallment);
};
exports.default = installmentAmountGenerate;
