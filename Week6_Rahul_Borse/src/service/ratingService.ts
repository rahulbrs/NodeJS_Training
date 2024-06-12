import { Rating } from "../models/RatingModel";

async function getRatingByBookId(bookId:number): Promise<any> {
  return await Rating.findAll({where:{bookId}});
}

async function addRating(userId:number, bookId: number, rating: number): Promise<any> {
  return await Rating.create({userId, bookId, rating});
}


export {getRatingByBookId, addRating};