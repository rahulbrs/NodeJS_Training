import { Request, Response } from "express";
import { generateInvoice } from "../service/invoiceService";

export const createInvoice = async(req:Request, res: Response)=>{
    try{
        const invoices = await generateInvoice();
        console.log(invoices)
        res.status(201).json(invoices);
    }catch(error : any){
        console.log(error)
        res.status(500).json({message: error.message});
    }
}
