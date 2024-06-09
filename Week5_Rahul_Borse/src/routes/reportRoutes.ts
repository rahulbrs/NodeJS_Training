import express from 'express';

// import { login, register } from '../controller/authController';
const router = express.Router();
// import { startShiftController, endShiftController } from '../controller/shiftController';
import { generateReportController } from '../controller/reportController';

router.post('/generate-report', async(req, res)=>generateReportController(req, res));


export default router;