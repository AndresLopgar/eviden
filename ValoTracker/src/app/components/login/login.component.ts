import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { loginService } from 'src/app/services/login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private loginService:loginService){

  }

  ngOnInit(): void {
  }
  

  login(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;

    this.loginService.login(email,password);

  }
}
