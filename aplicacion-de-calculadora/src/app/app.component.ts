import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicacion de Calculadora';
  resultadoPadre: number;

  procesarResultado(resultado: number){
    this.resultadoPadre = resultado;
  }
  
  
  
}
