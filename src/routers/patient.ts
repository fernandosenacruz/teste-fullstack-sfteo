import { Router } from 'express';
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

const router: Router = Router();

router.get('/patients', getPatients);
router.get('/patients/installment', getPatientsByDate);
router.get('/patient/:id', getPatientById);

router.post('/patient', validateCreatePatient, createPatient);

router.put('/patient/:id', validateUpdatePatient, updatePacient);
router.patch('/patient/:id', validateUpdateNamePatient, patchPatient);

router.delete('/patient/:id', deletedPatient);

export default router;
