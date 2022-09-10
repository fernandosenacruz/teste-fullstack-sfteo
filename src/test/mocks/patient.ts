import IPatient, { INewPatient } from '../../interfaces/IPatient';

export const patient01: INewPatient = {
  id: '6319f46a8c83b9f8d6bbc047',
  name: 'Patient01 test',
  totalCostDentalTreatment: 1000,
  numberInstallment: 2,
  installmentAmount: 500,
  paymentMonths: ['01-10-2022', '01-11-2022'],
};

export const patient02: IPatient = {
  id: '6319f46a8c83b9f8d6bbc048',
  name: 'Patient02 test',
  totalCostDentalTreatment: 1000,
  numberInstallment: 2,
  installmentAmount: 500,
  paymentMonths: ['01-10-2022', '01-11-2022'],
};

export const updateName: Partial<IPatient> = {
  name: 'Patient 01 test',
};

export const updateTreantment: Partial<IPatient> = {
  totalCostDentalTreatment: 500,
  numberInstallment: 2,
};

export const updatedNamePatient01: IPatient = {
  id: '6319f46a8c83b9f8d6bbc047',
  name: 'Patient 01 test',
  totalCostDentalTreatment: 1000,
  numberInstallment: 2,
  installmentAmount: 500,
  paymentMonths: ['01-10-2022', '01-11-2022'],
};

export const updatedTreantmentPatient01: IPatient = {
  id: '6319f46a8c83b9f8d6bbc047',
  name: 'Patient 01 test',
  totalCostDentalTreatment: 500,
  numberInstallment: 2,
  installmentAmount: 250,
  paymentMonths: ['01-10-2022', '01-11-2022'],
};

const patients: IPatient[] = [{ ...patient01 }, { ...patient02 }];
