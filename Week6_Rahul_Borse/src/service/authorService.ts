import { Author } from "../models/AuthorModel";

async function addAuthor(data:any): Promise<any> {
  return await Author.create(data);
}

async function getAllAuthors(): Promise<any> {
  return await Author.findAll();
}

async function getAuthorById(id:number): Promise<any> {
  return await Author.findByPk(id);
}

async function updateAuthor(id:number, data: any): Promise<any> {
  const author = await Author.findByPk(id);
  if(author){
    return await author.update(data);
  }
  return null;
}

async function deleteAuthor(id:number): Promise<any> {
  const author = await Author.findByPk(id);
  if(author){
    await author.destroy();
    return true 
  }
  return false;
}

export {addAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor};