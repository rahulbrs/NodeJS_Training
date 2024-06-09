import { Customer } from '../models/customerModel';

async function createCustomer(customer: Customer): Promise<any> {
  try {
    const newCustomer = await Customer.create(customer);
    return newCustomer;
  } catch (err: any) {
    throw err
  }
}


async function getCustomer(): Promise<any[]> {
  try {
    const customer = await Customer.findAll();
    return customer;
  }
  catch (err: any) {
    throw err
  }
}


export {createCustomer, getCustomer};