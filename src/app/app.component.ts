import { Component, OnInit } from '@angular/core';
import { LoginService } from './Services/login.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'LeaveSystemUI';
  loggedIn = false;
  userData: any;

  msgChild() {
    alert('test');
  }

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.loginCredential$.subscribe(data => {
      if (data != null && data !== 'error') {
        this.loggedIn = true;
        this.userData = data;
      }
    });
  }
}
