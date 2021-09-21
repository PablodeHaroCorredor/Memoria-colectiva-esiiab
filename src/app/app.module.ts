import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { IntensificacionesComponent } from './intensificaciones/intensificaciones.component';
import { IntensificacionesModule } from "./intensificaciones/intensificaciones-routing-module";
import { DesarrollodbComponent } from './intensificaciones/ingenieriasw/desarrollodb/desarrollodb.component';

@NgModule({
  declarations: [
    AppComponent,
    IntensificacionesComponent,
    DesarrollodbComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    IntensificacionesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
