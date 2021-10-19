import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListaIntensificacionesComponent } from './lista-intensificaciones/lista-intensificaciones.component';
import { IntensificacionComponent } from './lista-intensificaciones/intensificacion/intensificacion.component';
import { ListaOptativasComponent } from './lista-optativas/lista-optativas.component';
import { AsignaturaComponent } from './lista-intensificaciones/intensificacion/asignatura/asignatura.component';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
//app.module.ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export function MSALInstanceFactory(): IPublicClientApplication{
  return new PublicClientApplication({
    auth:{
      clientId:'4a9632db-6787-4119-983a-53a56b01a5bb',
      redirectUri:'http://localhost:4200'
    }
  })
}


@NgModule({
  declarations: [
    AppComponent,
    ListaIntensificacionesComponent,
    IntensificacionComponent,
    ListaOptativasComponent,
    AsignaturaComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MsalModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide:MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
