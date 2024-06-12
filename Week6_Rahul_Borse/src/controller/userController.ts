import { Request, Response } from "express";
import { registerUser, loginUser, getUserById } from "../service/userService";

export const userRegister = async(req:Request, res: Response)=>{
    const data = req.body;
    const user = await registerUser(data);
    console.log(user)
    res.status(201).json(user);
}

export const userLogin = async(req:Request, res: Response)=>{
    const {username, password} = req.body;
    const user = await loginUser(username, password);
    if(user){
      console.log(user)
      return res.status(200).json(user);
      }
    res.status(401).json("Invalid Credentials");
}

export const getUserByID = async(req:Request, res: Response)=>{
    const id = Number(req.body.id);
    const user = await getUserById(id);
    console.log(user)
    res.status(201).json(user);
}
