import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  

  onSignupButtonClicked(email: string, password: string, username:string) {
    if(email.endsWith("@alu.uclm.es")){
    this.loginService.signup(email, password, username).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.router.navigate(['/home']);
    });
  }
  }
}
