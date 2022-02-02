import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' ]
})
export class LoginComponent implements OnInit {
  loginUserData={}
  alert:boolean = false
  alertPass:boolean = false
  title = ' Bienvenido a Memoria Colectiva Esiiab';
  email:any
  contraseña:any
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.alert=false
    this.alertPass=false
    this.email = this.loginService.getEmail()
    console.log(this.email)
    this.contraseña = this.loginService.getContraseña()
    console.log(this.contraseña)
  }


  onLoginButtonClicked(email: string, contraseña: string) {
    this.loginService.login(email, contraseña).subscribe((res: HttpResponse<any>) => {
      
      if (res.status === 200) {
        // we have logged in successfully
        this.router.navigate(['/home']);
      }
      console.log(res);
      
    });
    if(email != this.email){
      this.alert = true
  }
  if(contraseña !=this.contraseña){
    this.alertPass = true
  }
    
  }
  

  closeAlert(){
    this.alert=false
    this.alertPass = false
  }

  closeAlertPass(){
    this.alertPass = false
  }
}
