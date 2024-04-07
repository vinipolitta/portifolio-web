import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeItem: string = 'home'; // Inicialmente, definimos "Home" como ativo
  isMenuOpen: boolean = false;

  menuItems: string[] = ['home', 'about', 'services', 'portifolio', 'contact'];

  setActive(item: string) {
    this.activeItem = item;
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
