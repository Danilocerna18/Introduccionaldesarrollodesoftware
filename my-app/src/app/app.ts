/*import { Component } from '@angular/core';

import { HeaderComponent } from '../components/header/header';
import { PerfilComponent } from '../components/perfil/perfil';
import { IdiomasConocimientosComponent } from '../components/idiomas-conocimientos/idiomas-conocimientos';
import { ExperienciaComponent } from '../components/experiencia/experiencia';
import { CursosComponent } from '../components/cursos/cursos';
import { EducacionComponent } from '../components/educacion/educacion';
import { ContactoComponent } from '../components/contacto/contacto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    PerfilComponent,
    IdiomasConocimientosComponent,
    ExperienciaComponent,
    CursosComponent,
    EducacionComponent,
    ContactoComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
*/
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // 👈 ESTO ES LO QUE FALTABA
  templateUrl: './app.html'
})
export class App {}