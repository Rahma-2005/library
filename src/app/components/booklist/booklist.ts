import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { BookService } from '../../services/book-service';
import { Book } from '../../interface/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  imports: [],
  templateUrl: './booklist.html',
  styleUrl: './booklist.css',
})
export class Booklist implements OnInit {
  bookService=inject(BookService)
  router=inject(Router)

  ngOnInit(): void {
      this.bookService.getBooksList().subscribe((data: any) => {
    this.bookService.booksList = data.works; 
  });
  }

navigateTo(id: string) {
  this.router.navigate(['/details'], {
    queryParams: { id }
  });
}

}
