import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AsignaturaService } from '../servicios/asignatura.service';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-muii',
  templateUrl: './muii.component.html',
  styleUrls: ['./muii.component.css']
})
export class MuiiComponent implements OnInit {

  asigs:any;
  id:string=""
  valoraciones:any
  media: any
  currentRate:number =0
  usuarioLogged:any

  constructor(private asignaturaService:AsignaturaService, private loginService: LoginService, private route:ActivatedRoute,  private router: Router) { 
  }

  ngOnInit(): void {

    this.usuarioLogged = this.loginService.getUserId()
      this.route.params.subscribe(
        (params:Params)=>{
          this.asignaturaService.getMuii(params.id).subscribe((asigs: any)=>{
            this.asigs=asigs;
        }
  
        )})
        this.route.params.subscribe(
          (params:Params)=>{
            console.log(params)
            this.asignaturaService.getValoracionesMuii(params.id).subscribe((valoraciones: any)=>{
              this.valoraciones=valoraciones;
              this.media = this.calcularMedia()
          }
    
          )})
        
      
  }

  
  public sumarLike(inteId:string, asigId:string, valoracionId:string, like:Number){
    this.asignaturaService.editValoracionLike(inteId, asigId,valoracionId,like).subscribe(()=>{
      
    })
   
    window.location.reload();
  }

 //metodo para que cuando crees una valoracion se meta en la lista de las asignaturas
  public createComentario( comentario:string, puntuacion:number,asig:string, inte:string){
    this.asignaturaService.postValoracion(inte,asig, comentario, puntuacion, this.loginService.getUserId()).subscribe((valoracion: any) => {
   })



  }

  public borrarComentario(asigId:string, comentarioId:string){
    this.asignaturaService.borrarComentario(asigId, comentarioId).subscribe(()=>{

     
    });
    window.location.reload();
  }


  public calcularMedia(){
    var sum = 0
    var avg = 0
    var contador = 0
    for(let valor of this.valoraciones){
       sum =sum +valor.puntuacion
       contador++
        
    }
    avg = sum / contador
    console.log(avg)
     return avg
  
} 

get sortByLastModifiedDesc() {
  return this.valoraciones.sort((a: any, b: any) => {
    return <any>new Date(b.fechaCreacion) - <any>new Date(a.fechaCreacion);
  });
}
get sortByLastModifiedAsend() {
  return this.valoraciones.sort((a: any, b: any) => {
    return <any>new Date(b.fechaCreacion) - <any>new Date(a.fechaCreacion);
  });
}
  
}
