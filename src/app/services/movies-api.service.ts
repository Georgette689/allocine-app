import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie'; // Vérifie l'import de ton interface

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {
  private readonly httpClient = inject(HttpClient);
  private readonly url = "http://localhost:8080/movies";

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.url);
  }

  deleteMovie(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  // AJOUTE CETTE MÉTHODE ICI 👇
  addMovie(movie: any): Observable<any> {
    return this.httpClient.post<any>(this.url, movie);
  }
}