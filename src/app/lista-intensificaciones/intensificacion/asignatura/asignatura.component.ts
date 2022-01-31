import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AsignaturaService } from 'src/app/servicios/asignatura.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {

  asigs:any;
  id:string=""
  valoraciones:any

  constructor(private asignaturaService:AsignaturaService, private loginService: LoginService, private route:ActivatedRoute,  private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
      this.route.params.subscribe(
        (params:Params)=>{
          this.asignaturaService.getAsignatura(params.inteId,params.id).subscribe((asigs: any)=>{
            this.asigs=asigs;
        }
  
        )})
        this.route.params.subscribe(
          (params:Params)=>{
            console.log(params)
            this.asignaturaService.getValoracionesAsig(params.inteId,params.id).subscribe((valoraciones: any)=>{
              this.valoraciones=valoraciones;
          }
    
          )})
        
      
  }

  


 //metodo para que cuando crees una valoracion se meta en la lista de las asignaturas
  public createComentario( comentario:string, puntuacion:string, asig:string, inte:string){
    this.asignaturaService.postValoracionAsig(inte,asig,comentario, puntuacion, this.loginService.getUserId()).subscribe((valoracion: any) => {
   })

  }

  public borrarComentario(asigId:string, comentarioId:string){
    this.asignaturaService.borrarComentario(asigId, comentarioId).subscribe(()=>{

      window.location.reload();
    });
  }


 /*  calcularMedia = (asignatura:string) => {
    this.asignaturaService.getAsignatura(asignatura).subscribe((asigs: any)=>{
      this.asigs=asigs;
      let valoraciones = this.asigs.valoraciones
      console.log(valoraciones); 
    }) */
      
    

  /* var total = 0;
  for (var i=0; i<; i++) {
    total +=;
  }
    var suma = total;
    return suma / ; */
  
} 

