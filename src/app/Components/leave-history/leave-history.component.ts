import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from 'src/app/services/leave-request.service';
import { LeaveRequest } from 'src/app/Models/leave-request';
import { InteractionService } from 'src/app/UIService/interaction.service';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {

  leaveRequests: LeaveRequest[];
  userData: any;

  constructor(private loginService: LoginService, private leaveRequestService: LeaveRequestService, private interactionService: InteractionService) { }

  ngOnInit() {

    this.interactionService.msgDataSource$.subscribe(msg=>{
      this.getAllLeaveHistory();
    });

    this.loginService.loginCredential$.subscribe(data=>{
      this.userData = data;
      console.log(data);
      console.log(this.userData.userId);

      if(this.userData.userRole == 'Admin'){
        this.getAllLeaveHistory();
      }
      else{
        this.getLeaveHistory();
      }
    });

    this.refreshTable();

  }

  getAllLeaveHistory(){
    this.leaveRequestService.getAllLeaveRequest().subscribe(data=>{
      this.leaveRequests=data;
    })
  }

  getLeaveHistory(){
    this.leaveRequestService.getLeaveHistoryByUserId(this.userData.userId).subscribe(data=>{
      this.leaveRequests=data;
    });
  }

  refreshTable(){
    this.interactionService.msgDataSource$.subscribe(data=>{
      this.getLeaveHistory();
    })
  }

}
