import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { AsignaturaService } from 'src/app/servicios/asignatura.service';
import { LoginService } from 'src/app/servicios/login.service';
import { AsignaturaComponent } from './asignatura/asignatura.component';

@Component({
  selector: 'app-intensificacion',
  templateUrl: './intensificacion.component.html',
  styleUrls: ['./intensificacion.component.css']
})
export class IntensificacionComponent implements OnInit {
  
  intens: any;
  asigs:any;
  valoraciones:any;
  flag2=false;
  intid:string=""
  isShown: boolean= false;
  intensificacion:any
  currentRate:number = 0;
  numeroLikes = 0
  ruta:any
  media: any

  
  constructor(private asignaturaService:AsignaturaService, private route: ActivatedRoute, private loginService:LoginService, private router:Router, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   }
  ngOnInit(){


    this.isShown = false; //hidden every time subscribe detects change
    this.route.params.subscribe(
      (params:Params)=>{
        this.intid = params._id;
        console.log(params);
        this.asignaturaService.getIntensificacion(params.id).subscribe((intens: any)=>{
          this.intens=intens;
          

        }
        
    )})
       
    this.route.params.subscribe(
      (params:Params)=>{
        this.asignaturaService.getListaAsignaturas(params.id).subscribe((asigs: any)=>{
          this.asigs=asigs;
      }

      )})

      this.route.params.subscribe(
        (params:Params)=>{
          this.asignaturaService.getValoracionesAsig(params.id, this.ruta).subscribe((valoraciones: any)=>{
            this.valoraciones=valoraciones;

            this.media = this.calcularMedia()
        }
  
        )})

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
  public sumarLike(like:number){
    
   
  }
  
   

  public createComentario( comentario:string, puntuacion:number, asig:string, inte:string){
    this.asignaturaService.postValoracionAsig(inte, asig,comentario, puntuacion, this.loginService.getUserId()).subscribe(()=>{

    })
      
    window.location.reload();
  }

  
  public borrarComentario(inteId:string,comentarioId:string){
    this.asignaturaService.borrarComentario(inteId,comentarioId).subscribe((valoracion: any)=>{

    });

    window.location.reload();
  }
 


  public calcularMedia(){
    var sum =0
    var avg = 0
    var contador = 0
    for(let valor of this.valoraciones){
       sum =sum +valor.puntuacion
       contador++
        
    }
    avg = sum / contador
    console.log(avg)
     return avg
     
  /* var total = 0;
  for (var i=0; i<; i++) {
    total +=;
  }
    var suma = total;
    return suma / ; */
  
} 
}


