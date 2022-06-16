import { Injectable } from '@angular/core';
import { Book } from '../interface/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  //books!: Book[];

  constructor() { }

  addBook(book: Book){
    let books = [];

    books = JSON.parse(localStorage.getItem('books') || '[]');
    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  getAllBook(){
    let books = [];

    books = JSON.parse(localStorage.getItem('books') || '[]');

    return books;
  }
}
