import express from 'express';
const router = express.Router();
import { createOrderController, getOrderByIdController } from '../controller/orderController';

router.post('/', async(req, res)=>createOrderController(req, res));
router.get('/:id', async(req, res)=>getOrderByIdController(req, res));


export default router;