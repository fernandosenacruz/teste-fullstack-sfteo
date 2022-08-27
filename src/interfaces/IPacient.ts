export default interface IPacient {
    id: string,
    name: string,
    totalCostDentalTreatment: number,
    numberInstallment: number,
    installmentAmount: number,
    paymentMonths: string[]
  }
