/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [],
  templateUrl: './educacion.html',
  styleUrl: './educacion.css',
})
export class EducacionComponent {

}
*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './educacion.html'
})
export class EducacionComponent {}