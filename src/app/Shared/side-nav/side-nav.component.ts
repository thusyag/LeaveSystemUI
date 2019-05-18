import { InteractionService } from 'src/app/UIService/interaction.service';
import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input('userDataChild') userData;

  responseMsg: string;

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.getResponse();
  }

  getResponse() {
    this.interactionService.msgDataSource$.subscribe(data => {
      this.responseMsg = data;
      setTimeout(() => {
        this.responseMsg=null;
      }, 3000);
    });
  }



}
