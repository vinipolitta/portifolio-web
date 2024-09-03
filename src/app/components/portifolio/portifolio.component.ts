// portifolio.component.ts
import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

interface Portifolio {
  img: string;
  name?: string;
  description?: string;
  html_url?: string;
  languages_url?:string;
}

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.scss'],
})
export class PortifolioComponent implements OnInit {
  combinedPortifolio: Portifolio[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.getRepos();
  }

  getRepos() {
    const images: string[] = [
      '../../../assets/images/base-project-1.jpeg',
      '../../../assets/images/base-project-2.jpeg',
      '../../../assets/images/base-project-3.jpeg',
      '../../../assets/images/base-project-4.jpeg',
      '../../../assets/images/base-project-5.jpeg',
      '../../../assets/images/base-project.jpeg',      // Adicione mais URLs de imagens aqui
    ];

    this.githubService.getRepos().subscribe((repos) => {
      console.log(repos);

      this.combinedPortifolio = repos.slice(0, 6).map((repo, index) => ({
        ...repo,
        img: images[index % images.length] // Associa uma imagem a cada repositório
      }));
    });
  }
}
