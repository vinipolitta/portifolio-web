import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ScrollReveal from 'scrollreveal';
import { AboutMeService } from 'src/app/services/aboutMeService/about-me.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public about!: string;
  constructor(
    private aboutMeService: AboutMeService,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.getAbout();
  }

  getAbout() {
    this.about = this.aboutMeService.aboutMe;
  }

  teste() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.router.navigate(['/readmore']);
  }

}
