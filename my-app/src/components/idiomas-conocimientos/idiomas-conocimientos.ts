/*
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-idiomas-conocimientos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './idiomas-conocimientos.html',
  styleUrls: ['./idiomas-conocimientos.css']
})
export class IdiomasConocimientosComponent {

  buscador: string = '';

  conocimientos = [
    'HTML (intermedio)',
    'Python (alto)',
    'Circuitos (alto)',
    'Infraestructura (intermedio)'
  ];
}
  */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../app/services/data.service';

@Component({
  selector: 'app-idiomas-conocimientos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './idiomas-conocimientos.html'
})
export class IdiomasConocimientosComponent {

  skills: string[] = [];  

  constructor(private dataService: DataService) {
    this.skills = this.dataService.skills;
  }

}