import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BooksSearchComponent } from './components/books-search/books-search.component';
import { BooksListComponent } from './components/books-list/books-list.component';

import { BooksService } from './services/books.service';
import { HttpClientModule } from '@angular/common/http';
import { BooksViewComponent } from './components/books-view/books-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BooksSearchComponent,
    BooksListComponent,
    routingComponents,
    BooksViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
