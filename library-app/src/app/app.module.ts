import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BooksFormComponent } from './components/books-form/books-form.component';
import { BooksSearchComponent } from './components/books-search/books-search.component';
import { BooksHomeComponent } from './components/books-home/books-home.component';
import { BooksListComponent } from './components/books-list/books-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BooksFormComponent,
    BooksSearchComponent,
    BooksHomeComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
