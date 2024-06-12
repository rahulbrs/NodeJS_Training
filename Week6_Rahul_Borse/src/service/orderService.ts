import { Order } from "../models/OrderModel";

async function createOrder(userId:number, bookId:number, amount: any): Promise<any> {
  return await Order.create({userId,bookId, createdAt: new Date(),amount});
}

async function getOrderById(id:number): Promise<any> {
  return await Order.findByPk(id);
}


export {createOrder, getOrderById};