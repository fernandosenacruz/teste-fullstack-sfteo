import express, { json } from 'express';
import paymentMonthsGenerate from './helpers/installmentAmountGenerate';
import { PrismaClient } from '@prisma/client';
import IPacient from './interfaces/IPacient';

const prisma = new PrismaClient();

const server = express();

server.use(json());

server.post('/', async (req, res) => {
  const { name, totalCostDentalTreatment, numberInstallment } = req.body;
  const installmentAmount = Math.floor(
    totalCostDentalTreatment / numberInstallment,
  );
  const paymentMonths = paymentMonthsGenerate(numberInstallment);

  const createPacient: IPacient = await prisma.pacient.create({
    data: {
      name,
      totalCostDentalTreatment,
      numberInstallment,
      installmentAmount,
      paymentMonths,
    },
  });

  return res.json(createPacient);
});

server.get('/', async (_req, res) => {
  const allPacients: IPacient[] = await prisma.pacient.findMany();

  return res.json(allPacients);
});

server.get('/:id', async (req, res) => {
  const { id: string } = req.params;

  const pacientById: IPacient | null = await prisma.pacient.findFirst({
    where: { id: string },
  });

  return res.json(pacientById);
});

server.put('/:id', async (req, res) => {
  const { id: string } = req.params;
  const { totalCostDentalTreatment, numberInstallment } = req.body;
  const installmentAmount = Math.floor(
    totalCostDentalTreatment / numberInstallment,
  );
  const paymentMonths = paymentMonthsGenerate(numberInstallment);

  const updatePacient: IPacient = await prisma.pacient.update({
    where: { id: string },
    data: {
      totalCostDentalTreatment,
      numberInstallment,
      installmentAmount,
      paymentMonths,
    },
  });

  return res.json(updatePacient);
});

server.patch('/:id', async (req, res) => {
  const { id: string } = req.params;
  const { name } = req.body;

  const pacthNamePacient = await prisma.pacient.update({
    where: { id: string },
    data: {
      name,
    },
  });

  return res.json(pacthNamePacient);
});

server.delete('/:id', async (req, res) => {
  const { id: string } = req.params;

  const deletePacient = await prisma.pacient.delete({
    where: { id: string },
  });

  return res.json(deletePacient);
});

export default server;
