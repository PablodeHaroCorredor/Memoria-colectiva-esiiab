import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AsignaturaService } from 'src/app/servicios/asignatura.service';
import { LoginService } from 'src/app/servicios/login.service';
import { AsignaturaComponent } from './asignatura/asignatura.component';

@Component({
  selector: 'app-intensificacion',
  templateUrl: './intensificacion.component.html',
  styleUrls: ['./intensificacion.component.css']
})
export class IntensificacionComponent implements OnInit {
  
  @ViewChild('asignaturaId',{static:false}) asigComponent!: AsignaturaComponent;
  intens: any;
  flag2=false;
  id:string=""
  isShown: boolean= false;
  
  currentRate = 8;

  constructor(private asignaturaService:AsignaturaService, private route: ActivatedRoute, private loginService:LoginService) {
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

  public actualizarInterfaz(intensificacion:string){
    return this.asignaturaService.getIntensificacion(intensificacion).subscribe((intens: any)=>{
      this.intens=intens;
      
    })
     
  }
  public abrirAsignatura(asig:string){
    this.flag2=true;
    this.asigComponent.actualizarInterfaz(asig);
  }

  public updateInte(inte:string, valoracion:string[]){
    return this.asignaturaService.updateInte(inte, valoracion).subscribe(()=>{

    })
  }

  

  public createComentario(comentario:string, puntuacion:string, inte:string){
    this.asignaturaService.postValoracion(comentario, puntuacion, this.loginService.getUserId()).subscribe((valoracion: any) => {
      console.log(valoracion);
    this.updateInte(inte, valoracion._id)
    this.actualizarInterfaz(inte)
    /* if(inte){
      if(valoracion.usuario.lenght() >1){
         this.toggleShow() 
      }
    }  */

   })
  }

  
  public borrarComentario(comentarioId:string){
    this.asignaturaService.borrarComentario(comentarioId).subscribe((valoracion: any)=>{

    });
  }
 

}


