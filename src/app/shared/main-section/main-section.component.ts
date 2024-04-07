import { Component, OnInit } from '@angular/core';

import ScrollReveal from 'scrollreveal';

import Typed from 'typed.js';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {
  public textBtn = "Dowload  CV"

  private scrollReveal: any;
  ngOnInit(): void {
    this.animationScroll();
    this.animationTyped();

  }

  animationScroll() {
    this.scrollReveal = ScrollReveal({
      // reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200,
    });
  }

  animationTyped() {
    const typed = new Typed('.multipe-text', {
      strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'Design Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    });
  }

  ngAfterViewInit() {
    // Exemplo: animar um elemento com a classe '.seu-elemento'
    ScrollReveal().reveal('.home-content,  .heading', { origin: 'top' })
    ScrollReveal().reveal('.home-img, .services-container, .portifolio-box, .contact form', { origin: 'bottom' })
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' })
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' })
  }
}
