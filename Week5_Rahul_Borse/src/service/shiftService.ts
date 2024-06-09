import { Employee } from '../models/employeeModel';
import { Shift } from '../models/shiftModel';

async function startShift(employeeId: string): Promise<any> {
  try {
    const employee = await Employee.findByPk(employeeId);

    if(!employee){
      throw new Error("Invalid EmployeeId");
    }

    const shift = await Shift.create({
      employeeId,
      startTime: new Date(),
    })

    return shift;
  } catch (error: any) {
    throw error
  }
}


async function endShift(shiftId:string): Promise<any> {
  try {
    const shift = await Shift.findByPk(shiftId);
    
    if(!shift){
      throw new Error("Shift not found");
    }

    shift.endTime = new Date();
    shift.actualHours = (shift.endTime.getTime() - shift.startTime.getTime()) / 3600000;
    await shift.save();
    return shift;
  }
  catch (err: any) {
    throw err
  }
}


export {startShift, endShift};