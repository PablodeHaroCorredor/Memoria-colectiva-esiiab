import { Injectable } from '@angular/core';
import { ApiCallServiceService } from './api-call-service.service';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  constructor(private apiCallService: ApiCallServiceService) { 
  }
  getAsignaturas(){
    return this.apiCallService.get('/intensificaciones');
  }
  getIntensificacion(intensificacion:string){
    console.log("hago cosas");
    switch(intensificacion){
      case "sw":{
        console.log("hago cosas");
        return this.apiCallService.get("lista-intensificaciones/1");
        
        break;
      }
      case "co":{
        return this.apiCallService.get("lista-intensificaciones/2");
        break;
      }
      case "ic":{
        return this.apiCallService.get("lista-intensificaciones/3");
        break;
      }
      case "tic":{
        return this.apiCallService.get("lista-intensificaciones/4");
        break;
      }
      default:{
        return this.apiCallService.get("lista-intensificaciones");
        break;
    }
  
  }
  }
}
