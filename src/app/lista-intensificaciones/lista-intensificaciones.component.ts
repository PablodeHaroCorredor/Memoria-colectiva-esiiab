import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { IntensificacionComponent } from './intensificacion/intensificacion.component';

@Component({
  selector: 'app-lista-intensificaciones',
  templateUrl: './lista-intensificaciones.component.html',
  styleUrls: ['./lista-intensificaciones.component.css']
})
export class ListaIntensificacionesComponent implements AfterViewInit {

  @ViewChildren(IntensificacionComponent) intComponent!: IntensificacionComponent;
  flag=false;
  inte:string ="";
  constructor() { 
  }
  ngAfterViewInit(){
    this.abrirIntensificacion(this.inte);
  }

  abrirIntensificacion(inte:string){
    this.flag=true;
    this.intComponent.actualizarInterfaz(inte);
  }
  
  
}
