import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ListaIntensificacionesComponent } from './lista-intensificaciones/lista-intensificaciones.component';
import { IntensificacionComponent } from './lista-intensificaciones/intensificacion/intensificacion.component';
import { ListaOptativasComponent } from './lista-optativas/lista-optativas.component';
import { AsignaturaComponent } from './lista-intensificaciones/intensificacion/asignatura/asignatura.component';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//app.module.ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaDirectoresComponent } from './lista-directores/lista-directores.component';
import { DirectorComponent } from './director/director.component';
import { OptativaComponent } from './lista-optativas/optativa/optativa.component';
import { MuiiComponent } from './muii/muii.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrearOpinionComponent } from './crear-opinion/crear-opinion.component';
import { EditarOpinionComponent } from './editar-opinion/editar-opinion.component';
//import { TokenInterceptor } from './Internceptors/token.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    ListaIntensificacionesComponent,
    IntensificacionComponent,
    ListaOptativasComponent,
    AsignaturaComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ListaDirectoresComponent,
    DirectorComponent,
    OptativaComponent,
    MuiiComponent,
    CrearOpinionComponent,
    EditarOpinionComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MsalModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent,ListaIntensificacionesComponent,
    IntensificacionComponent,
    ListaOptativasComponent,
    AsignaturaComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ListaDirectoresComponent,
DirectorComponent]
})
export class AppModule { }
