import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListaIntensificacionesComponent } from './lista-intensificaciones/lista-intensificaciones.component';
import { IntensificacionComponent } from './lista-intensificaciones/intensificacion/intensificacion.component';
import { ListaOptativasComponent } from './lista-optativas/lista-optativas.component';
import { AsignaturaComponent } from './lista-intensificaciones/intensificacion/asignatura/asignatura.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaIntensificacionesComponent,
    IntensificacionComponent,
    ListaOptativasComponent,
    AsignaturaComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
