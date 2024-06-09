import { Organization } from '../models/organizationModel';

async function createOrganization(organization: Organization): Promise<any> {
  try {
    const newOrganization = await Organization.create(organization);
    return newOrganization;
  } catch (err: any) {
    throw err
  }
}


async function getOrganization(): Promise<any[]> {
  try {
    const organization = await Organization.findAll();
    return organization;
  }
  catch (err: any) {
    throw err
  }
}


export {createOrganization, getOrganization};