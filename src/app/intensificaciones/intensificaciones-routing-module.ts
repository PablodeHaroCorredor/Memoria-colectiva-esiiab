import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesarrollodbComponent } from './ingenieriasw/desarrollodb/desarrollodb.component';
import { IngenieriaswComponent } from './ingenieriasw/ingenieriasw.component';

const routes: Routes = [
 
  { path: 'ingenieriasw', component: IngenieriaswComponent },
  { path: 'desarrollodb', component: DesarrollodbComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class IntensificacionesModule { }
