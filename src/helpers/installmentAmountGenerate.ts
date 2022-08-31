const installmentAmountGenerate = (
  totalCostDentalTreatment: number,
  numberInstallment: number,
) => {
  return Math.floor(totalCostDentalTreatment / numberInstallment);
};

export default installmentAmountGenerate;
