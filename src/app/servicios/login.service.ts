import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiCallServiceService } from './api-call-service.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

  constructor(private webService: ApiCallServiceService, private router: Router, private http: HttpClient) { }
//res.headers.get('x-access-token')||'{}', res.headers.get('x-refresh-token')||'{}'
  login(email: string, contraseña: string) {
    return this.webService.login(email, contraseña).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        // the auth tokens will be in the header of this response
        this.setSession(res.body._id);
        this.setUserName(res.body.username)
        this.setEmail(res.body.email)
        this.setContraseña(res.body.contraseña)
        console.log("LOGGED IN!");
      })
    )
  }


  signup(email: string, contraseña: string, username:string) {
    return this.webService.signup(email, contraseña, username).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        // the auth tokens will be in the header of this response
        this.setSession(res.body._id);
        console.log("Successfully signed up and now logged in!");
      })
    )
  }

  



  logout() {
    this.removeSession();

    this.router.navigate(['/login']);
  }

  getAccessToken() {
    return localStorage.getItem('x-access-token');
  }

  getRefreshToken() {
    return localStorage.getItem('x-refresh-token');
  }

  getUserId() {
    console.log(localStorage.getItem('user-id'))
    return localStorage.getItem('user-id');
    
  }
  getUserName(){
    return localStorage.getItem('username' ||null);
  }

  getEmail(){
    return localStorage.getItem('email' ||null);
  
  }
  getContraseña(){
    return localStorage.getItem('contraseña' ||null);
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem('x-access-token', accessToken)
  }

  setEmail(email:string){
    localStorage.setItem('email', email)
  }
  setUserName(username:string){
    localStorage.setItem('username', username)
  }

  setContraseña(contraseña:string){
    localStorage.setItem('contraseña', contraseña)
  
  }
  
  private setSession(userId: string) {
    localStorage.setItem('user-id', userId);
   /*  localStorage.setItem('x-access-token', accessToken);
    localStorage.setItem('x-refresh-token', refreshToken); */
  }

  private removeSession() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('username')
    localStorage.removeItem('contraseña')
    localStorage.removeItem('email')/* 
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token'); */
  }

  

  getNewAccessToken() {
    return this.http.get(`${this.webService.ROOT_URL}/api/users/me/access-token`, {
      headers: {
        'x-refresh-token': this.getRefreshToken()||'{}',
        '_id': this.getUserId()||'{}',
        'username': this.getUserName()||'{}'
      },
      observe: 'response'
    }).pipe(
      tap((res: HttpResponse<any>) => {
         this.setAccessToken(res.headers.get('x-access-token')||'{}');
      })
    )
  }
}
