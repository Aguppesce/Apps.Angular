import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FormsModule } from '@angular/forms';
import { IngresoService } from './ingreso/ingreso.service';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { EgresoService } from './egreso/egreso.service';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    IngresoComponent,
    EgresoComponent,
    CabeceroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresoService, EgresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
