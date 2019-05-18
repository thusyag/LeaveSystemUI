import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Login } from '../Models/login.model';
import { Router } from '@angular/router';
import { InteractionService } from '../UIService/interaction.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: Login = new Login();
  logedUser: any;
  msg = 'invalid';
  responseMsg: string;
  constructor(private loginService: LoginService, private router: Router,private interactionService: InteractionService) { }

  ngOnInit() {
    this.getResponse();
    this.getLoginAuth();
  }

  getLoginAuth() {
    this.loginService.getLoginAuth(this.login);
    this.loginService.loginCredential$.subscribe(data => {
      if(data != null){
        this.router.navigate(["/dashboard"]);
      }
    });
    if (this.msg == 'invalid') {
      this.interactionService.upadateMsg('invalid');
    }
  }
  getResponse() {
    this.interactionService.msgDataSource$.subscribe(data => {
      this.responseMsg = data;
      console.log(data);
      setTimeout(() => {
        this.responseMsg=null;
      }, 5000);
    });
  }


}
