import { Component, OnInit, Input } from '@angular/core';
import { Egreso } from './egreso.modelo';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos: Egreso[]=[];
  @Input() ingresoTotal:number;

  constructor(private egresoService: EgresoService) { }

  ngOnInit(): void{
    this.egresos = this.egresoService.egresos;
   }

  eliminarEgreso(egreso: Egreso){
    this.egresoService.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso){
    return egreso.precio/this.ingresoTotal; 
  }
}
