import { NextFunction, Request, Response } from 'express';
import paymentMonthsGenerate from '../helpers/paymentMonthGenerate';
import installmentAmountGenerate from '../helpers/installmentAmountGenerate';
import {
  createPatientService,
  getPatientsService,
  getPatientByIdService,
  getPatientsByDateService,
  updatePacientService,
  patchPatientService,
  deletePatientService,
} from '../services/Patient';
import { Context } from '../test/units/context';

export const createPatient = async (
  req: Request,
  res: Response,
  _next: NextFunction,
  ctx: Context,
) => {
  const { name, totalCostDentalTreatment, numberInstallment } = req.body;
  const installmentAmount = installmentAmountGenerate(
    totalCostDentalTreatment,
    numberInstallment,
  );
  const paymentMonths = paymentMonthsGenerate(numberInstallment);

  const { code, data } = await createPatientService(
    {
      name,
      totalCostDentalTreatment,
      numberInstallment,
      installmentAmount,
      paymentMonths,
    },
    ctx,
  );

  return res.status(code).json(data);
};

export const getPatients = async (
  req: Request,
  res: Response,
  _next: NextFunction,
  ctx: Context,
) => {
  const { limit } = req.query;
  const { code, data } = await getPatientsService(
    ctx,
    limit as string | undefined,
  );

  return res.status(code).json(data);
};

export const getPatientById = async (
  req: Request,
  res: Response,
  _next: NextFunction,
  ctx: Context,
) => {
  const { id } = req.params;

  const { code, data } = await getPatientByIdService(id, ctx);

  return res.status(code).json(data);
};

export const getPatientsByDate = async (
  req: Request,
  res: Response,
  _next: NextFunction,
  ctx: Context,
) => {
  const { selectedMonth } = req.query;

  const { code, data } = await getPatientsByDateService(
    selectedMonth as string,
    ctx,
  );

  return res.status(code).json(data);
};

export const updatePacient = async (
  req: Request,
  res: Response,
  _next: NextFunction,
  ctx: Context,
) => {
  const { id } = req.params;
  const { totalCostDentalTreatment, numberInstallment } = req.body;
  const installmentAmount = installmentAmountGenerate(
    totalCostDentalTreatment,
    numberInstallment,
  );
  const paymentMonths = paymentMonthsGenerate(numberInstallment);

  const { code, data } = await updatePacientService(
    {
      id,
      totalCostDentalTreatment,
      numberInstallment,
      installmentAmount,
      paymentMonths,
    },
    ctx,
  );

  return res.status(code).json(data);
};

export const patchPatient = async (
  req: Request,
  res: Response,
  _next: NextFunction,
  ctx: Context,
) => {
  const { id } = req.params;
  const { name } = req.body;

  const { code, data } = await patchPatientService({ id, name }, ctx);

  res.status(code).json(data);
};

export const deletedPatient = async (
  req: Request,
  res: Response,
  _next: NextFunction,
  ctx: Context,
) => {
  const { id } = req.params;

  const { code, message } = await deletePatientService(id, ctx);

  return res.status(code).json({ message });
};
