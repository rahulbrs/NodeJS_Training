import { Request, Response } from "express";
import { addAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor } from "../service/authorService";

export const getAuthors = async(req:Request, res: Response)=>{
    const authors = await getAllAuthors();
    console.log(authors)
    res.status(201).json(authors);
}

export const getAuthorByID = async(req:Request, res: Response)=>{
    const id = Number(req.params.id);
    const author = await getAuthorById(id);
    if(author){
        console.log(author)
        res.status(201).json(author);
    }else{
        res.status(404).json('No author Found');
    }
}

export const createAuthor = async(req:Request, res: Response)=>{
    const data = req.body;
    const author = await addAuthor(data);
    res.status(201).json(author);
}

export const updateAuthorById = async(req:Request, res: Response)=>{
    const id = Number(req.params.id);
    const data = req.body;
    const author = await updateAuthor(id,data);
    if(author){
        res.status(201).json(author);
    }else{
        res.status(404).json("Author not Found");
    }
}

export const deleteAuthorById = async(req:Request, res: Response)=>{
    const id = Number(req.params.id);
    const isDeleted = await deleteAuthor(id);
    if(isDeleted){
        res.status(201).json("Author Deleted");
    }else{
        res.status(404).json("Author not Found");
    }
}

