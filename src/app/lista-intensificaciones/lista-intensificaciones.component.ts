import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AsignaturaService } from '../servicios/asignatura.service';
import { AsignaturaComponent } from './intensificacion/asignatura/asignatura.component';
import { IntensificacionComponent } from './intensificacion/intensificacion.component';

@Component({
  selector: 'app-lista-intensificaciones',
  templateUrl: './lista-intensificaciones.component.html',
  styleUrls: ['./lista-intensificaciones.component.css']
})
export class ListaIntensificacionesComponent implements OnInit {

  @ViewChild('intensificacionId',{static:false}) intComponent!: IntensificacionComponent;
  flag=true;
  flag2=false;
  intens:any;
  asigs:any;
  constructor(private asignaturaService: AsignaturaService, private route: ActivatedRoute) { 
  }
  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
          this.asignaturaService.getListaIntensificaciones().subscribe((intens: any) => {
            this.intens = intens;
         
          }
          
          )}
          
    )
    this.route.params.subscribe(
      (params: Params) => {
    this.asignaturaService.getListaAsignaturas().subscribe((asigs: any) => {
      this.asigs = asigs;
   
    }
    )}
    )
  }
  

  
    
  abrirIntensificacion(inte:string){
    this.flag=false;
    this.intComponent.actualizarInterfaz(inte);
  }
  
  
}
