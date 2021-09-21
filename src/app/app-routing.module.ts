import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngenieriaswComponent } from './intensificaciones/ingenieriasw/ingenieriasw.component';
import { IntensificacionesComponent} from './intensificaciones/intensificaciones.component';

const routes: Routes = [
  { path: 'intensificaciones', component: IntensificacionesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
