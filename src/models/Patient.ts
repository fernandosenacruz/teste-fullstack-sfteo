import IPatient from '../interfaces/IPatient';
import { Context } from '../test/units/context';

export const createPatientModel = async (
  {
    name,
    totalCostDentalTreatment,
    numberInstallment,
    installmentAmount,
    paymentMonths,
  }: IPatient,
  ctx: Context,
) => {
  const newPatient: IPatient = await ctx.prisma.patient.create({
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

export const getPatientsModel = async (ctx: Context, limit?: string) => {
  const hasLimit = limit && { take: +limit };
  const allPatients: IPatient[] = await ctx.prisma.patient.findMany({
    orderBy: { name: 'asc' },
    ...hasLimit,
  });

  return allPatients;
};

export const getPatientByIdModel = async (id: string, ctx: Context) => {
  const patientById: IPatient | null = await ctx.prisma.patient.findFirst({
    where: { id },
  });

  return patientById;
};

export const updatePacientModel = async (
  {
    id,
    totalCostDentalTreatment,
    numberInstallment,
    installmentAmount,
    paymentMonths,
  }: Partial<IPatient>,
  ctx: Context,
) => {
  const updatedIntallment: IPatient = await ctx.prisma.patient.update({
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

export const patchPatientModel = async (
  { id, name }: Partial<IPatient>,
  ctx: Context,
) => {
  const pacthNamePatient = await ctx.prisma.patient.update({
    where: { id },
    data: {
      name,
    },
  });

  return pacthNamePatient;
};

export const deletePatientModel = async (id: string, ctx: Context) => {
  const deletePatient = await ctx.prisma.patient.delete({
    where: { id },
  });

  return deletePatient;
};
