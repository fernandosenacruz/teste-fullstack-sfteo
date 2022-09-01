import { PrismaClient } from '@prisma/client';
import IPatient from '../interfaces/IPatient';

const prisma = new PrismaClient();

export const createPatientModel = async ({
  name,
  totalCostDentalTreatment,
  numberInstallment,
  installmentAmount,
  paymentMonths,
}: IPatient) => {
  const newPatient: IPatient = await prisma.patient.create({
    data: {
      name,
      totalCostDentalTreatment,
      numberInstallment,
      installmentAmount,
      paymentMonths,
    },
  });

  return newPatient;
};

export const getPatientsModel = async (limit?: string) => {
  const hasLimit = limit && {take: +limit}
  const allPatients: IPatient[] = await prisma.patient.findMany({
    orderBy: { name: 'asc' },
    // take: limit ? +limit : 1000,
    ...hasLimit
  });

  return allPatients;
};

// export const getPatientsByDateModel = async (selectedMonth: string) => {
  // const allPatients = await prisma.patient.findRaw({
  //   filter: {
  //     paymentMonths: {
  //       $in: [`/\d*?-${selectedMonth}/g`] as unknown as string,
  //       // $in: ['29-9-2022'],
  //     },
  //   },
  // });

  // console.log(allPatients, selectedMonth);

  // return allPatients;
// };

export const getPatientByIdModel = async (id: string) => {
  const patientById: IPatient | null = await prisma.patient.findFirst({
    where: { id },
  });

  return patientById;
};

export const updatePacientModel = async ({
  id,
  totalCostDentalTreatment,
  numberInstallment,
  installmentAmount,
  paymentMonths,
}: Partial<IPatient>) => {
  const updatedIntallment: IPatient = await prisma.patient.update({
    where: { id },
    data: {
      totalCostDentalTreatment,
      numberInstallment,
      installmentAmount,
      paymentMonths,
    },
  });

  return updatedIntallment;
};

export const patchPatientModel = async ({ id, name }: Partial<IPatient>) => {
  const pacthNamePatient = await prisma.patient.update({
    where: { id },
    data: {
      name,
    },
  });

  return pacthNamePatient;
};

export const deletePatientModel = async (id: string) => {
  const deletePatient = await prisma.patient.delete({
    where: { id },
  });

  return deletePatient;
};
