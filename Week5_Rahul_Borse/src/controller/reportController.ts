import { Request, Response } from "express";
import { createTimesheetEntry } from "../service/timesheetService";
import { generateReport } from "../service/reportService";

export const generateReportController = async(req:Request, res: Response)=>{
    try{
        const {fromDate, toDate} = req.body;
        console.log("Dates -----",fromDate, toDate)
        const workbook = await generateReport(fromDate, toDate);
        // console.log(timesheet)
        // res.status(201).json(timesheet);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename=report.xlsx`);

        await workbook.xlsx.write(res);
        res.end();

    }catch(error : any){
        console.log(error)
        res.status(500).json({message: error.message});
    }
}
