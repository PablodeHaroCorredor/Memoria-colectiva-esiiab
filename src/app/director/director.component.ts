import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DirectorService } from '../servicios/director.service';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

  intens: any;
  flag2=false;
  id:string=""
  isShown: boolean= false;
  
  currentRate = 8;

  constructor(private directorService:DirectorService, private route: ActivatedRoute, private loginService:LoginService) {
   }
  ngOnInit(){

    this.isShown = false; //hidden every time subscribe detects change
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = params._id;
        console.log(params);
       
        })
      
  }

  toggleShow() {
    this.isShown = ! this.isShown;
  }
/* 
  public actualizarInterfaz(intensificacion:string){
    return this.directorService.getIntensificacion(intensificacion).subscribe((intens: any)=>{
      this.intens=intens;
      
    })
     
  }

  public updateInte(inte:string, valoracion:string[]){
    return this.directorService.updateInte(inte, valoracion).subscribe(()=>{

    })
  }

  

  public createComentario(comentario:string, puntuacion:string, inte:string){
    this.directorService.postValoracion(comentario, puntuacion, this.loginService.getUserId()).subscribe((valoracion: any) => {
      console.log(valoracion);
    this.updateInte(inte, valoracion._id)
    this.actualizarInterfaz(inte)
    /* if(inte){
      if(valoracion.usuario.lenght() >1){
         this.toggleShow() 
      }
    }  

   })
  }

  
  public borrarComentario(comentarioId:string){
    this.directorService.borrarComentario(comentarioId).subscribe((valoracion: any)=>{

    });
  } */
 
}
