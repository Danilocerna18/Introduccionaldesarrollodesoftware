import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../../app/data';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class Cursos {

  jobs: string[] = [];

  constructor(private dataService: DataService) {
    this.jobs = this.dataService.getJobs();
  }

}