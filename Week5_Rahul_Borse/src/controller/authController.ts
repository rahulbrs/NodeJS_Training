import { Request, Response } from "express";
import { employeeRegister, employeeLogin } from "../service/authService";

export const register = async(req:Request, res: Response)=>{
    try{
        const emp = await employeeRegister(req.body);
        console.log(emp)
        res.status(201).json(emp);
    }catch(error : any){
        console.log(error)
        res.status(500).json({message: error.message});
    }
}

export const login = async(req:Request, res: Response)=>{
    const {email, password} = req.body;
    try{
        const emp = await employeeLogin( email, password );
        res.status(200).json(emp);    
    }catch(error: any){
        console.log(error)
        res.status(500).json({message: error.message});
    }
}