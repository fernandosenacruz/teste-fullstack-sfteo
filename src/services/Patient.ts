import { StatusCodes } from 'http-status-codes';
import IPatient from '../interfaces/IPatient';
import {
  createPatientModel,
  getPatientsModel,
  getPatientByIdModel,
  updatePacientModel,
  patchPatientModel,
  deletePatientModel,
} from '../models/Patient';

export const createPatientService = async (patient: IPatient) => {
  const newPatient = await createPatientModel(patient);

  return { code: StatusCodes.CREATED, data: newPatient };
};

export const getPatientsService = async () => {
  const allPatients = await getPatientsModel();

  return { code: StatusCodes.OK, data: allPatients };
};

export const getPatientByIdService = async (id: string) => {
  const patient = await getPatientByIdModel(id);

  return { code: StatusCodes.OK, data: patient };
};

export const updatePacientService = async ({
  id,
  totalCostDentalTreatment,
  numberInstallment,
  installmentAmount,
  paymentMonths,
}: Partial<IPatient>) => {
  const updatedInstallment = await updatePacientModel({
    id,
    totalCostDentalTreatment,
    numberInstallment,
    installmentAmount,
    paymentMonths,
  });

  return { code: StatusCodes.OK, data: updatedInstallment };
};

export const patchPatientService = async ({ id, name }: Partial<IPatient>) => {
  const pacthName = await patchPatientModel({ id, name });

  return { code: StatusCodes.OK, data: pacthName };
};

export const deletePatientService = async (id: string) => {
  await deletePatientModel(id);

  return { code: StatusCodes.NO_CONTENT, message: 'patient deteleted successfully' };
};
