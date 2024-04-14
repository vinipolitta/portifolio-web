import { Component, OnInit } from '@angular/core';
import { AboutMeService } from 'src/app/services/aboutMeService/about-me.service';
import { Perfil, ProfileGeneric, Vision } from 'src/app/shared/types/perfil';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {
  profile!: Perfil;
  myJorney!: ProfileGeneric;
  myPassions!: ProfileGeneric;
  myApproach!: ProfileGeneric;
  myVision!: Vision
  resume!: string;

  constructor(private aboutMeService: AboutMeService) { }

  ngOnInit(): void {
    this.profile = this.aboutMeService.getMyProfile();
    this.myJorney = this.aboutMeService.getMyJorney();
    this.myApproach = this.aboutMeService.getMyApproach();
    this.myPassions = this.aboutMeService.getMyPassions();
    this.myVision = this.aboutMeService.getMyVision();
    this.resume = this.aboutMeService.getResume();

  }
}
