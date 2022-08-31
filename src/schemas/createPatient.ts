import Joi from 'joi';

export const createPatientSchema = Joi.object({
  name: Joi.string().min(2).required(),
  totalCostDentalTreatment: Joi.number().min(100).required(),
  numberInstallment: Joi.number().greater(1).required(),
});

export const updatePatientSchema = Joi.object({
  totalCostDentalTreatment: Joi.number().min(100).required(),
  numberInstallment: Joi.number().greater(1).required(),
});

export const updateNamePatientSchema = Joi.object({
  name: Joi.string().min(2).required(),
});
