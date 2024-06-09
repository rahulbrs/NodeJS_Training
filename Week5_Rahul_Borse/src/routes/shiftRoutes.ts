import express from 'express';

// import { login, register } from '../controller/authController';
const router = express.Router();
import { startShiftController, endShiftController } from '../controller/shiftController';
import { verifyToken } from '../utils/auth';

router.post('/shift-start', verifyToken ,async(req, res)=>startShiftController(req, res));
router.post('/shift-end', verifyToken, async(req, res)=>endShiftController(req, res));



export default router;