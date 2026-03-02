import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar'; // <- ici c'est Navbar, pas NavbarComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar], // <- exactement le nom exporté
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
