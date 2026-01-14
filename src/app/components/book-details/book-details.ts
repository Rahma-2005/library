import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book-service';
import { Book } from '../../interface/book';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-details',
  imports: [DatePipe],
  templateUrl: './book-details.html',
  styleUrl: './book-details.css',
})
export class BookDetails implements OnInit {
  route=inject(ActivatedRoute)
  bookservice=inject(BookService)
  bookid: string | null = null;
  book:Book|null=null
  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
  this.bookid = params['id'];
});
       if (this.bookid) {
    this.bookservice.getBookById(this.bookid).subscribe(
      (data: Book) => {
        console.log(data)
        this.book = data;
      },
    );
  }
  }

}
