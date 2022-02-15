import { Injectable } from '@angular/core';
import { ApiCallServiceService } from './api-call-service.service';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor(private apiCallService: ApiCallServiceService) { }

  getDirectores(){
    return this.apiCallService.get('api/lista-directores');
    
  }

  getDirector(directId:string){
    return this.apiCallService.get(`api/lista-directores/director/${directId}`);
    
  }

  borrarEtiqueta(id:string){
    return this.apiCallService.delete(`api/etiquetas/${id}`);
  }


  getEtiquetasDirector(directId:string){
    return this.apiCallService.get(`api/lista-directores/director/${directId}/etiquetas`);
  }

  updateDirector(directId:string, nombre:string){
    return this.apiCallService.post(`api/lista-directores/director/${directId}/etiquetas`, {directId,nombre});
  }

  getValoracionesDirector(directId:string){
    return this.apiCallService.get(`api/lista-directores/director/${directId}/valoraciones`);
  }

postValoracionesDirector(directId:string, comentario:string, puntuacion:number, usuario:string|null){
  return this.apiCallService.post(`api/lista-directores/director/${directId}/valoraciones`, {directId,comentario,puntuacion,usuario});
}
  

editValoracionDirector(directId:string,idValoracion:string,  comentario:string, puntuacion:number, fechaCreacion:Date, usuario:string|null){
  
    return this.apiCallService.patch(`api/lista-directores/director/${directId}/valoraciones/${idValoracion}`, {comentario,puntuacion,fechaCreacion});
  
}


editValoracionLike(directorId:string,idValoracion:string, like:Number){
  
  return this.apiCallService.patch(`api/lista-directores/director/${directorId}/valoraciones/${idValoracion}`, {like});

}
}
