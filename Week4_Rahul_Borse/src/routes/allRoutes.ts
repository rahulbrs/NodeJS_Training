import express from 'express';

import { addOrganization, getOrganizations } from '../controller/organizationController';

import { addCustomer, getCustomers } from '../controller/customerController';

import { addSOW, getSOWs } from '../controller/sowController';

import { addPaymentPlan, getPaymentPlans } from '../controller/paymentPlanController';

import { createInvoice } from '../controller/invoiceController';

import { addPaymentPlanLineItem, getPaymentPlansLineItem } from '../controller/paymentPlanLineItemController';

const router = express.Router();


router.post('/organizations', async(req, res)=>addOrganization(req, res));
router.get('/organizations', async(req, res)=>getOrganizations(req, res));

router.post('/customers', async(req, res)=>addCustomer(req, res));
router.get('/customers', async(req, res)=>getCustomers(req, res));

router.post('/sows', async(req, res)=>addSOW(req, res));
router.get('/sows', async(req, res)=>getSOWs(req, res));

router.post('/payment-plans', async(req, res)=>addPaymentPlan(req, res));
router.get('/payment-plans', async(req, res)=>getPaymentPlans(req, res));

router.post('/payment-plan-line-items', async(req, res)=>addPaymentPlanLineItem(req, res));
router.get('/payment-plan-line-items', async(req, res)=>getPaymentPlansLineItem(req, res));

router.post('/generate-invoice', async(req, res)=>createInvoice(req,res));

export default router;