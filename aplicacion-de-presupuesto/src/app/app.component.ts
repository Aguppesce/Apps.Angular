import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.modelo';
import { EgresoService } from './egreso/egreso.service';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoService } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ingresos:Ingreso[]=[];
  egresos:Egreso[]=[];

  constructor(private ingresoServicio:IngresoService,
              private egresoServicio:EgresoService){
                this.ingresos = ingresoServicio.ingresos;
                this.egresos = egresoServicio.egresos;
              }
  getIngresoTotal(){
    let ingresoTotal:number=0;
    this.ingresos.forEach(ingreso =>{
      ingresoTotal = ingresoTotal + ingreso.precio; /*También puede ser ingresoTotal += ingreso.precio*/
    }
    );
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal:number=0;
    this.egresos.forEach(egreso =>{
      egresoTotal = egresoTotal + egreso.precio; /*También puede ser egresoTotal += egreso.precio*/
    }
    );
    return egresoTotal;
  }

  getPorcentajetotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal()-this.getEgresoTotal();
  }
}
