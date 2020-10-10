import {Router,Request,Response} from 'express'
import {analizar} from '../controllers/analizar.controller'

const router = Router();

router.post('/analyze',analizar);

export default router;