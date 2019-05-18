import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { InteractionService } from 'src/app/UIService/interaction.service';
import { LeaveRequestService } from 'src/app/services/leave-request.service';
import { LeaveRequest } from 'src/app/Models/leave-request';

@Component({
  selector: 'app-user-leave-history',
  templateUrl: './user-leave-history.component.html',
  styleUrls: ['./user-leave-history.component.css']
})
export class UserLeaveHistoryComponent implements OnInit {

  constructor(private interactionService: InteractionService, private leaveRequestService: LeaveRequestService) { }
  firstName: string;
  lastName: string;
  userName: string;
  leaveHistory: LeaveRequest[];
  // userId: number;

  ngOnInit() {
    this.interactionService.userInfo$.subscribe(data => {
      console.log(data);
      // this.firstName=data.firstName;
      // this.lastName=data.lastName;
      this.firstName = data;
    });

    this.interactionService.selectedUserId$.subscribe(data => {
      // this.userId = data;
      if (data != null) {
        this.getLeaveHistoryByUserId(data);
      }
    })
  }

  getLeaveHistoryByUserId(userId) {
    this.leaveRequestService.getLeaveHistoryByUserId(userId)
      .subscribe(data => {
        this.leaveHistory = data;
        console.log(data);
      });
  }

}
