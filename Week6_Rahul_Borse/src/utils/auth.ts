import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
dotenv.config();
import credentials from '../common/credentials';

const SECRET_KEY = credentials.SECRET_KEY;

async function generateToken(id: any, username: string): Promise<string> {
    // console.log("genr Token")
    // console.log("Secret Ke", SECRET_KEY)
    return jwt.sign({id,username},SECRET_KEY,{expiresIn:'15m'});
}


async function verifyToken(req:Request,res:Response,next:any): Promise<any> {
    let authHeaders = req.headers['authorization'];
    let token = authHeaders && authHeaders.split(' ')[1];
    if(token==null){
        return res.send({message:"Token Not Found"})
    }
    jwt.verify(token,SECRET_KEY,(err,user)=>{
        if(err){
            return res.send({message:"Invalid Token"})
        }else{
            next();
        }
    })
    // return jwt.verify(token,SECRET_KEY);
}


async function hashPassword(password: string): Promise<string> {
    // console.log("passwo",password)
    return bcrypt.hashSync(password,10);
}

async function comparePassword(password: string, hashPassword: string): Promise<boolean> {
    // console.log("com passWorD",password)
    return bcrypt.compareSync(password,hashPassword);
}

export {generateToken, verifyToken, hashPassword, comparePassword}