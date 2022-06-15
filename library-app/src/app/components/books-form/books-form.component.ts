import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {

  form!:FormGroup;

  constructor() { }

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
    console.log(this.form.value);
    return false;
  }

}
