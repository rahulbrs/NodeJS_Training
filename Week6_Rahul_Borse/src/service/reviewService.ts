import { Review } from "../models/ReviewModel";

async function getReviewByBookId(bookId:number): Promise<any> {
  return await Review.findAll({where:{bookId}});
}

async function addReview(userId:number, bookId: number, content: string): Promise<any> {
  return await Review.create({userId, bookId, content});
}

async function deleteReview(id: number, userId:number): Promise<any> {
  const review = await Review.findByPk(id);
  if(review){
    if(review.userId === userId){
      await review.destroy();
      return true;
    }
    return false;
  }
  return false;
}

export {getReviewByBookId, addReview, deleteReview};