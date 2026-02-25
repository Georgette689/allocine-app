import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Router, RouterLink } from '@angular/router'; 
import { MoviesApiService } from '../services/movies-api.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], 
  templateUrl: './movie-form.html'
})
export class MovieForm {
  private movieService = inject(MoviesApiService);
  private router = inject(Router);

  // Objet calé sur ton serveur Java
  newMovie: Movie = { 
    title: '', 
    rate: 5,           // Changé 'note' en 'rate'
    releaseDate: '',   
    duration: '',      
    synopsis: '',
    image: 'https://via.placeholder.com/150', 
    director: 'Inconnu'
  };

  onSubmit() {
    this.movieService.addMovie(this.newMovie).subscribe({
      next: () => {
        console.log("Film ajouté !");
        this.router.navigate(['/movies']); // Redirection automatique
      },
      error: (err) => {
        console.error("Erreur d'ajout :", err);
        alert("Le serveur a refusé l'ajout. Vérifie la console Java.");
      }
    });
  }
}