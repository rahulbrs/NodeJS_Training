import { Request, Response } from "express";
import { getRatingByBookId, addRating } from "../service/ratingService";

export const getRatingByBookIdController = async(req:Request, res: Response)=>{
    const id = Number(req.params.bookId);
    const ratings = await getRatingByBookId(id);
    console.log(ratings)
    res.status(201).json(ratings);
}

export const addRatingController = async(req:Request, res: Response)=>{
    const bookId = Number(req.params.bookId);
    const {rating, userId} = req.body;
    const ratings = await addRating(userId,bookId,rating);
    console.log(ratings)
    return res.status(201).json(ratings);
}