import { Routes } from '@angular/router';

import { PerfilComponent } from '../components/perfil/perfil';
import { IdiomasConocimientosComponent } from '../components/idiomas-conocimientos/idiomas-conocimientos';
import { ExperienciaComponent } from '../components/experiencia/experiencia';
import { CursosComponent } from '../components/cursos/cursos';
import { EducacionComponent } from '../components/educacion/educacion';

export const routes: Routes = [
  { path: 'about', component: PerfilComponent },

  { path: 'skills', component: IdiomasConocimientosComponent },

  {
    path: 'experience',
    component: ExperienciaComponent,
    children: [
      { path: 'jobs', component: CursosComponent },
      { path: 'studies', component: EducacionComponent }
    ]
  },

  { path: '', redirectTo: 'about', pathMatch: 'full' }
];