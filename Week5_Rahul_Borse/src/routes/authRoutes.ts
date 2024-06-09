import express from 'express';

import { login, register } from '../controller/authController';
const router = express.Router();


router.post('/register', async(req, res)=>register(req, res));
router.post('/login', async(req, res)=>login(req, res));



export default router;