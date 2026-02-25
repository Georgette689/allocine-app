import { Component, Input } from '@angular/core'; // On regroupe les imports Angular
import { Movie } from '../../models/movie'; // On importe le modèle (indispensable !)

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  // Vérifie bien le nom du fichier ci-dessous :
  templateUrl: './movie-card.html', 
  styleUrl: './movie-card.scss'
})
export class MovieCardComponent {
  @Input({ required: true }) movie!: Movie;
}