import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { AsignaturaService } from '../servicios/asignatura.service';
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
  currentRate:number =0

  constructor(config: NgbRatingConfig, private asignaturaService: AsignaturaService,private route:ActivatedRoute ,private loginService:LoginService, private router: Router) { 
    config.max = 5;
    
    config.readonly = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        console.log(params)
        this.inteId = params.inteId
        this.asigId = params.id
    })
    
  }

  public createComentario( comentario:string, puntuacion:number, inte:string, asig:string){
    this.asignaturaService.postValoracionAsig(inte,asig,comentario, puntuacion, this.loginService.getUserId()).subscribe(()=>{
    })
      
    this.router.navigate(['../'],{relativeTo: this.route})
  }

}
