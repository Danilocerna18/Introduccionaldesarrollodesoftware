import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Header } from '../components/header/header';
import { Aboutme } from '../components/aboutme/aboutme';
import { Contact } from '../components/contact/contact';
import { Cursos } from '../components/cursos/cursos';
import { Educacion } from '../components/educacion/educacion';
import { Experiencia } from '../components/experiencia/experiencia';
import { Home } from '../components/home/home';
import { Skills } from '../components/skills/skills';

export const routes: Routes = [

  { path: 'skills', component: Skills },
  { path: 'aboutme', component: Aboutme },

  {
    path: 'experiencia',
    component: Experiencia,
    children: [
      { path: 'cursos', component: Cursos },
      { path: 'educacion', component: Educacion }
    ]
  },

  { path: '', redirectTo: '/aboutme', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }