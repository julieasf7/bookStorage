import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BooksFormComponent } from './components/books-form/books-form.component';
import { BooksSearchComponent } from './components/books-search/books-search.component';
import { BooksHomeComponent } from './components/books-home/books-home.component';
import { BooksListComponent } from './components/books-list/books-list.component';

import { BooksService } from './services/books.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BooksSearchComponent,
    BooksListComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
