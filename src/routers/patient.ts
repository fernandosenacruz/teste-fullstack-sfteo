import { NextFunction, Request, Response, Router } from 'express';
import {
  createPatient,
  deletedPatient,
  getPatientById,
  getPatients,
  getPatientsByDate,
  patchPatient,
  updatePacient,
} from '../controllers/Patient';
import {
  validateCreatePatient,
  validateUpdateNamePatient,
  validateUpdatePatient,
} from '../middlewares/patient';
import prisma from '../client';

const router: Router = Router();

router.get('/patients', (req: Request, res: Response, next: NextFunction) =>
  getPatients(req, res, next, { prisma }),
);
router.get(
  '/patients/installment',
  (req: Request, res: Response, next: NextFunction) =>
    getPatientsByDate(req, res, next, { prisma }),
);
router.get('/patient/:id', (req: Request, res: Response, next: NextFunction) =>
  getPatientById(req, res, next, { prisma }),
);

router.post(
  '/patient',
  validateCreatePatient,
  (req: Request, res: Response, next: NextFunction) =>
    createPatient(req, res, next, { prisma }),
);

router.put(
  '/patient/:id',
  validateUpdatePatient,
  (req: Request, res: Response, next: NextFunction) =>
    updatePacient(req, res, next, { prisma }),
);
router.patch(
  '/patient/:id',
  validateUpdateNamePatient,
  (req: Request, res: Response, next: NextFunction) =>
    patchPatient(req, res, next, { prisma }),
);

router.delete(
  '/patient/:id',
  (req: Request, res: Response, next: NextFunction) =>
    deletedPatient(req, res, next, { prisma }),
);

export default router;
