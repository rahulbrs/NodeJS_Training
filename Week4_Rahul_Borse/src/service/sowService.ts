import { SOW } from '../models/sowModel';

async function createSOW(sow: SOW): Promise<any> {
  try {
    const newSOW = await SOW.create(sow);
    return newSOW;
  } catch (err: any) {
    throw err
  }
}


async function getSOW(): Promise<any[]> {
  try {
    const sow = await SOW.findAll();
    return sow;
  }
  catch (err: any) {
    throw err
  }
}


export {createSOW, getSOW};