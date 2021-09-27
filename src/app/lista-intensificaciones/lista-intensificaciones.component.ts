import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IntensificacionComponent } from './intensificacion/intensificacion.component';

@Component({
  selector: 'app-lista-intensificaciones',
  templateUrl: './lista-intensificaciones.component.html',
  styleUrls: ['./lista-intensificaciones.component.css']
})
export class ListaIntensificacionesComponent implements AfterViewInit {

  @ViewChild(IntensificacionComponent) private intComponent!: IntensificacionComponent;
  flag=false;
  constructor() { 
  }
  ngAfterViewInit(){
  }
  
  abrirIntensificacion(inte:string){
    this.flag=true;
    this.intComponent.actualizarInterfaz(inte);
  }
}
