import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { AsignaturaService } from '../servicios/asignatura.service';
import { DirectorService } from '../servicios/director.service';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-crear-opinion',
  templateUrl: './crear-opinion.component.html',
  styleUrls: ['./crear-opinion.component.css']
})
export class CrearOpinionComponent implements OnInit {
  valoraciones: any;
  inteId:any
  asigId:any
  directorId:any
  currentRate:number =0

  constructor(private directorService: DirectorService, config: NgbRatingConfig, private asignaturaService: AsignaturaService,private route:ActivatedRoute ,private loginService:LoginService, private router: Router) { 
    config.max = 5;
    
    config.readonly = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        console.log(params)
        this.inteId = params.inteId
        this.asigId = params.asigId
        this.directorId = params.directId
    })
    
  }
  public createComentario(comentario:string, puntuacion:number, inte:string, asig:string){
    this.asignaturaService.postValoracion(inte , asig, comentario, puntuacion, this.loginService.getUserId()).subscribe(()=>{
    })
      
    this.router.navigate(['../'],{relativeTo: this.route})
  }
  

  public createComentarioDirector( comentario:string, puntuacion:number, director:string){
    this.directorService.postValoracionesDirector(director, comentario, puntuacion, this.loginService.getUserId()).subscribe(()=>{
    })
      
    this.router.navigate(['../'],{relativeTo: this.route})
  }

  
}
