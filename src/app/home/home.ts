import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { MoviesApiService } from '../services/movies-api.service';
// 1. Ajoute cet import pour faire le lien avec ton nouveau composant
import { MovieCardComponent } from './movie-card/movie-card'; 

@Component({
  selector: 'app-home',
  standalone: true,
  // 2. Ajoute MovieCardComponent ici pour pouvoir l'utiliser dans le HTML
  imports: [AsyncPipe, DatePipe, MovieCardComponent], 
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  private readonly moviesApi = inject(MoviesApiService);
  movies$: Observable<Movie[]> = this.moviesApi.getMovies();
}
