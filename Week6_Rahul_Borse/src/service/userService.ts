import { User } from "../models/UserModel";
import { comparePassword, generateToken, hashPassword } from "../utils/auth";


async function registerUser(data:any): Promise<any> {
  const {password} = data.body;
  const hashedPassword = await hashPassword(password);
  const user = await User.create({...data, password: hashedPassword})
  return user;
}

async function loginUser(username:string, password: string): Promise<any> {
  // const {password} = data.body;
  const user = await User.findOne({where: {username}})
  if(user){
    const isAuth = await comparePassword(password, user.password);
    if(isAuth){
      const token = await generateToken(user.id, user.username);
      return {user, token};
    }
    return null;
  }
  return null;
}

async function getUserById(id: number): Promise<any> {
  return await User.findByPk(id);
}

export {registerUser, loginUser, getUserById};