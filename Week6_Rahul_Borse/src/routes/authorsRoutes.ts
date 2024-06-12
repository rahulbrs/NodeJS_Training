import express from 'express';
const router = express.Router();
import {createAuthor, deleteAuthorById, getAuthorByID, getAuthors, updateAuthorById} from '../controller/authorController'

router.get('/', async(req, res)=>getAuthors(req, res));
router.get('/:id', async(req, res)=>getAuthorByID(req, res));
router.post('/', async(req, res)=>createAuthor(req, res));
router.put('/:id', async(req, res)=>updateAuthorById(req, res));
router.delete('/:id', async(req, res)=>deleteAuthorById(req, res));


export default router;