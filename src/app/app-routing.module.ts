import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntensificacionComponent } from './lista-intensificaciones/intensificacion/intensificacion.component';
import { ListaIntensificacionesComponent } from './lista-intensificaciones/lista-intensificaciones.component';


const routes: Routes = [
  { path: 'lista-intensificaciones', component: ListaIntensificacionesComponent },
  {path: 'lista-intensificaiones/:id', component: IntensificacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
