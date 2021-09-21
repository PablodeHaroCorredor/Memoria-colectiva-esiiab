import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { IngenieriaswComponent } from './ingenieriasw/ingenieriasw.component';
import { IntensificacionesComponent } from './intensificaciones.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppModule } from '../app.module';
import { ComputacionComponent } from './computacion/computacion.component';
import { ComputadoresComponent } from './computadores/computadores.component';
import { TicComponent } from './tic/tic.component';
import { DisenoswComponent } from './ingenieriasw/disenosw/disenosw.component';
import { IngRequisitiosComponent } from './ingenieriasw/ing-requisitios/ing-requisitios.component';
import { SieComponent } from './ingenieriasw/sie/sie.component';
import { CalidadswComponent } from './ingenieriasw/calidadsw/calidadsw.component';
import { GpsComponent } from './ingenieriasw/gps/gps.component';
import { ProcesosIngswComponent } from './ingenieriasw/procesos-ingsw/procesos-ingsw.component';
import { SeguridadSistemasswComponent } from './ingenieriasw/seguridad-sistemassw/seguridad-sistemassw.component';

@NgModule({
  declarations: [
    IngenieriaswComponent,
    IntensificacionesComponent,
    ComputacionComponent,
    ComputadoresComponent,
    TicComponent,
    DisenoswComponent,
    IngRequisitiosComponent,
    SieComponent,
    CalidadswComponent,
    GpsComponent,
    ProcesosIngswComponent,
    SeguridadSistemasswComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppModule]
})
export class IntensificacionesModule { }




