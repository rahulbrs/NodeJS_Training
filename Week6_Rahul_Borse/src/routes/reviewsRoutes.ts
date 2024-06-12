import express from 'express';
const router = express.Router();
import { userRegister, userLogin, getUserByID } from '../controller/userController';
import { getReviewByBookIdController, addReviewController, deleteReviewController } from '../controller/reviewController';

router.get('/books/:bookId/reviews', async(req, res)=>getReviewByBookIdController(req, res));
router.post('/books/:bookId/reviews', async(req, res)=>addReviewController(req, res));
router.delete('/reviews/:id', async(req, res)=>deleteReviewController(req, res));


export default router;