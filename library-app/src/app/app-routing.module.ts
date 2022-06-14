import { BooksFormComponent } from './components/books-form/books-form.component';
import { BooksHomeComponent } from './components/books-home/books-home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BooksHomeComponent
  },
  {
    path: 'register',
    component: BooksFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BooksHomeComponent, BooksFormComponent]
