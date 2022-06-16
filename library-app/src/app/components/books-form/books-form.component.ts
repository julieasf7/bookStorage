import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {

  form     !: FormGroup;
  idBook    : number  = 0;
  showMsg   : boolean = false;
  errorMsg  : boolean = false;
  titleForm : string  = "Registrar libro" ;
  msgForm   : string  = "";

  constructor(
    public booksService: BooksService,
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe((res)=>{
      if(typeof res['id'] !== 'undefined'){
        this.idBook = parseInt(res['id']);
      }
    });
  }

  ngOnInit(): void {
    let infoForm = {
      title       : '',
      subtitle    : '',
      author      : '',
      category    : '',
      date        : '',
      description : ''
    };
    
    if(this.idBook !== 0 && typeof this.idBook !== 'undefined'){
      this.titleForm  = "Editar libro" ;

      let infoBook = this.booksService.getForId(this.idBook);
      
      if(infoBook !== null){
        infoForm = infoBook;
      } else {
        this.errorMsg = true;
      }
    }
    
    this.form = new FormGroup({
      title       : new FormControl(infoForm.title, Validators.required),
      subtitle    : new FormControl(infoForm.subtitle, Validators.required),
      author      : new FormControl(infoForm.author, Validators.required),
      category    : new FormControl(infoForm.category, Validators.required),
      date        : new FormControl(infoForm.date, Validators.required),
      description : new FormControl(infoForm.description, Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }
  
  submit(){
    if(this.idBook !== 0 && typeof this.idBook !== 'undefined'){
      this.booksService.updateBook(this.form.value, this.idBook);
      this.msgForm = "El libro se actualizo de manera exitosa";
    } else {
      this.booksService.addBook(this.form.value);
      this.msgForm = "El libro se registro de manera exitosa";
      this.ngOnInit();
    }

    this.showMsg= true;
    setTimeout(() => { this.showMsg= false; }, 5000);

    return false;
  }

}
