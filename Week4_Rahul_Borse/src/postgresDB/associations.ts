import { Organization } from "../models/organizationModel";
import { Customer } from "../models/customerModel";
import { SOW } from "../models/sowModel";
import { PaymentPlan } from "../models/paymentPlanModel";
import { PaymentPlanLineItem } from "../models/paymentPlanLineItemModel";
import { Invoice } from "../models/invoiceModel";
import { InvoiceLineItem } from "../models/invoiceLineItemModel";
import { Payment } from "../models/paymentModel";


Organization.hasMany(Customer,{foreignKey:'organizationId'});
Customer.belongsTo(Organization,{foreignKey:'organizationId'});

Customer.hasMany(SOW,{foreignKey:'customerId'});
SOW.belongsTo(Customer,{foreignKey:'customerId'});

SOW.hasMany(PaymentPlan,{foreignKey:'sowId'});
PaymentPlan.belongsTo(SOW,{foreignKey:'sowId'});

SOW.hasMany(PaymentPlanLineItem,{foreignKey:'sowId'});
PaymentPlanLineItem.belongsTo(SOW,{foreignKey:'sowId'});

PaymentPlan.hasMany(PaymentPlanLineItem,{foreignKey:'sowPaymentPlanId'});
PaymentPlanLineItem.belongsTo(PaymentPlan,{foreignKey:'sowPaymentPlanId'});

SOW.hasMany(Invoice,{foreignKey:'sowId'});
Invoice.belongsTo(SOW,{foreignKey:'sowId'});

Customer.hasMany(Invoice,{foreignKey:'customerId'});
Invoice.belongsTo(Customer,{foreignKey:'customerId'});

Invoice.hasMany(InvoiceLineItem,{foreignKey:'invoiceId'});
InvoiceLineItem.belongsTo(Invoice,{foreignKey:'invoiceId'});


Invoice.hasMany(Payment,{foreignKey:'invoiceId'});
Payment.belongsTo(Invoice,{foreignKey:'invoiceId'});

export {Organization, Customer, SOW, PaymentPlan, PaymentPlanLineItem, Invoice, InvoiceLineItem, Payment}