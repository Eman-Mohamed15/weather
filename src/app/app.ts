import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  NavbarComponent } from "./component/navbar/navbar";
import { Footer } from "./component/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent ,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('session-1');
}
