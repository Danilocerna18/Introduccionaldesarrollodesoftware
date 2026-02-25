/*
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.html',
  styleUrls: ['./experiencia.css']
})
export class ExperienciaComponent {

  mostrarTabla = true;

  toggleTabla() {
    this.mostrarTabla = !this.mostrarTabla;
  }
}
*/
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './experiencia.html'
})
export class ExperienciaComponent {}