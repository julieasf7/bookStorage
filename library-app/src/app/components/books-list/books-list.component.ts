import { Component, OnInit } from '@angular/core';

import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  rows = [];

  constructor(
    public booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.rows = this.booksService.getAllBook();
  }

  bookSearch(bookName : string){
    this.rows = this.booksService.getBookSearch(bookName);
  }

  delete(idBook : number){
    this.booksService.deleteBook(idBook);
    this.ngOnInit();
  }

}
