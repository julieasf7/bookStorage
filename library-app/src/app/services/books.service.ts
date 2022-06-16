import { Injectable } from '@angular/core';
import { Book } from '../interface/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  //books!: Book[];

  constructor() { }

  /**
   * addBook
   * 
   * Permite registrar un nuevo libro
   * 
   * @param book Informacion del libro
   */
  addBook(book: Book){
    let books = [];

    // Se consulta los datos del item books
    books = JSON.parse(localStorage.getItem('books') || '[]');
    
    // Se genera el id del registro
    if(books.length === 0){
      book.id = 1;
    } else {
      let lastId = books[books.length-1];
      book.id = lastId.id + 1;
    }

    // Se adiciona la informacion del nuevo libro
    books.push(book);

    // Se settea el objeto actualizado con la informacion del nuevo libro
    localStorage.setItem('books', JSON.stringify(books));
  }

  /**
   * getAllBook
   * 
   * Permite consulta la lista de libros registrados
   * 
   * @returns 
   */
  getAllBook(){
    let books = [];

    // Se consulta los datos del item books
    books = JSON.parse(localStorage.getItem('books') || '[]');

    return books;
  }
}
