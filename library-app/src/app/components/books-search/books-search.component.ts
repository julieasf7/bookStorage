import { BooksListComponent } from './../books-list/books-list.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.css']
})
export class BooksSearchComponent implements OnInit {
  @Input() bookList !: BooksListComponent;

  form     !: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      search : new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  search(){
    this.bookList.bookSearch(this.form.value.search);
  }

  refresh(){
    this.ngOnInit();
    this.bookList.ngOnInit();
  }

}
