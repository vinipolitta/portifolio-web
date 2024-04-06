import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Repository } from 'src/app/types/repository.inteface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  repository: Repository[] = [];
  constructor(private github: GithubService) { }


  ngOnInit(): void {
    this.github.getRepos().subscribe({
      next: (res) => {
        this.repository = res
        console.log('@@', this.repository);
        this.repository.forEach(res => console.log("$$$", res.languages_url))

      }
    })
  }


}
