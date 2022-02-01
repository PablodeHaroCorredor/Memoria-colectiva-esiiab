import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-common';
import { ApiCallServiceService } from '../app/servicios/api-call-service.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = 'Memoria Colectiva Esiiab';
  router: any;
  today: number = Date.now();
  nombreUsuario: any

  constructor(private loginService: LoginService){

    this.nombreUsuario = loginService.getUserName()
  }

  cerrarSesion(){
  this.loginService.logout();
  }

 
}
