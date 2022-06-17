import { lastValueFrom, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {

  form     !: FormGroup;
  idBook    : number  = 0;
  idBookApi : string  = '';
  showMsg   : boolean = false;
  errorMsg  : boolean = false;
  titleForm : string  = "Registrar libro" ;
  msgForm   : string  = "";

  infoForm = {
    title       : '',
    subtitle    : '',
    author      : '',
    category    : '',
    date        : '',
    description : ''
  };

  constructor(
    public booksService: BooksService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.activatedRoute.params.subscribe((res)=>{
      if(typeof res['id'] !== 'undefined'){
        this.idBook = parseInt(res['id']);
      }

      if(typeof res['idApi'] !== 'undefined'){
        this.idBookApi = res['idApi'];
      }
    });
  }

  ngOnInit(): void {
    this.infoForm = {
      title       : '',
      subtitle    : '',
      author      : '',
      category    : '',
      date        : '',
      description : ''
    };
    
    if( this.idBook !== 0 && typeof this.idBook !== 'undefined' ){
      this.titleForm  = "Editar libro" ;

      let infoBook = this.booksService.getForId(this.idBook);
      
      if(infoBook !== null){
        this.infoForm = infoBook;
      } else {
        this.errorMsg = true;
      }
    }

    if( this.idBookApi !== '' && typeof this.idBookApi !== 'undefined' ){
      this.getInfoApi();
    }

    this.form = new FormGroup({
      title       : new FormControl(this.infoForm.title, Validators.required),
      subtitle    : new FormControl(this.infoForm.subtitle, Validators.required),
      author      : new FormControl(this.infoForm.author, Validators.required),
      category    : new FormControl(this.infoForm.category, Validators.required),
      date        : new FormControl(this.infoForm.date, Validators.required),
      description : new FormControl(this.infoForm.description, Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }
  
  private getInfoApi(){
    this.booksService.getBookForIdApi(this.idBookApi).subscribe((data:any) => {
      let category = 'N/A';
      if(data.volumeInfo.categories){
        category = data.volumeInfo.categories.toString();
      }

      let author = 'N/A';
      if(data.volumeInfo.authors){
        author = data.volumeInfo.authors.toString();
      }

      this.form = new FormGroup({
        title       : new FormControl(data.volumeInfo.title, Validators.required),
        subtitle    : new FormControl((data.volumeInfo.subtitle || "N/A"), Validators.required),
        author      : new FormControl(author, Validators.required),
        category    : new FormControl(category, Validators.required),
        date        : new FormControl(data.volumeInfo.publishedDate, Validators.required),
        description : new FormControl(data.volumeInfo.description.replace( /(<([^>]+)>)/ig, ''), Validators.required)
      });
    });
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

    if( this.idBookApi !== '' && typeof this.idBookApi !== 'undefined' ){
      this.router.navigate(['/']);
    } 
    
    return false;
  }

}
