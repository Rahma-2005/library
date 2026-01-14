import { Routes } from '@angular/router';
import { Booklist } from './components/booklist/booklist';
import { BookDetails } from './components/book-details/book-details';

export const routes: Routes = [
    {path:'',component:Booklist},
    {path:'details' , component:BookDetails},
    {path:'**' , component:Booklist}
];
