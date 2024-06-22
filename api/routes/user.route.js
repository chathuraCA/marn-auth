import express from 'express';
const router=express.Router();
import {test} from '../controllers/user.cntroller.js'

router.get('/',test);

export default router;