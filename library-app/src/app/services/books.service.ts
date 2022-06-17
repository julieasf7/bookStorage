import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../interface/book';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * addBook
   * 
   * Permite registrar un nuevo libro
   * 
   * @param book Informacion del libro
   */
  addBook(book: Book){
    // Se consulta los datos del item books
    let books = [];
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
   * updateBook
   * 
   * Permite actualizar la informacion de un libro
   * @param book 
   * @param idBook 
   */
  updateBook(book: Book, idBook: number){
    // Se consulta los datos del item books
    let books = JSON.parse(localStorage.getItem('books') || '[]');
    
    // Se elimina registro con el id indicado
    books.splice(
      books.findIndex((m: Book) => m.id == idBook),1
    );

    // Se adiciona la informacion del libro con la informacion actualizada
    book.id = idBook;
    books.push(book);
    
    // Se organiza la informacion
    books = books.sort((a: Book,b: Book) => a.id - b.id);
    
    // Se settea el objeto actualizado con la informacion del libro
    localStorage.setItem('books', JSON.stringify(books));

  }

  /**
   * deleteBook
   * 
   * Permite eliminar un registro por medio del id 
   * 
   * @param idBook 
   */
  deleteBook(idBook: number){
    // Se consulta los datos del item books
    let books = JSON.parse(localStorage.getItem('books') || '[]');
    
    // Se elimina registro con el id indicado
    books.splice(
      books.findIndex((m: Book) => m.id == idBook),1
    );

    // Se settea el objeto actualizado con la informacion del libro
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

  /**
   * getForId
   * 
   * Permite consultar la informacion de un libro por el id
   * 
   * @param idBook 
   * @returns 
   */
  getForId(idBook: number){
    let books = [];
    let currentBook = [];

    // Se consulta los datos del item books
    books = JSON.parse(localStorage.getItem('books') || '[]');

    if(books.length > 0){
      currentBook = books.find(
        (m: Book) => m.id == idBook
      );
    }

    if(typeof currentBook !== 'undefined'){
      return currentBook;
    } else {
      return null;
    }
  }

  /**
   * getBookSearch
   * 
   * Permite buscar un libro en especifico por el nombre
   * @param bookName 
   * @returns 
   */
  getBookSearch(bookName: string){
    let books     = [];
    let booksList = [];

    // Se consulta los datos del item books
    books = JSON.parse(localStorage.getItem('books') || '[]');

    if(books.length > 0){
      // Se busca el libro en la DB local
      booksList = books.filter(
        (m: Book) => m.title == bookName
      );
    }
    
    return booksList;
  }

  getBookApi(bookName: string){
    return this.http
      .get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`)
      .pipe(
        map(
          (result:any) => result.items
        )
      );
  }

  getBookForIdApi(bookId: string){
    return this.http.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
  }
}
