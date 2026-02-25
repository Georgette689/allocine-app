import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { HomeComponent } from "./home/home"; // 1. Change Home en HomeComponent ici
import { ThemeService } from './theme-service/theme-service';

@Component({
  selector: 'app-root',
  standalone: true, // Assure-toi que standalone est bien là
  imports: [RouterOutlet, Navbar, HomeComponent,ThemeService], // 2. Change Home en HomeComponent ici
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('douceur');
}
