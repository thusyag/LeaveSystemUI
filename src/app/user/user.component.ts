import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { InteractionService } from '../UIService/interaction.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userRole: string;
  responseMsg: string;

  constructor(private loginService: LoginService, private interactionService: InteractionService) { }

  ngOnInit() {
    this.loginService.loginCredential$.subscribe(data => {
      this.userRole = data.userRole;
    });
    this.getResponse();
  }

  getResponse() {
    this.interactionService.msgDataSource$.subscribe(data => {
      this.responseMsg = data;
      setTimeout(() => {
        this.responseMsg = null;
      }, 3000);
    });
  }

}
