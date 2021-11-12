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
    return this.apiCallService.get(`lista-intensificaciones/${intensificacion}`);
  }

  updateInte(intensificacion:string, valoraciones:string[]){
    return this.apiCallService.put(`lista-intensificaciones/${intensificacion}`, {valoraciones});
  }
  
  getListaAsignaturas(){
    return this.apiCallService.get('asignaturas');
  }
  getAsignatura(asignatura:string){
    return this.apiCallService.get(`asignaturas/${asignatura}`);
  }

  postValoracion(comentario:string, puntuacion:string, usuario:string|null){
    return this.apiCallService.post(`valoraciones`, {comentario,puntuacion,usuario});
  } 

  updateAsignatura(asignatura:string, valoraciones:string[]){
    return this.apiCallService.put(`asignaturas/${asignatura}`, {valoraciones});
  }

  borrarComentario(valoracion:string){
   return this.apiCallService.delete(`valoraciones/${valoracion}`);
  }

 

  
}
