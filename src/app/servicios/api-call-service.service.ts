import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallServiceService {

  readonly ROOT_URL:any;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
   }
  

  get(uri:string){
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  

  post(uri:string, payload: Object){
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  login(email: string, contraseña: string) {
    return this.http.post(`${this.ROOT_URL}/usuarios/login`, {
      email,
      contraseña
    }, {
        observe: 'response'
      });
  }

  signup(email: string, contraseña: string, username:string) {
    
    return this.http.post(`${this.ROOT_URL}/usuarios`, {
      
      email,
      contraseña,
      username,
      
    }, {
        observe: 'response'
        
      });
      
  }
}
