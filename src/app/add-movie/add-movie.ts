import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Indispensable !
import { Router, RouterLink } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink], // ReactiveFormsModule doit être ici
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.scss'
})
export class AddMovie {
  private fb = inject(FormBuilder);
  private movieService = inject(MoviesApiService);
  private router = inject(Router);

  // Déclaration du formulaire pour ton HTML
  movieForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    director: ['', [Validators.required]],
    releaseDate: ['', Validators.required],
    rate: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
    synopsis: ['', [Validators.required, Validators.minLength(30)]],
    image: ['']
  });

  // La fonction qui gère le clic sur ton bouton "ENREGISTRER"
  onSubmit() {
    if (this.movieForm.valid) {
      this.movieService.addMovie(this.movieForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
