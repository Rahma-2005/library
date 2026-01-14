import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headbar } from "./components/headbar/headbar";
import { Searchbar } from "./components/searchbar/searchbar";
import { Booklist } from "./components/booklist/booklist";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Headbar, Searchbar, Booklist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('open-library-app');
}
