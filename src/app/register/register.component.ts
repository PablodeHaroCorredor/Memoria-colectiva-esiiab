import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallServiceService } from '../servicios/api-call-service.service';
import { AsignaturaService } from '../servicios/asignatura.service';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alertEmail: boolean = false
  loading = false;
  buttionText = "Submit";
  constructor(private loginService: LoginService, private router: Router, private http:AsignaturaService, private webService:ApiCallServiceService) { }

  ngOnInit(): void {
  }
  

 /*  onSignupButtonClicked(email: string,  username:string) {
    if(email.endsWith("@alu.uclm.es")){
    this.loginService.signup(email, this.loginService.generatePassword(), username).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.router.navigate(['/home']);
    });
  }
  } */

  register( email:string, username:string ) {
    this.loading = true;
    this.buttionText = "Submiting...";
    let contraseña =  this.loginService.generatePassword()
    if(email.endsWith("@alu.uclm.es")){
      this.loginService.signup(email,contraseña, username).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        
      });
    this.webService.sendEmail({email, contraseña, username}).subscribe(
      data => {
        
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }
    );
    this.router.navigate(['/login']);
    }
    else{
      this.alertEmail = true
    }
  }


  closeAlert(){
    this.alertEmail = false
  }
}
