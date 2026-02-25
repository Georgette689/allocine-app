import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode = false;

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    this.applyTheme();
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }

  private applyTheme(): void {
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    this.darkMode = savedTheme === 'dark';
    this.applyTheme();
  }
}