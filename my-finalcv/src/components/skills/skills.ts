import { Component } from '@angular/core';
import { NgFor, UpperCasePipe } from '@angular/common';
import { DataService } from '../../app/data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, UpperCasePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  skills: string[] = [];

  constructor(private dataService: DataService) {
    this.skills = this.dataService.getSkills();
  }

}