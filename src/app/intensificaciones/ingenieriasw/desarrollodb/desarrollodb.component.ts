import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AsignaturaService } from 'src/app/asignatura.service';

@Component({
  selector: 'app-desarrollodb',
  templateUrl: './desarrollodb.component.html',
  styleUrls: ['./desarrollodb.component.css']
})
export class DesarrollodbComponent implements OnInit {
  
  asignaturas: any[];
  codigo: number;
  constructor(private asignaturasService: AsignaturaService, private route:ActivatedRoute) {
    this.codigo = 42328;
    this.asignaturas = [];
   }
  
  ngOnInit(){
    this.route.params.subscribe(
      (params:Params)=>{
        console.log(params);
      }
    )

     this.asignaturasService.getAsignaturas().subscribe((asignaturas: any) =>{
      this.asignaturas = asignaturas;
    }) 
  }

}
