import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {

  nombre: string = '';
  resultado: string = '';

  saludar() {
    const hora = new Date().getHours();
    let saludo = '';

    if (hora >= 5 && hora <= 11) {
      saludo = 'Buenos días';
    } else if (hora >= 12 && hora <= 18) {
      saludo = 'Buenas tardes';
    } else {
      saludo = 'Buenas noches';
    }

    if (this.nombre.trim() === '') {
      this.resultado = 'Por favor ingresa tu nombre';
    } else {
      this.resultado = `${saludo}, ${this.nombre}`;
    }
  }

  toggleTema() {
    document.body.classList.toggle('dark');
  }
}
