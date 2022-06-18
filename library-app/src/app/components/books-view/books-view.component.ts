import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css']
})
export class BooksViewComponent implements OnInit {

  idBook    : number  = 0;
  idBookApi : string  = '';
  errorMsg  : boolean = false;

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
    if( this.idBookApi !== '' && typeof this.idBookApi !== 'undefined' ){
      this.getInfoApi();
    }

    if( this.idBook !== 0 && typeof this.idBookApi !== 'undefined' ){
      let infoBook = this.booksService.getForId(this.idBook);
      
      if(infoBook !== null){
        this.infoForm = infoBook;
      } else {
        this.errorMsg = true;
      }
    }
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

      this.infoForm = {
        title       : data.volumeInfo.title,
        subtitle    : (data.volumeInfo.subtitle || "N/A"),
        author      : author,
        category    : category,
        date        : data.volumeInfo.publishedDate,
        description : data.volumeInfo.description.replace( /(<([^>]+)>)/ig, '')
      };

    });
  }

}
