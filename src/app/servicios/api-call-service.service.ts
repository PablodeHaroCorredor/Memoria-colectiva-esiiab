import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallServiceService {

  readonly ROOT_URL:any;

  constructor(private http: HttpClient) {
    this.ROOT_URL = environment.serverUrl;
   }
  

  get(uri:string){
    return this.http.get(`${this.ROOT_URL}/${uri}` );
  }
  

  post(uri:string, payload: Object){
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri:string, payload: Object){
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  put(uri:string, payload: Object){
    return this.http.put(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }


  login(email: string, contraseña: string) {
    return this.http.post(`${this.ROOT_URL}/api/usuarios/login`, {
      email,
      contraseña
    }, {
        observe: 'response'
      });
  }

  signup(email: string, contraseña:string, username:string) {
    
    return this.http.post(`${this.ROOT_URL}/api/usuarios`, {
      
      email,
      contraseña,
      username,
      
      
    }, {
        observe: 'response'
        
      });
      
  }

  sendEmail( payload:{}) {
    return this.http.post(`${this.ROOT_URL}/api/sendmail`, payload);
  }

   
}
