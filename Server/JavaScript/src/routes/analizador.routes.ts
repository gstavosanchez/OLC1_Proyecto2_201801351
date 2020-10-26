import {Router,Request,Response} from 'express'
import {analizar,uploadFile,getFile} from '../controllers/analizar.controller'
import multer from '../libs/multer'
const router = Router();

router.post('/analyze',analizar);

router.post('/upload',multer.single('file'),uploadFile);
router.get('/file',getFile);


export default router;