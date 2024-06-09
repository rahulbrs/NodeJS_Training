import { Invoice } from '../models/invoiceModel';
import { SOW } from '../models/sowModel';
import { PaymentPlan } from '../models/paymentPlanModel';

// async function createPaymentPlan(paymentPlan: PaymentPlan): Promise<any> {
//   try {
//     const newPaymentPlan = await PaymentPlan.create(paymentPlan);
//     if (newPaymentPlan) {
//       return newPaymentPlan;
//     }
//   } catch (err: any) {
//     throw err
//   }
// }

async function generateInvoice(): Promise<any> {
  try{
    const todayDate =new Date();
    const paymentPlans = await PaymentPlan.findAll(
    //   {
    //   where:{plannedInvoiceDate:todayDate}
    // }
  );

    const invoices = await Promise.all(paymentPlans.map(async (plan)=>{
      const sow = await SOW.findByPk(plan.sowId);
      if(!sow){
        throw new Error("SOW not found");
      }

      return Invoice.create({
        totalInvoiceValue: plan.totalActualAmount,
        sowId: plan.sowId,
        status: 'pending',
        customerId: plan.customerId,
        invoiceSentOn: todayDate,
        invoiceVersionNumber: 1
      });
    }));
    return invoices;
  }catch(err: any){
    throw err;
  }
}


// async function getPaymentPlan(): Promise<any[]> {
//   try {
//     const paymentPlan = await PaymentPlan.findAll();
//     return paymentPlan;
//   }
//   catch (err: any) {
//     throw err
//   }
// }


export {generateInvoice};