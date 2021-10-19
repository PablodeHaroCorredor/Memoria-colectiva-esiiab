import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData={}
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }


  onLoginButtonClicked(email: string, password: string) {
    this.loginService.login(email, password).subscribe((res: HttpResponse<any>) => {
      if (res.status === 200) {
        // we have logged in successfully
        this.router.navigate(['/home']);
      }
      console.log(res);
      
    });
  }
  

  
}
