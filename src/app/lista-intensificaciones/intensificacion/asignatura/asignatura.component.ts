import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { AsignaturaService } from 'src/app/servicios/asignatura.service';
import { DirectorService } from 'src/app/servicios/director.service';
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
  media: any
  etiquetas:any
  currentRate:number =0
  usuarioLogged:any
  nombresEtiqueta:string[]= ["Fácil","Difícil","Buen profesor","Interesante","Aburrida","Teórica","Práctica","Innovadora"]

  constructor(config: NgbRatingConfig,private asignaturaService:AsignaturaService, private loginService: LoginService, private route:ActivatedRoute, private directorService:DirectorService, private router: Router) { 
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {

    this.usuarioLogged = this.loginService.getUserId()
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
              this.media = this.calcularMedia()
          }
    
          )})

          this.route.params.subscribe(
            (params:Params)=>{
              console.log(params);
              this.asignaturaService.getEtiquetasAsignaturas(params.id).subscribe((etiquetas: any)=>{
                this.etiquetas=etiquetas;
                console.log(etiquetas)
              }
              
          )})
        
      
  }


  public actualizarAsignatura(asigId:string, etiqueta:string){
    this.asignaturaService.updateAsginatura(asigId, etiqueta, this.loginService.getUserId()).subscribe(()=>{

      
    });
    window.location.reload();
  }
  
 /*  public sumarLike(inteId:string, asigId:string, valoracionId:string, like:Number){
    this.asignaturaService.editValoracionLike(inteId, asigId,valoracionId,like).subscribe(()=>{
      
    })
   
    window.location.reload();
  } */

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


  public borrarEtiqueta(etiId:string){
    this.directorService.borrarEtiqueta(etiId).subscribe(()=>{

    })
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

