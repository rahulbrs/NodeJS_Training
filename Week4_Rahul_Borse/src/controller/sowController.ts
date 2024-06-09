import { Request, Response } from "express";
import { createSOW, getSOW } from "../service/sowService";

export const addSOW = async(req:Request, res: Response)=>{
    try{
        const sow = await createSOW(req.body);
        console.log(sow)
        res.status(201).json(sow);
    }catch(error : any){
        console.log(error)
        res.status(500).json({message: error.message});
    }
}

export const getSOWs = async(req:Request, res: Response)=>{
    const sow = await getSOW();
    console.log(sow)
    res.status(200).json(sow);    
}