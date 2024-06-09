import { PaymentPlan } from '../models/paymentPlanModel';

async function createPaymentPlan(paymentPlan: PaymentPlan[]): Promise<any[]> {
  try {
    const newCreatedPaymentPlan = [];
    for(const plan of paymentPlan){
      const newPaymentPlan = await PaymentPlan.create(plan);
      newCreatedPaymentPlan.push(newPaymentPlan);
    }
    return newCreatedPaymentPlan;
  } catch (err: any) {
    throw err
  }
}


async function getPaymentPlan(): Promise<any[]> {
  try {
    const paymentPlan = await PaymentPlan.findAll();
    return paymentPlan;
  }
  catch (err: any) {
    throw err
  }
}


export {createPaymentPlan, getPaymentPlan};