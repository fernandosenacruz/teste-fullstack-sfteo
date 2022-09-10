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
import { Context } from '../tests/units/context';

export const createPatientService = async (patient: IPatient, ctx: Context) => {
  const newPatient = await createPatientModel(patient, ctx);

  return { code: StatusCodes.CREATED, data: newPatient };
};

export const getPatientsService = async (limit?: string) => {
  const allPatients = await getPatientsModel(limit);

  return { code: StatusCodes.OK, data: allPatients };
};

export const getPatientByIdService = async (id: string) => {
  const patient = await getPatientByIdModel(id);

  return { code: StatusCodes.OK, data: patient };
};

export const getPatientsByDateService = async (selectedDate: string) => {
  const getAllPatients = await getPatientsModel();
  const patientsBySelectedMonth: IPatient[] = [];
  const splitedDate = selectedDate.split('-');
  const selectedMonth = `${splitedDate[1]}-${splitedDate[2]}`;

  getAllPatients.forEach(patient => {
    const selectedPatients = patient.paymentMonths.some(month =>
      month.includes(selectedMonth),
    );

    if (selectedPatients) patientsBySelectedMonth.push(patient);
  });

  return { code: StatusCodes.OK, data: patientsBySelectedMonth };
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

  return {
    code: StatusCodes.NO_CONTENT,
    message: 'patient deteleted successfully',
  };
};
