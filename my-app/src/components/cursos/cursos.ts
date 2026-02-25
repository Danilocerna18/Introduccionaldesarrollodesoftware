/*import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})
export class CursosComponent {

}
*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../app/services/data.service';
import { CapitalizePipe } from '../../app/pipes/capitalize.pipe';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './cursos.html'
})
export class CursosComponent {

  jobs: string[] = [];

  constructor(private dataService: DataService) {
    this.jobs = this.dataService.jobs;
  }
}