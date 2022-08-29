import Joi from 'joi';

export const PatientSchema = Joi.object({
  name: Joi.string().min(2).required(),
  totalCostDentalTreatment: Joi.number().required(),
  numberInstallment: Joi.number().required(),
  installmentAmount: Joi.number().required(),
  paymentMonths: Joi.array().items(Joi.string()),
});
