import { NextFunction, Request, Response } from 'express';
import {
  createPatientSchema,
  updateNamePatientSchema,
  updatePatientSchema,
} from '../schemas/createPatient';

export const validateCreatePatient = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  await createPatientSchema.validateAsync(req.body);

  return next();
};

export const validateUpdatePatient = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  await updatePatientSchema.validateAsync(req.body);

  return next();
};

export const validateUpdateNamePatient = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  await updateNamePatientSchema.validateAsync(req.body);

  return next();
};
