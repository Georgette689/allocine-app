import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.scss'
})
export class AddMovie {
  private moviesApi = inject(MoviesApiService);
  private router = inject(Router);

  movie: Movie = {
    title: '',
    director: '',
    releaseDate: '', 
    synopsis: '',
    duration: '',      // <--- AJOUTE CETTE LIGNE
    id: undefined,
    rate: 5, 
    image: 'https://via.placeholder.com/150'
};

  addMovie(): void {
    this.moviesApi.addMovie(this.movie).subscribe({
      next: () => {
        console.log("Film ajouté !");
        this.router.navigate(['/movies']); // Redirige vers la liste
      },
      error: (err) => console.error("Erreur :", err)
    });
  }
}