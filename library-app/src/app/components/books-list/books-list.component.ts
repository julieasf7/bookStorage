import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  rows = [
    { titulo: 'titulo libro', subtitulo: 'subtitulo libro', autor: 'autor libro', categoria: 'categoria libro', fecha: 'fecha libro', descripcion: 'descripcion libro' },
    { titulo: 'titulo libro', subtitulo: 'subtitulo libro', autor: 'autor libro', categoria: 'categoria libro', fecha: 'fecha libro', descripcion: 'descripcion libro' },
    { titulo: 'titulo libro', subtitulo: 'subtitulo libro', autor: 'autor libro', categoria: 'categoria libro', fecha: 'fecha libro', descripcion: 'descripcion libro' },
    { titulo: 'titulo libro', subtitulo: 'subtitulo libro', autor: 'autor libro', categoria: 'categoria libro', fecha: 'fecha libro', descripcion: 'descripcion libro' },
    { titulo: 'titulo libro', subtitulo: 'subtitulo libro', autor: 'autor libro', categoria: 'categoria libro', fecha: 'fecha libro', descripcion: 'descripcion libro' },
    { titulo: 'titulo libro', subtitulo: 'subtitulo libro', autor: 'autor libro', categoria: 'categoria libro', fecha: 'fecha libro', descripcion: 'descripcion libro' },
    { titulo: 'titulo libro', subtitulo: 'subtitulo libro', autor: 'autor libro', categoria: 'categoria libro', fecha: 'fecha libro', descripcion: 'descripcion libro' },
    { titulo: 'titulo libro', subtitulo: 'subtitulo libro', autor: 'autor libro', categoria: 'categoria libro', fecha: 'fecha libro', descripcion: 'descripcion libro' },
    { titulo: 'titulo libro', subtitulo: 'subtitulo libro', autor: 'autor libro', categoria: 'categoria libro', fecha: 'fecha libro', descripcion: 'descripcion libro' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
