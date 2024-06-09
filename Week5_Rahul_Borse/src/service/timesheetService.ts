import { Timesheet } from '../models/timesheetModel';

async function createTimesheetEntry(employeeId: string, shiftId:string, projectName: string, taskName: string, fromDate: Date, toDate: Date): Promise<any> {
  try {
    const timesheet = await Timesheet.create({
        employeeId,
        shiftId,
        projectName,
        taskName,
        fromDate,
        toDate,
    });
    return timesheet;
  } catch (error: any) {
    throw error
  }
}

export {createTimesheetEntry};