import { Employee } from '../models/employeeModel';
import { generateToken, verifyToken, hashPassword, comparePassword } from "../utils/auth";


async function employeeRegister(employee: Employee): Promise<any> {
  try {
    const {name, email, password, assignedShiftHours, role} = employee;
    
    const existingEmployee = await Employee.findOne({where:{email}});
    // console.log("Existing Employe-",existingEmployee);
    if(existingEmployee){
      throw new Error("Employee already exists");
    }
    const hashedPassword = await hashPassword(password);
    const newEmployee = await Employee.create({
      name,
      email,
      password: hashedPassword,
      role,
      assignedShiftHours
    });
    
    const token = await generateToken(newEmployee.id, newEmployee.email);
    console.log("Token-",token);
    return {token, emp_id: newEmployee.id,emp_email: employee.email};

  } catch (error: any) {
    throw error
  }
}


async function employeeLogin(email:string, password:string): Promise<any> {
  try {
    const employee = await Employee.findOne({where:{email}});
    // console.log("Employe-",employee) 
    if(!employee){
      throw new Error("Invalid Email");
    }

    const isValidPassword = comparePassword(password,employee.password);

    if(!isValidPassword){
      throw new Error("Invalid Password");
    }
    console.log("Employee-",employee.id, employee.email);

    const token = await generateToken(employee.id, employee.email);
    console.log("Token-",token);
    return {token,emp_id: employee.id,emp_email: employee.email};
  }
  catch (err: any) {
    throw err
  }
}


export {employeeRegister, employeeLogin};