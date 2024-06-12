// import { Order } from "../models/OrderModel";

import * as dotenv from 'dotenv';
dotenv.config();
const gocardless = require('gocardless-nodejs');
const constants = require('gocardless-nodejs/constants');

const client = gocardless(
  process.env.GC_ACCESS_TOKEN,
  constants.Environments.Sandbox,
  { raiseOnIdempotencyConflict: true },
);



async function createPayment(amount:number, userId: number, bookId:number): Promise<any> {
  try {
    const payment = await client.payments.create({
      amount,
      currency: 'USD',
      links: {customer : userId}
    });
    return payment;  
  } catch (error) {
    console.log("failed", error)
    throw new Error("Payment create failed")
  }
}

export {createPayment};