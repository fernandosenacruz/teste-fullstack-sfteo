import { MockContext, Context, createMockContext } from './context';
import { Request, Response, NextFunction } from 'express';
import { createPatient } from '../../controllers/Patient';
import { describe, test, beforeEach, jest, expect } from '@jest/globals';
import { patient01 } from '../mocks/patient';
import { INewPatient } from '../../interfaces/IPatient';

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

  test('should get all patients ', () => {});

  test('should get a patient by id ', () => {});

  test('should update the treatment of patient', () => {});

  test('should  update the name of patient', () => {});

  test('should  delete a patient', () => {});
});
