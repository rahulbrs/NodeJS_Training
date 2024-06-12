import { Request, Response } from "express";
import { getReviewByBookId, addReview, deleteReview } from "../service/reviewService";

export const getReviewByBookIdController = async(req:Request, res: Response)=>{
    const id = Number(req.params.bookId);
    const reviews = await getReviewByBookId(id);
    console.log(reviews)
    res.status(201).json(reviews);
}

export const addReviewController = async(req:Request, res: Response)=>{
    const bookId = Number(req.params.bookId);
    const {content, userId} = req.body;
    const review = await addReview(userId,bookId,content);
    console.log(review)
    return res.status(201).json(review);
}

export const deleteReviewController = async(req:Request, res: Response)=>{
    const reviewId = Number(req.params.id);
    const {userId} = req.body;
    const isDeleted = await deleteReview(reviewId,userId);
    console.log(isDeleted)
    if(isDeleted){
        res.status(201).json("Review deleted");
    }else{
        res.status(201).json("Review Not deleted");
    }
}
