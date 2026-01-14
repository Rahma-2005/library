import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book } from '../interface/book';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class BookService {

  private http=inject(HttpClient)


  public booksList:Book[]=[]

getBooksList(): Observable<{ works: Book[] }> {
return this.http.get<{ works: Book[] }>('https://openlibrary.org/subjects/computers.json');
}


  getBookById(id:string):Observable<any>{
     return this.http.get(`https://openlibrary.org${id}.json`);
  }
  
getBookByTitle(title: string): Observable<Book[]> {
  return this.getBooksList().pipe(
    map((response: any) => response.works), // extraire le tableau de livres
    map((books: Book[]) =>
      books.filter(book =>
        book.title.toLowerCase().includes(title.toLowerCase())
      )
    )
  );
}

getBookByAnnee(annee: number): Observable<Book[]> {
  return this.getBooksList().pipe(
    map((response: any) => response.works), 
    map((books: Book[]) =>
      books.filter(book =>
        book.first_publish_year === annee
      )
    )
  );
}
}
  

