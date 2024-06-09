import { PaymentPlanLineItem } from '../models/paymentPlanLineItemModel';

async function createPaymentPlanLineItem(paymentPlanLineItem: PaymentPlanLineItem[]): Promise<any[]> {
  try {
    const newCreatedPaymentPlan = [];
    for( const item of paymentPlanLineItem){
      const newPaymentPlanLineItem = await PaymentPlanLineItem.create(item);
      newCreatedPaymentPlan.push(newPaymentPlanLineItem)
    }
    return newCreatedPaymentPlan;
  } catch (error: any) {
    throw error
  }
}


async function getPaymentPlanLineItems(): Promise<any[]> {
  try {
    const paymentPlanLineItems = await PaymentPlanLineItem.findAll();
    return paymentPlanLineItems;
  }
  catch (error: any) {
    throw error
  }
}


export {createPaymentPlanLineItem,getPaymentPlanLineItems};