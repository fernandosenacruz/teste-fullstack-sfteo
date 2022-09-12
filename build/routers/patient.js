"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Patient_1 = require("../controllers/Patient");
const patient_1 = require("../middlewares/patient");
const client_1 = __importDefault(require("../client"));
const router = (0, express_1.Router)();
router.get('/patients', (req, res, next) => (0, Patient_1.getPatients)(req, res, next, { prisma: client_1.default }));
router.get('/patients/installment', (req, res, next) => (0, Patient_1.getPatientsByDate)(req, res, next, { prisma: client_1.default }));
router.get('/patient/:id', (req, res, next) => (0, Patient_1.getPatientById)(req, res, next, { prisma: client_1.default }));
router.post('/patient', patient_1.validateCreatePatient, (req, res, next) => (0, Patient_1.createPatient)(req, res, next, { prisma: client_1.default }));
router.put('/patient/:id', patient_1.validateUpdatePatient, (req, res, next) => (0, Patient_1.updatePacient)(req, res, next, { prisma: client_1.default }));
router.patch('/patient/:id', patient_1.validateUpdateNamePatient, (req, res, next) => (0, Patient_1.patchPatient)(req, res, next, { prisma: client_1.default }));
router.delete('/patient/:id', (req, res, next) => (0, Patient_1.deletedPatient)(req, res, next, { prisma: client_1.default }));
exports.default = router;
