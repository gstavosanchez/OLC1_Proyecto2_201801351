import { Router } from 'express'
import { analizar } from '../controllers/analizar.controllers'
const router = Router();

router.post('/analizar-python',analizar);

export default router;