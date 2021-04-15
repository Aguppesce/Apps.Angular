import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.modelo';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoService } from '../ingreso/ingreso.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit{
 
  tipo:string = "ingresoOperacion";
  nombreInput:string;
  precioInput:number;
  
  constructor(private ingresoServicio: IngresoService,
              private egresoServicio: EgresoService){ }

  ngOnInit():void { }
  
  tipoOperacion(evento){
    this.tipo = evento.target.value;
  }
  
  agregarValor(){
    if(this.tipo === "ingresoOperacion")
      this.ingresoServicio.ingresos.push(new Ingreso(this.nombreInput, this.precioInput));
    else
    this.egresoServicio.egresos.push(new Egreso(this.nombreInput, this.precioInput))
  }
}
