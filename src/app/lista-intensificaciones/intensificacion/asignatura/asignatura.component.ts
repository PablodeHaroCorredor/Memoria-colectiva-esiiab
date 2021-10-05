import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/asignatura.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {

  asigs:any;
  constructor(private asignaturaService:AsignaturaService) { }

  ngOnInit(): void {
  }


  public actualizarInterfaz(asignatura:string){
    return this.asignaturaService.getAsignatura(asignatura).subscribe((asigs: any)=>{
      this.asigs=asigs;
      
    })
     
  }
}
