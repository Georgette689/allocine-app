import { Component, inject, OnInit } from '@angular/core'; // 1. Vérifie l'import de OnInit
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router'; // 2. Important pour le bouton ajouter
import { MoviesApiService } from '../services/movies-api.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, DatePipe, RouterLink], // 3. Indispensable pour que routerLink fonctionne
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.scss'
})
export class MoviesList implements OnInit {
  private movieService = inject(MoviesApiService);
  movies: Movie[] = [];

  // 4. La méthode ngOnInit est OBLIGATOIRE si tu as mis "implements OnInit"
  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

  deleteMovie(id: number) {
    if(confirm('Voulez-vous supprimer ce film ?')) {
      this.movieService.deleteMovie(id).subscribe(() => {
        this.loadMovies(); // Recharge la liste après suppression
      });
    }
  }
}