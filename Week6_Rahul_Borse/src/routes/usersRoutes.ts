import express from 'express';
const router = express.Router();
import { userRegister, userLogin, getUserByID } from '../controller/userController';

router.post('/register', async(req, res)=>userRegister(req, res));
router.post('/login', async(req, res)=>userLogin(req, res));
router.get('/me', async(req, res)=>getUserByID(req, res));

export default router;