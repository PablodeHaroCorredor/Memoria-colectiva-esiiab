import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AsignaturaService } from 'src/app/asignatura.service';

@Component({
  selector: 'app-intensificacion',
  templateUrl: './intensificacion.component.html',
  styleUrls: ['./intensificacion.component.css']
})
export class IntensificacionComponent implements OnInit {
  
  intens: any;
  constructor(private asignaturaService:AsignaturaService, private route: ActivatedRoute) {
    
   }
  ngOnInit(){
    this.route.params.subscribe(
      (params:Params)=>{
        console.log(params);
      }
    )
  }

  public actualizarInterfaz(intensificacion:string){
    return this.asignaturaService.getIntensificacion(intensificacion).subscribe((intens: any)=>{
      this.intens=intens;
    })
     
  }
        
}


