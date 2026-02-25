/*
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasConocimientos } from './idiomas-conocimientos';

describe('IdiomasConocimientos', () => {
  let component: IdiomasConocimientos;
  let fixture: ComponentFixture<IdiomasConocimientos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdiomasConocimientos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiomasConocimientos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../app/services/data.service';
import { CapitalizePipe } from '../../app/pipes/capitalize.pipe';

@Component({
  selector: 'app-idiomas-conocimientos',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './idiomas-conocimientos.html'
})
export class IdiomasConocimientosComponent {

  skills: string[] = [];

  constructor(private dataService: DataService) {
    this.skills = this.dataService.skills;
  }
}
