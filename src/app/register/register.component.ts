import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

emailPattern="^[a-z0-9._%+-]+@luu\.lcmm\.[a-zA-Z]+"; 
patter= "@luu\.lcmm\.[a-zA-Z]+";

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  
  get email(){
    return this.signupForm.get('email');
  }
  signupForm= new FormGroup({
    email: new FormControl('',[Validators.required, Validators.pattern("")])
  })



  onSignupButtonClicked(email: string, password: string, username:string) {
    this.loginService.signup(email, password, username).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.router.navigate(['/home']);
    });
  }
}
