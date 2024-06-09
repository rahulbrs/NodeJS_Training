import { Request, Response } from "express";
import { createPaymentPlanLineItem, getPaymentPlanLineItems } from "../service/paymentPlanLineItemService";


export const addPaymentPlanLineItem = async(req:Request, res: Response)=>{
    try{
        const paymentPlanLineItem = await createPaymentPlanLineItem(req.body);
        console.log(paymentPlanLineItem)
        res.status(201).json(paymentPlanLineItem);
    }catch(error : any){
        console.log(error)
        res.status(500).json({message: error.message});
    }
}

export const getPaymentPlansLineItem = async(req:Request, res: Response)=>{
    const paymentPlanLineItem = await getPaymentPlanLineItems();
    console.log(paymentPlanLineItem)
    res.status(200).json(paymentPlanLineItem);    
}