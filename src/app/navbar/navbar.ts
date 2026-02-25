import { Component, Input } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeService } from '../theme-service/theme-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    TitleCasePipe,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(public themeService: ThemeService) {}  

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  @Input({ required: true }) title!: string;

}