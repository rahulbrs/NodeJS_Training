import { Timesheet } from '../models/timesheetModel';
import {Op} from 'sequelize'
import { Shift } from '../models/shiftModel';
import { Employee } from '../models/employeeModel';
import ExcelJS from 'exceljs';

async function generateReport(fromDate: string, toDate: string): Promise<any> {
  try {
    const shifts = await Shift.findAll({
      where:{
        startTime:{
          [Op.between]: [new Date(fromDate), new Date(toDate)],
        },
      },
      include:[Employee],
    });
     
    console.log("ShifTs---",shifts);

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Report');

    worksheet.columns = [
        // { header: 'Employee Name', key: 'employeeName'},
        // { header: 'Email', key: 'email' },
        
        { header: 'Start Time', key: 'startTime' },

        { header: 'End Time',   key: 'endTime' },
        {header: 'Actual Hours', key: 'actualHours' },
        // { header:   'Assigned Shift Hours', key: 'assignedShiftHours' },
    ];

    shifts.forEach(shift =>{
      worksheet.addRow({
            // employeeName: shift.employee.name,
            // email: shift.employee.email,
            startTime: shift.startTime,
            endTime: shift.endTime,
            actualHours: shift.actualHours,
            // assignedShiftHours: shift.employee.assignedShiftHours,
      })
    })
    return workbook;
  } catch (error: any) {
    throw error
  }
}

export {generateReport};