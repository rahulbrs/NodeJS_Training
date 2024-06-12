import { Request, Response } from "express";
import { createPayment } from "../service/paymentService";

export const createPaymentController = async(req:Request, res: Response)=>{
    const {bookId, amount, userId} = req.body;

    try {
        const payment = await createPayment(amount, userId, bookId);
        res.status(201).json(payment);
    } catch (error) {
        res.status(500).json("Payment creation failed");    
    }
}