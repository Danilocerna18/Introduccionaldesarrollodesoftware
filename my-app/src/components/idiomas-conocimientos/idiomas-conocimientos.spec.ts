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
