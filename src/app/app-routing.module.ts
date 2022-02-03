import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearOpinionComponent } from './crear-opinion/crear-opinion.component';
import { DirectorComponent } from './director/director.component';
import { EditarOpinionComponent } from './editar-opinion/editar-opinion.component';
import { HomeComponent } from './home/home.component';
import { ListaDirectoresComponent } from './lista-directores/lista-directores.component';
import { AsignaturaComponent } from './lista-intensificaciones/intensificacion/asignatura/asignatura.component';
import { IntensificacionComponent } from './lista-intensificaciones/intensificacion/intensificacion.component';
import { ListaIntensificacionesComponent } from './lista-intensificaciones/lista-intensificaciones.component';
import { ListaOptativasComponent } from './lista-optativas/lista-optativas.component';
import { OptativaComponent } from './lista-optativas/optativa/optativa.component';
import { LoginComponent } from './login/login.component';
import { MuiiComponent } from './muii/muii.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lista-intensificaciones', component: ListaIntensificacionesComponent },
  { path: 'lista-intensificaciones/intensificacion/:id', component: IntensificacionComponent},
  { path: 'lista-intensificaciones/intensificaion/:id/asignaturas', component: IntensificacionComponent },
  { path: 'lista-intensificaciones/intensificacion/:inteId/asignaturas/:id', component: AsignaturaComponent },
  { path: 'lista-intensificaciones/intensificacion/:inteId/nueva-opinion', component: CrearOpinionComponent },
  { path: 'lista-intensificaciones/intensificacion/:inteId/asignaturas/:asigId/nueva-opinion', component: CrearOpinionComponent },
  { path: 'lista-directores/director/:directId/nueva-opinion', component: CrearOpinionComponent },
  { path: 'muii/:asigId/nueva-opinion', component: CrearOpinionComponent },
  { path: 'lista-intensificaciones/intensificacion/:inteId/editar-opinion/:id', component: EditarOpinionComponent },
  { path: 'lista-intensificaciones/intensificacion/:inteId/asignaturas/:asigId/editar-opinion/:id', component: EditarOpinionComponent },
  { path: 'lista-directores/director/:directId/editar-opinion/:id', component: EditarOpinionComponent },
  { path: 'muii/:asigId/editar-opinion/:id', component: EditarOpinionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'lista-directores', component: ListaDirectoresComponent },
  { path: 'lista-directores/director/:directId', component: DirectorComponent },
  { path: 'lista-optativas', component: ListaOptativasComponent },
  { path: 'optativa', component: OptativaComponent },
  { path: 'muii/:id', component: MuiiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
