import { Request, Response } from "express";
import { employeeRegister, employeeLogin } from "../service/authService";
import { startShift, endShift } from "../service/shiftService";

export const startShiftController = async(req:Request, res: Response)=>{
    try{
        const {employeeId} = req.body;
        const shift = await startShift(employeeId);
        console.log(shift)
        res.status(201).json(shift);
    }catch(error : any){
        console.log(error)
        res.status(500).json({message: error.message});
    }
}

export const endShiftController = async(req:Request, res: Response)=>{
    try{
        const {shiftId} = req.body;
        const shift = await endShift( shiftId );
        res.status(200).json(shift);    
    }catch(error: any){
        console.log(error)
        res.status(500).json({message: error.message});
    }
}