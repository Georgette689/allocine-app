import { Routes } from '@angular/router';
import { MoviesList } from './movies-list/movies-list'; // Vérifie le chemin
import { AddMovie } from './add-movie/add-movie';     // Vérifie le chemin

export const routes: Routes = [
  { path: 'movies', component: MoviesList },
  { path: 'add-movie', component: AddMovie },
  { path: '', redirectTo: '/movies', pathMatch: 'full' }
];