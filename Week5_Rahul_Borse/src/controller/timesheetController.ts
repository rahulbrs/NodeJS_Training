import { Request, Response } from "express";
import { createTimesheetEntry } from "../service/timesheetService";

export const createTimesheetController = async(req:Request, res: Response)=>{
    try{
        const {employeeId, shiftId, projectName, taskName, fromDate, toDate} = req.body;
        const timesheet = await createTimesheetEntry(employeeId, shiftId, projectName, taskName, fromDate, toDate);
        console.log(timesheet)
        res.status(201).json(timesheet);
    }catch(error : any){
        console.log(error)
        res.status(500).json({message: error.message});
    }
}
