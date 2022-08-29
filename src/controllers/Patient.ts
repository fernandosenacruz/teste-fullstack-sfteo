import { Request, Response, NextFunction } from 'express';
import paymentMonthsGenerate from '../helpers/installmentAmountGenerate';
import {
  createPatientService,
  getPatientsService,
  getPatientByIdService,
  updatePacientService,
  patchPatientService,
  deletePatientService,
} from '../services/Patient';

export const createPatient = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const { name, totalCostDentalTreatment, numberInstallment } = req.body;
    const installmentAmount = Math.floor(
      totalCostDentalTreatment / numberInstallment,
    );
    const paymentMonths = paymentMonthsGenerate(numberInstallment);

    const { code, data } = await createPatientService({
      name,
      totalCostDentalTreatment,
      numberInstallment,
      installmentAmount,
      paymentMonths,
    });

    return res.status(code).json(data);
  } catch (err) {
    next(err);
  }
};

export const getPatients = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const { code, data } = await getPatientsService();

    return res.status(code).json(data);
  } catch (err) {
    next(err);
  }
};

export const getPatientById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const { id } = req.params;

    const { code, data } = await getPatientByIdService(id);

    return res.status(code).json(data);
  } catch (err) {
    next(err);
  }
};

export const updatePacient = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const { id } = req.params;
    const { totalCostDentalTreatment, numberInstallment } = req.body;
    const installmentAmount = Math.floor(
      totalCostDentalTreatment / numberInstallment,
    );
    const paymentMonths = paymentMonthsGenerate(numberInstallment);

    const { code, data } = await updatePacientService({
      id,
      totalCostDentalTreatment,
      numberInstallment,
      installmentAmount,
      paymentMonths,
    });

    return res.status(code).json(data);
  } catch (err) {
    next(err);
  }
};

export const patchPatient = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const { code, data } = await patchPatientService({ id, name });

    res.status(code).json(data);
  } catch (err) {
    next(err);
  }
};

export const deletedPatient = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const { code, message } = await deletePatientService(id);

    return res.status(code).json({ message });
  } catch (err) {
    next(err);
  }
};
