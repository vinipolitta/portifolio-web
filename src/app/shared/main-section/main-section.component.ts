import { Component, OnInit } from '@angular/core';

import ScrollReveal from 'scrollreveal';
import { AboutMeService } from 'src/app/services/aboutMeService/about-me.service';

import Typed from 'typed.js';
import { Perfil } from '../types/perfil';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {

  public textBtn = "Dowload  CV"

  public profile!: Perfil;

  // public me = {
  //   name: "Vinicius Politta",
  //   me: 'Olá! Me chamo Vinicius, um desenvolvedor de software experiente com 7 anos de experiência na área.\
  //   Minha jornada teve início com curiosidade e amor pela tecnologia, evoluindo para uma paixão \
  //   profunda pelo desenvolvimento de software.'
  // }

  downloadCv() {
    const link = document.createElement('a');
    link.href = '../../../assets/pdf/Vinicius Politta Curriculo.pdf';
    link.download = 'Vinicius Politta Curriculo.pdf';
    link.click();
  }

  private scrollReveal: any;
  resume!: string;

  constructor(private aboutMeService: AboutMeService) { }

  ngOnInit(): void {
    this.animationScroll();
    this.animationTyped();
    this.getInfoService();

  }

  getInfoService() {
    this.profile = this.aboutMeService.myProfile
    this.resume = this.aboutMeService.resume
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
