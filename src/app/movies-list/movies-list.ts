import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, DatePipe, RouterLink],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.scss'
})
export class MoviesList implements OnInit {
  private movieService = inject(MoviesApiService);
  movies: Movie[] = [];

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        this.movies = data;
      },
      error: (err) => console.error('Erreur de chargement', err)
    });
  }

  deleteMovie(id: number) {
    if(confirm('Voulez-vous vraiment supprimer ce film de la collection ?')) {
      this.movieService.deleteMovie(id).subscribe(() => {
        this.loadMovies();
      });
    }
  }
}