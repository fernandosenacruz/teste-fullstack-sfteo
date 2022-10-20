"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("./context");
const Patient_1 = require("../../controllers/Patient");
const globals_1 = require("@jest/globals");
const patient_1 = require("../mocks/patient");
let mockCtx;
let ctx;
(0, globals_1.describe)('Patient Model', () => {
    (0, globals_1.beforeEach)(() => {
        mockCtx = (0, context_1.createMockContext)();
        ctx = mockCtx;
    });
    (0, globals_1.test)('should create new patient ', async () => {
        let code = 0;
        let responseObject = {};
        let request = { body: patient_1.patient01 };
        let next = () => { };
        let response = {
            status: globals_1.jest.fn().mockImplementation(result => {
                code = result;
                return response;
            }),
            json: globals_1.jest.fn().mockImplementation(result => {
                responseObject = result;
            }),
        };
        mockCtx.prisma.patient.create.mockResolvedValue(patient_1.patient01);
        await (0, Patient_1.createPatient)(request, response, next, ctx);
        (0, globals_1.expect)(responseObject).toEqual(patient_1.patient01);
    });
    (0, globals_1.test)('should get all patients ', async () => {
        let code = 0;
        let responseObject = {};
        let request = { query: '10' };
        let next = () => { };
        let response = {
            status: globals_1.jest.fn().mockImplementation(result => {
                code = result;
                return response;
            }),
            json: globals_1.jest.fn().mockImplementation(result => {
                responseObject = result;
            }),
        };
        mockCtx.prisma.patient.findMany.mockResolvedValue(patient_1.patients);
        await (0, Patient_1.getPatients)(request, response, next, ctx);
        (0, globals_1.expect)(responseObject).toEqual(patient_1.patients);
    });
    (0, globals_1.test)('should get a patient by id ', async () => {
        let code = 0;
        let responseObject = {};
        let request = { params: '6319f46a8c83b9f8d6bbc047' };
        let next = () => { };
        let response = {
            status: globals_1.jest.fn().mockImplementation(result => {
                code = result;
                return response;
            }),
            json: globals_1.jest.fn().mockImplementation(result => {
                responseObject = result;
            }),
        };
        mockCtx.prisma.patient.findFirst.mockResolvedValue(patient_1.patient01);
        await (0, Patient_1.getPatientById)(request, response, next, ctx);
        (0, globals_1.expect)(responseObject).toEqual(patient_1.patient01);
    });
    (0, globals_1.test)('should update the treatment of patient', async () => {
        let code = 0;
        let responseObject = {};
        let request = { body: patient_1.patient01, params: '6319f46a8c83b9f8d6bbc047' };
        let next = () => { };
        let response = {
            status: globals_1.jest.fn().mockImplementation(result => {
                code = result;
                return response;
            }),
            json: globals_1.jest.fn().mockImplementation(result => {
                responseObject = result;
            }),
        };
        mockCtx.prisma.patient.update.mockResolvedValue(patient_1.updatedNamePatient01);
        await (0, Patient_1.updatePacient)(request, response, next, ctx);
        (0, globals_1.expect)(responseObject).toEqual(patient_1.updatedNamePatient01);
    });
    (0, globals_1.test)('should  update the name of patient', async () => {
        let code = 0;
        let responseObject = {};
        let request = { body: patient_1.patient01, params: '6319f46a8c83b9f8d6bbc047' };
        let next = () => { };
        let response = {
            status: globals_1.jest.fn().mockImplementation(result => {
                code = result;
                return response;
            }),
            json: globals_1.jest.fn().mockImplementation(result => {
                responseObject = result;
            }),
        };
        mockCtx.prisma.patient.update.mockResolvedValue(patient_1.updatedTreantmentPatient01);
        await (0, Patient_1.patchPatient)(request, response, next, ctx);
        (0, globals_1.expect)(responseObject).toEqual(patient_1.updatedTreantmentPatient01);
    });
    (0, globals_1.test)('should  delete a patient', async () => {
        let code = 0;
        let responseObject = {};
        let request = { params: '6319f46a8c83b9f8d6bbc047' };
        let next = () => { };
        let response = {
            status: globals_1.jest.fn().mockImplementation(result => {
                code = result;
                return response;
            }),
            json: globals_1.jest.fn().mockImplementation(result => {
                responseObject = result;
            }),
        };
        mockCtx.prisma.patient.delete.mockResolvedValue(patient_1.patient01);
        await (0, Patient_1.deletedPatient)(request, response, next, ctx);
        console.log(responseObject);
        (0, globals_1.expect)(code).toEqual(204);
        (0, globals_1.expect)(responseObject).toEqual({
            message: 'Patient deteleted successfully',
        });
    });
});
