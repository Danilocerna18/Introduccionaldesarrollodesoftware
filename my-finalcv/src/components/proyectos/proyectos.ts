import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../app/services/github';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],   // 👈 ESTA LINEA
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {

  repos: any[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit() {

    this.githubService.getRepos().subscribe(data => {
      console.log(data);
      this.repos = data;

    });

  }

}