import express, { json } from 'express';
import { PrismaClient } from '@prisma/client';

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
  const date = new Date();
  let restartYear = 1;
  const day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  const paymentMonths = [];

  for (let i = 0; i < installmentAmount; i++) {
    if (month === 11) {
      month = restartYear;
      year += 1;
      paymentMonths.push(`${day}-${month}-${year}`);
    } else {
      month += 1;
      paymentMonths.push(`${day}-${month}-${year}`);
    }
  }

  const pacient = await prisma.pacient.create({
    data: {
      name,
      totalCostDentalTreatment,
      numberInstallment,
      installmentAmount,
      paymentMonths,
    },
  });
});

export default server;
