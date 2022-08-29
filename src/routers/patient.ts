import { Router } from 'express';
import {
  createPatient,
  deletedPatient,
  getPatientById,
  getPatients,
  patchPatient,
  updatePacient,
} from '../controllers/Patient';

const router: Router = Router();

router.get('/patients', getPatients);
router.get('/patient/:id', getPatientById);

router.post('/patient', createPatient);

router.put('/patient/:id', updatePacient);
router.patch('/patient/:id', patchPatient);

router.delete('/patient/:id', deletedPatient);

export default router;
