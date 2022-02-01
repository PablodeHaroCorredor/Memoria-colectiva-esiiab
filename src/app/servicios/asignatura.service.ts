import { Injectable } from '@angular/core';
import { ApiCallServiceService } from './api-call-service.service';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  constructor(private apiCallService: ApiCallServiceService) { 
  }
  getListaIntensificaciones(){
    console.log("hey");
    return this.apiCallService.get('lista-intensificaciones');
    
  }

  getIntensificacion(intensificacion:string){
    console.log("hago cosas");
    return this.apiCallService.get(`lista-intensificaciones/intensificacion/${intensificacion}`);
  }

  updateInte(intensificacion:string, valoraciones:string[]){
    return this.apiCallService.put(`lista-intensificaciones/${intensificacion}`, {valoraciones});
  }
  
  getListaAsignaturas(idInte:string){
    return this.apiCallService.get(`lista-intensificaciones/intensificacion/${idInte}/asignaturas`);
  }
  getAsignatura(idInte:string,idAsig:string){
    return this.apiCallService.get(`lista-intensificaciones/intensificacion/${idInte}/asignaturas/${idAsig}`);
  }

/*   getValoracionesInte(idInte:string){
    return this.apiCallService.get(`lista-intensificaciones/intensificacion/${idInte}/valoraciones`);
  } */

  getValoracionesAsig(idInte:string, idAsig:string){
    if(idAsig!=null){
      return this.apiCallService.get(`lista-intensificaciones/intensificacion/${idInte}/asignaturas/${idAsig}/valoraciones`);
    }else{
      return this.apiCallService.get(`lista-intensificaciones/intensificacion/${idInte}/valoraciones`);
    }
    
  }

 /*  postValoracionInte(idInte:string, comentario:string, puntuacion:number, usuario:string|null){
    return this.apiCallService.post(`lista-intensificaciones/intensificacion/${idInte}/valoraciones`, {idInte,comentario,puntuacion,usuario});
  }  */

  postValoracion(idInte:string,idAsig:string, comentario:string, puntuacion:number, usuario:string|null){
    if(idAsig!=null){
      return this.apiCallService.post(`lista-intensificaciones/intensificacion/${idInte}/asignaturas/${idAsig}/valoraciones/`, {idAsig,comentario,puntuacion,usuario});
    }
    else{
      return this.apiCallService.post(`lista-intensificaciones/intensificacion/${idInte}/valoraciones`, {idInte,comentario,puntuacion,usuario});
    }  
  } 


  editValoracion(idInte:string,idAsig:string,idValoracion:string,  comentario:string, puntuacion:number, fechaCreacion:Date, usuario:string|null){
    if(idAsig!=null){
      return this.apiCallService.patch(`lista-intensificaciones/intensificacion/${idInte}/asignaturas/${idAsig}/valoraciones/${idValoracion}`, {comentario,puntuacion, fechaCreacion});
    }
    else{
      return this.apiCallService.patch(`lista-intensificaciones/intensificacion/${idInte}/valoraciones/${idValoracion}`, {comentario,puntuacion, fechaCreacion});
    }  
  }

  updateAsignatura(asignatura:string, valoraciones:string[]){
    return this.apiCallService.put(`asignaturas/${asignatura}`, {valoraciones});
  }

  borrarComentario(idInte:string, valoracion:string){
   return this.apiCallService.delete(`lista-intensificaciones/intensificacion/${idInte}/valoraciones/${valoracion}`);
  }

 

  
}
