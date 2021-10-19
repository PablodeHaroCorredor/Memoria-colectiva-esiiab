import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AsignaturaComponent } from './lista-intensificaciones/intensificacion/asignatura/asignatura.component';
import { IntensificacionComponent } from './lista-intensificaciones/intensificacion/intensificacion.component';
import { ListaIntensificacionesComponent } from './lista-intensificaciones/lista-intensificaciones.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lista-intensificaciones', component: ListaIntensificacionesComponent },
  {path: 'lista-intensificaiones/:id', component: IntensificacionComponent},
  { path: 'lista-intensificaiones/:id/asignaturas', component: IntensificacionComponent },
  { path: 'lista-intensificaiones/:id/asignaturas/:id', component: AsignaturaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
