import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portfolio',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class PortfolioComponent {
  portfolioImages: string[] = [
  'assets/images/poert1.png',
  'assets/images/port2.png',
  'assets/images/port3.png',
  'assets/images/poert1.png',
  'assets/images/port2.png',
  'assets/images/port3.png',
  ];

  selectedImage: string | null = null;

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
