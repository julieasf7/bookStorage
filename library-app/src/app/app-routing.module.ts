import { BooksFormComponent } from './components/books-form/books-form.component';
import { BooksHomeComponent } from './components/books-home/books-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksViewComponent } from './components/books-view/books-view.component';

const routes: Routes = [
  {
    path: '',
    component: BooksHomeComponent
  },
  {
    path: 'register',
    component: BooksFormComponent
  },
  {
    path: 'registerApi/:idApi',
    component: BooksFormComponent
  },
  {
    path: 'update/:id',
    component: BooksFormComponent
  },
  {
    path: 'view/:id',
    component: BooksViewComponent
  },
  {
    path: 'viewApi/:idApi',
    component: BooksViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BooksHomeComponent, BooksFormComponent]
