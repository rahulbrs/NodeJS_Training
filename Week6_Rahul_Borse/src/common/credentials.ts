import * as dotenv from 'dotenv';
dotenv.config();

const credentials ={
   postgres:{
    USERNAME : process.env.USER || "",
    DATABASE : process.env.DATABASE || "",
    HOST  : process.env.HOST_NAME || "",
    PASSWORD : process.env.PASSWORD || "",
    DBPORT : Number(process.env.PORTNAME) || 5432,
   },
   SECRET_KEY : process.env.JWT_SECRET || "",
   GC_ACCESS_TOKEN : process.env.GC_ACCESS_TOKEN || "",
}

export default credentials;
