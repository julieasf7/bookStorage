import { Book } from './../../interface/book';
import { Component, OnInit } from '@angular/core';

import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  rows: Book[] = [];
  dataApi: boolean = false;

  constructor(
    public booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.rows = this.booksService.getAllBook();
  }

  bookSearch(bookName : string){
    this.rows = this.booksService.getBookSearch(bookName);
    
    if(this.rows.length <= 0){
      let books: Book[] = [];
      this.dataApi = true;
      
      this.booksService.getBookApi(bookName).subscribe(data => {
        data.forEach((data:any) => {
          let category = 'N/A';
          if(data.volumeInfo.categories){
            category = data.volumeInfo.categories.toString();
          }

          let author = 'N/A';
          if(data.volumeInfo.authors){
            author = data.volumeInfo.authors.toString();
          }

          let obj = {
            id          : data.id,
            title       : data.volumeInfo.title,
            subtitle    : (data.volumeInfo.subtitle || "N/A"),
            author      : author,
            category    : category,
            date        : data.volumeInfo.publishedDate,
            description : data.volumeInfo.description
          };

          books.push(obj);
        })

        this.rows = books;
      });
      
    }
  }

  delete(idBook : number){
    this.booksService.deleteBook(idBook);
    this.ngOnInit();
  }

}
