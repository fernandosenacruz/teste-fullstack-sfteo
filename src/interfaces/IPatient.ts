export default interface IPatient {
  id?: string;
  name: string;
  totalCostDentalTreatment: number;
  numberInstallment: number;
  installmentAmount: number;
  paymentMonths: string[];
}

export interface INewPatient {
  id: string;
  name: string;
  totalCostDentalTreatment: number;
  numberInstallment: number;
  installmentAmount: number;
  paymentMonths: string[];
}
