import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() operacionCreada = new EventEmitter<number>();
  operandoA: number;
  operandoB: number;
  
  sumar():void{
    let resultado = this.operandoA + this.operandoB;
    this.operacionCreada.emit(resultado);
   }

} 
