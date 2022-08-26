import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  // ... you will write your Prisma Client queries here
  const addPacient = await prisma.pacient.create({
    data: {
      name: 'Ximira',
      totalCostDentalTreatment: 500,
      numberInstallment: 5,
      installmentAmount: 100,
      paymentMonths: [
        '05-01-2022',
        '05-02-2022',
        '05-03-2022',
        '05-04-2022',
        '05-05-2022',
      ],
    },
  });
  console.log(addPacient);

  const allPacients = await prisma.pacient.findMany();
  console.log(allPacients);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
