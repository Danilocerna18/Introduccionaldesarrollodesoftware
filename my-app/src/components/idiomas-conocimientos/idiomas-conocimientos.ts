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
