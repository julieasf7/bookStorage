import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {

  form!:FormGroup;
  showMsg: boolean = false;

  constructor(
    public booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title       : new FormControl('', Validators.required),
      subtitle    : new FormControl('', Validators.required),
      author      : new FormControl('', Validators.required),
      category    : new FormControl('', Validators.required),
      date        : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }
  
  submit(){
    this.booksService.addBook(this.form.value);
    this.ngOnInit();

    this.showMsg= true;
    setTimeout(() => { this.showMsg= false; }, 5000);

    return false;
  }

}
