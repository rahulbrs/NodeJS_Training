import express from 'express';
const router = express.Router();
import { createPaymentController } from '../controller/paymentController';

router.post('/', async(req, res)=>createPaymentController(req, res));


export default router;