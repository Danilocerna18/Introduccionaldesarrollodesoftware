import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Aboutme } from '../components/aboutme/aboutme';
import { Contact } from '../components/contact/contact';
import { Cursos } from '../components/cursos/cursos';
import { Educacion } from '../components/educacion/educacion';
import { Experiencia } from '../components/experiencia/experiencia';
import { Home } from '../components/home/home';
import { Skills } from '../components/skills/skills';
import { Proyectos } from '../components/proyectos/proyectos';
import { Personajes } from '../components/personajes/personajes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Aboutme, Contact, Cursos, Educacion, Experiencia, Home, Skills,Proyectos, Personajes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-finalcv');
}
