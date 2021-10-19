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
  
  getListaAsignaturas(){
    console.log("hago cosas");
    return this.apiCallService.get('asignaturas');
  }
  getAsignatura(asignatura:string){
    console.log("hago cosas");
    return this.apiCallService.get(`asignaturas/${asignatura}`);
  }
  
}
