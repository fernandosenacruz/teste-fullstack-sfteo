import { RequestHandler } from 'express';
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

export const createPatient: RequestHandler = async (req, res) => {
  const { name, totalCostDentalTreatment, numberInstallment } = req.body;
  const installmentAmount = installmentAmountGenerate(
    totalCostDentalTreatment,
    numberInstallment,
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
};

export const getPatients: RequestHandler = async (_req, res) => {
  const { code, data } = await getPatientsService();

  return res.status(code).json(data);
};

export const getPatientById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const { code, data } = await getPatientByIdService(id);

  return res.status(code).json(data);
};

export const getPatientByMonth: RequestHandler = (req, res) => {
  const { selectedMonth } = req.query;

  const shakira = getPatientsByDateService(selectedMonth as string);

  return res.json(shakira);
};

export const updatePacient: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { totalCostDentalTreatment, numberInstallment } = req.body;
  const installmentAmount = installmentAmountGenerate(
    totalCostDentalTreatment,
    numberInstallment,
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
};

export const patchPatient: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { code, data } = await patchPatientService({ id, name });

  res.status(code).json(data);
};

export const deletedPatient: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const { code, message } = await deletePatientService(id);

  return res.status(code).json({ message });
};
