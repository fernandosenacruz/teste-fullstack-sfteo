import { MockContext, Context, createMockContext } from './context';
import { Request, Response, NextFunction } from 'express';
import {
  createPatient,
  deletedPatient,
  getPatientById,
  getPatients,
  patchPatient,
  updatePacient,
} from '../../controllers/Patient';
import { describe, test, beforeEach, jest, expect } from '@jest/globals';
import {
  patient01,
  patients,
  updatedNamePatient01,
  updatedTreantmentPatient01,
} from '../mocks/patient';
import IPatient, { INewPatient } from '../../interfaces/IPatient';

let mockCtx: MockContext;
let ctx: Context;

describe('Patient Model', () => {
  beforeEach(() => {
    mockCtx = createMockContext();
    ctx = mockCtx as unknown as Context;
  });

  test('should create new patient ', async () => {
    let code = 0;
    let responseObject = {};
    let request = { body: patient01 };
    let next = () => {};
    let response = {
      status: jest.fn().mockImplementation(result => {
        code = result as number;
        return response;
      }),
      json: jest.fn().mockImplementation(result => {
        responseObject = result as INewPatient;
      }),
    } as unknown as Partial<Response>;

    mockCtx.prisma.patient.create.mockResolvedValue(patient01);

    await createPatient(
      request as Request,
      response as unknown as Response,
      next as NextFunction,
      ctx,
    );

    expect(responseObject).toEqual(patient01);
  });

  test('should get all patients ', async () => {
    let code = 0;
    let responseObject = {};
    let request = { query: '10' };
    let next = () => {};
    let response = {
      status: jest.fn().mockImplementation(result => {
        code = result as number;
        return response;
      }),
      json: jest.fn().mockImplementation(result => {
        responseObject = result as IPatient[];
      }),
    } as unknown as Partial<Response>;

    mockCtx.prisma.patient.findMany.mockResolvedValue(patients);

    await getPatients(
      request as unknown as Request,
      response as unknown as Response,
      next as NextFunction,
      ctx,
    );

    expect(responseObject).toEqual(patients);
  });

  test('should get a patient by id ', async () => {
    let code = 0;
    let responseObject = {};
    let request = { params: '6319f46a8c83b9f8d6bbc047' };
    let next = () => {};
    let response = {
      status: jest.fn().mockImplementation(result => {
        code = result as number;
        return response;
      }),
      json: jest.fn().mockImplementation(result => {
        responseObject = result as IPatient;
      }),
    } as unknown as Partial<Response>;

    mockCtx.prisma.patient.findFirst.mockResolvedValue(patient01);

    await getPatientById(
      request as unknown as Request,
      response as unknown as Response,
      next as NextFunction,
      ctx,
    );

    expect(responseObject).toEqual(patient01);
  });

  test('should update the treatment of patient', async () => {
    let code = 0;
    let responseObject = {};
    let request = { body: patient01, params: '6319f46a8c83b9f8d6bbc047' };
    let next = () => {};
    let response = {
      status: jest.fn().mockImplementation(result => {
        code = result as number;
        return response;
      }),
      json: jest.fn().mockImplementation(result => {
        responseObject = result as IPatient;
      }),
    } as unknown as Partial<Response>;

    mockCtx.prisma.patient.update.mockResolvedValue(updatedNamePatient01);

    await updatePacient(
      request as unknown as Request,
      response as unknown as Response,
      next as NextFunction,
      ctx,
    );

    expect(responseObject).toEqual(updatedNamePatient01);
  });

  test('should  update the name of patient', async () => {
    let code = 0;
    let responseObject = {};
    let request = { body: patient01, params: '6319f46a8c83b9f8d6bbc047' };
    let next = () => {};
    let response = {
      status: jest.fn().mockImplementation(result => {
        code = result as number;
        return response;
      }),
      json: jest.fn().mockImplementation(result => {
        responseObject = result as IPatient;
      }),
    } as unknown as Partial<Response>;

    mockCtx.prisma.patient.update.mockResolvedValue(updatedTreantmentPatient01);

    await patchPatient(
      request as unknown as Request,
      response as unknown as Response,
      next as NextFunction,
      ctx,
    );

    expect(responseObject).toEqual(updatedTreantmentPatient01);
  });

  test('should  delete a patient', async () => {
    let code = 0;
    let responseObject = {};
    let request = { params: '6319f46a8c83b9f8d6bbc047' };
    let next = () => {};
    let response = {
      status: jest.fn().mockImplementation(result => {
        code = result as number;
        return response;
      }),
      json: jest.fn().mockImplementation(result => {
        responseObject = result as Object;
      }),
    } as unknown as Partial<Response>;

    mockCtx.prisma.patient.delete.mockResolvedValue(patient01);

    await deletedPatient(
      request as unknown as Request,
      response as unknown as Response,
      next as NextFunction,
      ctx,
    );

    console.log(responseObject);

    expect(code).toEqual(204);
    expect(responseObject).toEqual({
      message: 'Patient deteleted successfully',
    });
  });
});
