import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book-service';
import { Book } from '../../interface/book';

@Component({
  selector: 'app-searchbar',
  imports: [],
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.css',
})
export class Searchbar {
  bookservice=inject(BookService)
searchBookByTitle(title: string) {
 this.bookservice.getBooksList().subscribe(
    response => this.bookservice.booksList = response.works
      .filter(book =>book.title.toLowerCase().includes(title.toLowerCase()))
  );
}

  searchBookByannee(annee:number){

  }

}
