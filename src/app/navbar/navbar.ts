import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../theme-service/theme-service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  @Input({ required: true }) title!: string;

  expanded = false;   // toggle par clic
  hoverMenu = false;  // toggle par hover

  constructor(public themeService: ThemeService, public auth: AuthService) {}

  toggleMenu(): void {
    this.expanded = !this.expanded;
  }

  isExpanded(): boolean {
    return this.expanded || this.hoverMenu;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
