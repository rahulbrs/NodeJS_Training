import { Request, Response } from "express";
import { createOrganization, getOrganization } from "../service/organizationService";

export const addOrganization = async(req:Request, res: Response)=>{
    try{
        const organization = await createOrganization(req.body);
        console.log(organization)
        res.status(201).json(organization);
    }catch(error : any){
        console.log(error)
        res.status(500).json({message: error.message});
    }
}

export const getOrganizations = async(req:Request, res: Response)=>{
    const organization = await getOrganization();
    res.status(200).json(organization);    
}