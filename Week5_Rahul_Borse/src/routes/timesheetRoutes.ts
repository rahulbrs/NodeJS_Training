import express from 'express';

// import { login, register } from '../controller/authController';
const router = express.Router();
import { createTimesheetController } from '../controller/timesheetController';
import { verifyToken } from '../utils/auth';
// import { startShiftController, endShiftController } from '../controller/shiftController';


router.post('/timesheet-entry', verifyToken, async(req, res)=>createTimesheetController(req, res));


export default router;