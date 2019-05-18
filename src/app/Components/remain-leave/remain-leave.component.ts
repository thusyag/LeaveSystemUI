import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/services/leave.service';
import { InteractionService } from 'src/app/UIService/interaction.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-remain-leave',
  templateUrl: './remain-leave.component.html',
  styleUrls: ['./remain-leave.component.css']
})
export class RemainLeaveComponent implements OnInit {
  leavesArray: any = [];
  userId: number;
  constructor(private leaveService: LeaveService, private interactionService: InteractionService, private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.loginCredential$.subscribe(data => {
      this.userId = data.userId;
      this.remainingLeaveDetails();
    });
    this.interactionService.msgDataSource$.subscribe(msg => {
      console.log('Update ' + msg);
      this.remainingLeaveDetails();
    });
  }
  remainingLeaveDetails() {
    this.leaveService.getRemainingLeaveByUserId(this.userId).subscribe(data => {
      console.log(data);
      this.leavesArray = data;
    });
  }
}
