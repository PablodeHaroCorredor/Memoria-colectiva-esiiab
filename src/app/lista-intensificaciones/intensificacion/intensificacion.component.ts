import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  currentRate = 8;
  numeroLikes = 0
  ruta:any


  
  constructor(private asignaturaService:AsignaturaService, private route: ActivatedRoute, private loginService:LoginService, private router:Router) {
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
          this.asignaturaService.getValoracionesInte(params.id).subscribe((valoraciones: any)=>{
            this.valoraciones=valoraciones;
        }
  
        )})

      }
        
  public sumarLike(like:number){
    
   
  }
  
   

  public createComentario( comentario:string, puntuacion:string, inte:string){
    this.asignaturaService.postValoracionInte(inte,comentario, puntuacion, this.loginService.getUserId()).subscribe(()=>{

    })
      
    window.location.reload();
  }

  
  public borrarComentario(inteId:string,comentarioId:string){
    this.asignaturaService.borrarComentario(inteId,comentarioId).subscribe((valoracion: any)=>{

    });

    window.location.reload();
  }
 


  calcularMedia = (intensificacion:string) => {
    this.asignaturaService.getIntensificacion(intensificacion).subscribe((intens: any)=>{
      this.intens=intens;
      
    })
    console.log(this.intens);

  /* var total = 0;
  for (var i=0; i<; i++) {
    total +=;
  }
    var suma = total;
    return suma / ; */
  
} 
}


