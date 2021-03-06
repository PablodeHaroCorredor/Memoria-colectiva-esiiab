import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { AsignaturaService } from '../servicios/asignatura.service';
import { DirectorService } from '../servicios/director.service';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

  intens: any;
  nombresEtiqueta:string[]=["Apreciado","Dominio Técnico","Buen Ambiente","Respode rápido","Dudas detalladas",
  "Empático","Profesional","Ordenado","Resolutivo","Innovador","Ingenioso","Flexible","Ayuda con referencias",
  "Estricto","Ausente","Poco comunicativo","Desorganizado", "Inflexible", "Mal Ambiente", "Crítico"]
  id:string=""
  isShown: boolean= false;
  directId:any
  media:any
  valoraciones:any
  director:any
  directorId:any
  currentRate = 8;
  etiquetas:any
  usuarioLogged:any
  constructor(private directorService:DirectorService, config: NgbRatingConfig, private asignaturaService:AsignaturaService, private loginService: LoginService, private route:ActivatedRoute,  private router: Router) {
    config.max = 5;
    
    config.readonly = true;
  }
   
  ngOnInit(){

    this.usuarioLogged = this.loginService.getUserId()

    this.route.params.subscribe(
      (params:Params)=>{
        this.directId = params.directId;
        console.log(params);

        this.directorService.getDirector(params.directId).subscribe((director: any)=>{
          this.director=director;
        }
        
    )})

    this.route.params.subscribe(
      (params:Params)=>{
        console.log(params)
        this.directorService.getValoracionesDirector(params.directId).subscribe((valoraciones: any)=>{
          this.valoraciones=valoraciones;
          this.media = this.calcularMedia()
      }

      )})
      

      this.route.params.subscribe(
        (params:Params)=>{
          this.directId = params.directId;
          console.log(params);
          this.directorService.getEtiquetasDirector(params.directId).subscribe((etiquetas: any)=>{
            this.etiquetas=etiquetas;
            console.log(etiquetas)
          }
          
      )})
  }

public borrarEtiqueta(etiId:string){
    this.directorService.borrarEtiqueta(etiId).subscribe(()=>{

    })
    window.location.reload();
}

  public sumarLike(directorId:string, valoracionId:string, like:Number){
    this.directorService.editValoracionLike(directorId,valoracionId,like).subscribe(()=>{
      
    })
   
    window.location.reload();
  }

  public borrarComentario(asigId:string, comentarioId:string){
    this.asignaturaService.borrarComentario(asigId, comentarioId).subscribe(()=>{

     
    });
    window.location.reload();
  }

  public actualizarDirector(directorId:string, etiqueta:string){
    this.directorService.updateDirector(directorId, etiqueta, this.loginService.getUserId()).subscribe(()=>{

      
    });
    window.location.reload();
  }
  public darLike(valoracionId:string, like:Number){

    
    console.log("dar like")
    this.asignaturaService.darValoracionLike(valoracionId, like).subscribe(()=>{
    })

    window.location.reload();
    //this.asignaturaService.editValoracionAsigLike().subscribe(()=>{
    //})
    
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
