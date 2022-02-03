import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { AsignaturaService } from '../servicios/asignatura.service';
import { DirectorService } from '../servicios/director.service';
import { LoginService } from '../servicios/login.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-editar-opinion',
  templateUrl: './editar-opinion.component.html',
  styleUrls: ['./editar-opinion.component.css']
})
export class EditarOpinionComponent implements OnInit {

  valoraciones: any;
  inteId:any
  asigId:any
  valoracionId:any
  currentRate:number =0
  dateNow:any
  comentario:any
  puntuacion:any
  directorId:any

  constructor(config: NgbRatingConfig,
    private directorService: DirectorService,
    private asignaturaService: AsignaturaService,
    private route:ActivatedRoute ,
    private loginService:LoginService,
    private router: Router,
    private location: Location
    ) { 
    config.max = 5;
    
    config.readonly = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        console.log(params)
        this.inteId = params.inteId
        this.asigId = params.asigId
        this.valoracionId = params.id
        this.directorId = params.directId
    })

   this.dateNow = new Date()

   this.route.params.subscribe(
    (params:Params)=>{
      console.log(params)
      this.asignaturaService.getValoraciones(params.id).subscribe((valoraciones: any)=>{
        this.valoraciones=valoraciones;
        for(let valor of this.valoraciones){
          this.comentario= valor.comentario
          this.puntuacion = valor.puntuacion
        }
      }

    )})

    
    
   
     
  /* var total = 0;
  for (var i=0; i<; i++) {
    total +=;
  }
    var suma = total;
    return suma / ; */
  
} 
  
public editComentarioInte( comentario:string, puntuacion:number, inte:string, valoracion:string, fechaMod:Date){
  this.asignaturaService.editValoracionInte(inte, valoracion,comentario, puntuacion, fechaMod, this.loginService.getUserId()).subscribe(()=>{
  }) 
     
    this.location.back()

    
}




  public editComentarioAsig( comentario:string, puntuacion:number, inte:string, asig:string, valoracion:string, fechaMod:Date){
    this.asignaturaService.editValoracionAsig(asig, valoracion,comentario, puntuacion, fechaMod, this.loginService.getUserId()).subscribe(()=>{
    }) 
    
        this.location.back()

     

      
  }

  public editComentarioDirector( directorId:string, valoracionId:string, comentario:string, puntuacion:number,  fechaMod:Date){
    this.directorService.editValoracionDirector(directorId, valoracionId,comentario, puntuacion, fechaMod, this.loginService.getUserId()).subscribe(()=>{
    })
      this.router.navigate(['/lista-directores/director/',directorId,])
    

      
  }

}
