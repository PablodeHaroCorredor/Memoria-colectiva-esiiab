import { Injectable } from '@angular/core';
import { ApiCallServiceService } from './api-call-service.service';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor(private apiCallService: ApiCallServiceService) { }

  getDirectores(){
    return this.apiCallService.get('lista-directores');
    
  }

  getDirector(directId:string){
    return this.apiCallService.get(`lista-directores/director/${directId}`);
    
  }

  getEtiquetasDirector(directId:string){
    return this.apiCallService.get(`lista-directores/director/${directId}/etiquetas`);
  }

  updateDirector(directId:string, nombre:string){
    return this.apiCallService.post(`lista-directores/director/${directId}/etiquetas`, {directId,nombre});
  }

  getValoracionesDirector(directId:string){
    return this.apiCallService.get(`lista-directores/director/${directId}/valoraciones`);
  }

postValoracionesDirector(directId:string, comentario:string, puntuacion:number, usuario:string|null){
  return this.apiCallService.post(`lista-directores/director/${directId}/valoraciones`, {directId,comentario,puntuacion,usuario});
}
  
}
