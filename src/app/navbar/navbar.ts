import { Component, Input } from '@angular/core';
import { TitleCasePipe, CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router'; // Import manquant ici

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TitleCasePipe, RouterLink, RouterLinkActive], // Ajout ici
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar { 
  @Input({ required: true }) title! : string
}