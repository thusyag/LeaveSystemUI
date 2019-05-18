import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../../services/leave-type.service';
import { ViewLeaveType } from '../../Models/view-leave-type.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LeaveRequest } from 'src/app/Models/leave-request';
import { LoginService } from 'src/app/Services/login.service';
import { LeaveRequestService } from 'src/app/services/leave-request.service';
import { LeaveService } from 'src/app/services/leave.service';
import { InteractionService } from 'src/app/UIService/interaction.service';

@Component({
  selector: 'app-req-leave',
  templateUrl: './req-leave.component.html',
  styleUrls: ['./req-leave.component.css']
})
export class ReqLeaveComponent implements OnInit {

  leaveTypes: ViewLeaveType[];

  leaveRequestObj = new LeaveRequest();

  userId: number;
  leaveTypeId: number;

  remainingDays: number;

  leaveDays: number;

  error: string;

  validReason: number;
  validStartDate: number;
  validEndDate: number;
  validLeaveType: number;

  constructor(
    private leaveTypeService: LeaveTypeService,
    private loginService: LoginService,
    private leaveRequestService: LeaveRequestService,
    private leaveService: LeaveService,
    private interactionService: InteractionService) { }

  ngOnInit() {
    this.viewAllLeaveTypes();
    this.clearFields();
  }

  viewAllLeaveTypes() {
    this.leaveTypeService.getLeaveType().subscribe(data => {
      this.leaveTypes = data;
      console.log(data);
    });
  }

  leaveRequestForm = new FormGroup({
    startDate: new FormControl('', Validators.compose([
      Validators.required
    ])),
    endDate: new FormControl('', Validators.compose([
      Validators.required
    ])),
    leaveType: new FormControl(''),
    reason: new FormControl('', Validators.compose([
      Validators.required
    ])),
    remainingDays: new FormControl(''),
    leaveDays: new FormControl('')
  });

  onSubmit() {
    if (this.leaveRequestForm.value.startDate != "" && this.leaveRequestForm.value.endDate != "") {
      if (this.leaveDays != 0) {
        this.validStartDate = 1;
        this.validEndDate = 1;
        if (this.error != 'remain_days_error') {
          this.validLeaveType = 1;
          if (this.leaveRequestForm.value.reason != "") {
            this.validReason = 1;
            var startDate = new Date(this.leaveRequestForm.value.startDate);
            var endDate = new Date(this.leaveRequestForm.value.endDate);

            var leaveDays = endDate.getTime() - startDate.getTime();
            var days = leaveDays / (1000 * 60 * 60 * 24) + 1;

            this.leaveRequestObj.leaveTypeId = this.leaveRequestForm.value.leaveType;
            this.leaveRequestObj.reason = this.leaveRequestForm.value.reason;
            this.leaveRequestObj.startDate = startDate;
            this.leaveRequestObj.endDate = endDate;
            this.leaveRequestObj.statusId = 1;
            this.leaveRequestObj.leaveDays = days;

            this.loginService.loginCredential$.subscribe(data => {
              this.leaveRequestObj.userId = data.userId;
            });

            console.log(this.leaveRequestObj);

            this.leaveRequestService.createLeaveRequest(this.leaveRequestObj).subscribe(msg => {
              this.interactionService.upadateMsg("success");
              this.clearFields();
            },
              error => {
                this.interactionService.upadateMsg("fail");
              });
          }
          else {
            this.interactionService.upadateMsg("reason_field_null");
            this.validReason = 0;
          }
        }
        else {
          this.interactionService.upadateMsg("remain_days_error");
          this.validLeaveType = 0;
        }
      }
      else {
        this.validLeaveType=0;
        this.interactionService.upadateMsg("date_range_error");
        this.validStartDate = 0;
        this.validEndDate = 0;
      }
    }
    else {
      this.interactionService.upadateMsg('unknown_date');
      this.validStartDate = 0;
      this.validEndDate = 0;
    }
  }

  getRemainingDays() {
    this.validLeaveType=1;
    this.loginService.loginCredential$.subscribe(data => {
      this.userId = data.userId;
    });

    this.leaveTypeId = this.leaveRequestForm.value.leaveType;

    this.leaveService.getRemainingLeaveByUserIdAndLeaveType(this.userId, this.leaveTypeId).subscribe(data => {
      var allocatedRemainingDays = data;

      if (this.leaveDays != null) {
        this.remainingDays = allocatedRemainingDays - this.leaveDays;

        if (this.remainingDays < 0) {
          this.error = 'remain_days_error';
          this.remainingDays = 0;
        }
        else {
          this.error = 'none';
        }
      }
    });
  }

  // updateBorder(){
  //   this.valid = 1;
  //   alert("test");
  // }

  getLeaveDays() {
    this.validLeaveType=1;
    var startDate = new Date(this.leaveRequestForm.value.startDate);
    var endDate = new Date(this.leaveRequestForm.value.endDate);

    var leaveDays = endDate.getTime() - startDate.getTime();
    var days = leaveDays / (1000 * 60 * 60 * 24) + 1;

    if (days > 0) {
      this.leaveDays = days;
    }
    else {
      this.leaveDays = 0;
    }
  }

  startDateCSS(){
    this.validStartDate=1;
  }

  endDateCSS(){
    this.validEndDate=1;
  }

  clearFields() {
    this.validStartDate=1;
    this.validEndDate=1;
    this.validLeaveType=1;
    this.validReason=1;
    this.leaveRequestForm.patchValue({ reason: "" });
    this.leaveRequestForm.patchValue({ leaveType: "Select Leave Type" });
    this.leaveRequestForm.patchValue({ startDate: "" });
    this.leaveRequestForm.patchValue({ endDate: "" });
    this.leaveRequestForm.patchValue({ remainingDays: "" });
    this.leaveRequestForm.patchValue({ leaveDays: "" });
  }

}
