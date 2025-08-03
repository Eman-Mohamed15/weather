import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  menuOpen = false;
  activePath = '';

  navLinks = [
    { path: '/about', label: 'ABOUT' },
    { path: '/portfolio', label: 'PORTFOLIO' },
    { path: '/contact', label: 'CONTACT' }
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  setActive(path: string) {
    this.activePath = path;
   
  }
}
