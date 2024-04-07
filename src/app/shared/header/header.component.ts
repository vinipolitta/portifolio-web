import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() btn: string = 'Contact  Me'

  activeItem: string = 'home'; // Inicialmente, definimos "Home" como ativo

  menuItems: string[] = ['home', 'about', 'services', 'portifolio', 'contact'];

  setActive(item: string) {
    this.activeItem = item;
  }
}
