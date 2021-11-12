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

  constructor(private asignaturaService:AsignaturaService, private loginService: LoginService, private route:ActivatedRoute,  private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params._id;
        
      }
    )
  }


  public actualizarInterfaz(asignatura:string){
    return this.asignaturaService.getAsignatura(asignatura).subscribe((asigs: any)=>{
      this.asigs=asigs;
      
    })
    
  }

  public updateAsginatura(asig:string,valoracion:string[]){
      this.asignaturaService.updateAsignatura(asig, valoracion).subscribe(()=>{

    });
  }

 //metodo para que cuando crees una valoracion se meta en la lista de las asignaturas
  public createComentario(comentario:string, puntuacion:string, asig:string){
    this.asignaturaService.postValoracion(comentario, puntuacion, this.loginService.getUserId()).subscribe((valoracion: any) => {
      console.log(valoracion);
    this.updateAsginatura(asig, valoracion._id);
   })
  }

  public borrarComentario(comentarioId:string){
    this.asignaturaService.borrarComentario(comentarioId).subscribe(()=>{

    });
  }
}
