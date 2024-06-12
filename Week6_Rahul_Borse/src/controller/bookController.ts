import { Request, Response } from "express";
import { addBook,getAllBooks,getBookById,updateBook,deleteBook } from "../service/bookService";

export const getBooks = async(req:Request, res: Response)=>{
    const books = await getAllBooks();
    console.log(books)
    res.status(201).json(books);
}

export const getBookByID = async(req:Request, res: Response)=>{
    const id = Number(req.params.id);
    const book = await getBookById(id);
    if(book){
        console.log(book)
        res.status(201).json(book);
    }else{
        res.status(404).json('No Book Found');
    }
}

export const createBook = async(req:Request, res: Response)=>{
    const data = req.body;
    const book = await addBook(data);
    res.status(201).json(book);
}

export const updateBookById = async(req:Request, res: Response)=>{
    const id = Number(req.params.id);
    const data = req.body;
    const book = await updateBook(id,data);
    if(book){
        res.status(201).json(book);
    }else{
        res.status(404).json("Book not Found");
    }
}

export const deleteBookById = async(req:Request, res: Response)=>{
    const id = Number(req.params.id);
    const isDeleted = await deleteBook(id);
    if(isDeleted){
        res.status(201).json("Book Deleted");
    }else{
        res.status(404).json("Book not Found");
    }
}

