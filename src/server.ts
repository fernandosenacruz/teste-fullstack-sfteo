import express, { json } from 'express';
import installmentAmountGenerate from './helpers/installmentAmountGenerate';
import { PrismaClient } from '@prisma/client';
import IPacient from './interfaces/IPacient';

const prisma = new PrismaClient();

const server = express();

server.use(json());

server.get('/', async (_req, res) => {
  const allPacients = await prisma.pacient.findMany();

  return res.json(allPacients);
});

server.post('/', async (req, res) => {
  const { name, totalCostDentalTreatment, numberInstallment } = req.body;
  const installmentAmount = totalCostDentalTreatment / numberInstallment;
  const paymentMonths = installmentAmountGenerate(installmentAmount);

  const pacient: IPacient = await prisma.pacient.create({
    data: {
      name,
      totalCostDentalTreatment,
      numberInstallment,
      installmentAmount,
      paymentMonths,
    },
  });

  return res.json(pacient);
});

server.put('/:id', async (req, res) => {
  const { id: string } = req.params;
  const { totalCostDentalTreatment, numberInstallment } = req.body;
  const installmentAmount = totalCostDentalTreatment / numberInstallment;
  const paymentMonths = installmentAmountGenerate(installmentAmount);

  const pacient = await prisma.pacient.update({
    where: { id: string },
    data: {
      totalCostDentalTreatment,
      numberInstallment,
      installmentAmount,
      paymentMonths,
    },
  });

  return res.json(pacient);
});

server.patch('/:id', async (req, res) => {
  const { id: string } = req.params;
  const { name } = req.body;

  const pacient = await prisma.pacient.update({
    where: { id: string },
    data: {
      name,
    },
  });

  return res.json(pacient);
});

server.delete('/:id', async (req, res) => {
  const { id: string } = req.params;

  const pacient = await prisma.pacient.delete({
    where: { id: string },
  });

  return res.json(pacient);
});

export default server;
