import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AsignaturaService } from 'src/app/servicios/asignatura.service';
import { AsignaturaComponent } from './asignatura/asignatura.component';

@Component({
  selector: 'app-intensificacion',
  templateUrl: './intensificacion.component.html',
  styleUrls: ['./intensificacion.component.css']
})
export class IntensificacionComponent implements OnInit {
  
  @ViewChild('asignaturaId',{static:false}) asigComponent!: AsignaturaComponent;
  intens: any;
  flag2=false;
  constructor(private asignaturaService:AsignaturaService, private route: ActivatedRoute) {
    
   }
  ngOnInit(){
    this.route.params.subscribe(
      (params:Params)=>{
        console.log(params);
       
        })
      
  }

  public actualizarInterfaz(intensificacion:string){
    return this.asignaturaService.getIntensificacion(intensificacion).subscribe((intens: any)=>{
      this.intens=intens;
      
    })
     
  }
  abrirAsignatura(asig:string){
    this.flag2=true;
    this.asigComponent.actualizarInterfaz(asig);
  }
 

}


