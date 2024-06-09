import { Request, Response } from "express";
import { createPaymentPlan, getPaymentPlan } from "../service/paymentPlanService";

export const addPaymentPlan = async(req:Request, res: Response)=>{
    try{
        const paymentPlan = await createPaymentPlan(req.body);
        console.log(paymentPlan)
        res.status(201).json(paymentPlan);
    }catch(error : any){
        console.log(error)
        res.status(500).json({message: error.message});
    }
}

export const getPaymentPlans = async(req:Request, res: Response)=>{
    const paymentPlan = await getPaymentPlan();
    console.log(paymentPlan)
    res.status(200).json(paymentPlan);    
}