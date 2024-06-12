import express from 'express';
const router = express.Router();
import { getRatingByBookIdController, addRatingController } from '../controller/ratingController';

router.get('/books/:bookId/ratings', async(req, res)=>getRatingByBookIdController(req, res));
router.post('/books/:bookId/ratings', async(req, res)=>addRatingController(req, res));


export default router;