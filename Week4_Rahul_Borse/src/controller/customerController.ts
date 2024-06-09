import { Request, Response } from "express";
import { createCustomer, getCustomer } from "../service/customerService";

export const addCustomer = async(req:Request, res: Response)=>{
    try{
        const customer = await createCustomer(req.body);
        console.log(customer)
        res.status(201).json(customer);
    }catch(error : any){
        console.log(error)
        res.status(500).json({message: error.message});
    }
}

export const getCustomers = async(req:Request, res: Response)=>{
    const customer = await getCustomer();
    console.log(customer)
    res.status(200).json(customer);    
}