import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickmortyService } from '../../app/services/rickmorty';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personajes.html',
  styleUrl: './personajes.css'
})
export class Personajes {

  characters: any[] = [];

  constructor(private rickmortyService: RickmortyService) {}

  ngOnInit(){

    this.rickmortyService.getCharacters().subscribe(data => {

      this.characters = data.results.slice(0,3);

    });

  }

}