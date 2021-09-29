import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AsignaturaService } from '../asignatura.service';
import { IntensificacionComponent } from './intensificacion/intensificacion.component';

@Component({
  selector: 'app-lista-intensificaciones',
  templateUrl: './lista-intensificaciones.component.html',
  styleUrls: ['./lista-intensificaciones.component.css']
})
export class ListaIntensificacionesComponent implements OnInit {

  @ViewChild('intensificacionId',{static:false}) intComponent!: IntensificacionComponent;
  flag=false;
  intens:any;
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
  }
    
  abrirIntensificacion(inte:string){
    this.flag=true;
    this.intComponent.actualizarInterfaz(inte);
  }
  
  
}
