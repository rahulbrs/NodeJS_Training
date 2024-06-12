import express from 'express';
const router = express.Router();
import {createBook, getBooks, getBookByID,updateBookById, deleteBookById} from '../controller/bookController'

router.get('/', async(req, res)=>getBooks(req, res));
router.get('/:id', async(req, res)=>getBookByID(req, res));
router.post('/', async(req, res)=>createBook(req, res));
router.post('/:id', async(req, res)=>updateBookById(req, res));
router.delete('/:id', async(req, res)=>deleteBookById(req, res));



export default router;