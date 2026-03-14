import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../../app/data';
import { CapitalizePipe } from '../../app/pipes/capitalize-pipe';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, CapitalizePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  skills: string[] = [];

  constructor(private dataService: DataService) {
    this.skills = this.dataService.getSkills();
  }

}