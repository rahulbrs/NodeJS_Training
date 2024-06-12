import { Book } from "../models/booksModel";


async function addBook(data:any): Promise<any> {
  return await Book.create(data);
}

async function getAllBooks(): Promise<any> {
  return await Book.findAll();
}

async function getBookById(id:number): Promise<any> {
  return await Book.findByPk(id);
}

async function updateBook(id:number, data: any): Promise<any> {
  const book = await Book.findByPk(id);
  if(book){
    return await book.update(data);
  }
  return null;
}

async function deleteBook(id:number): Promise<any> {
  const book = await Book.findByPk(id);
  if(book){
    await book.destroy();
    return true 
  }
  return false;
}

export {addBook, getAllBooks, getBookById, updateBook, deleteBook};