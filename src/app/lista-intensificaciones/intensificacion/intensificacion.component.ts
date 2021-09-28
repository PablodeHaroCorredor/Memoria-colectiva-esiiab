import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AsignaturaService } from 'src/app/asignatura.service';

@Component({
  selector: 'app-intensificacion',
  templateUrl: './intensificacion.component.html',
  styleUrls: ['./intensificacion.component.css']
})
export class IntensificacionComponent implements AfterViewInit {
  [x: string]: any;

  intensificaciones:any;
  constructor(private asignaturaService:AsignaturaService, private route: ActivatedRoute) {
    this.intensificaciones=[null];
   }
  ngAfterViewInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        console.log(params);
      }
    )
  }

  actualizarInterfaz(intensificacion:string){
    return this.asignaturaService.getIntensificacion(intensificacion).subscribe((intensificaciones:any)=>{
      this.intensificaciones=intensificaciones;
    })
     
  }
        
}


