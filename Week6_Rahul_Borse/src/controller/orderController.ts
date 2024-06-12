import { Request, Response } from "express";
import { getRatingByBookId, addRating } from "../service/ratingService";
import { createOrder, getOrderById } from "../service/orderService";
import { createPayment } from "../service/paymentService";



export const createOrderController = async(req:Request, res: Response)=>{
    const {bookId, amount, userId} = req.body;
    try {
        const payment = await createPayment(amount, userId, bookId);
        const order = createOrder(userId,bookId, amount) 
        res.status(201).json(order)
    } catch (error) {
        res.status(500).json("Order Creation failed")
    }
}

export const getOrderByIdController = async(req:Request, res: Response)=>{
    const id = Number(req.params.id)
    const order = await getOrderById(id)
    if(order){
        if(order.userId !== req.body.id){
            return res.status(403).json("Unauthorised User")
        }
        res.status(200).json(order)
    }else{
        res.status(400).json("No Order founD")
    }
}