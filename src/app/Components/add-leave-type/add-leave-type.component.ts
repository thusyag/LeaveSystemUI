import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddLeaveType } from '../../Models/add-leave-type';
import { LeaveTypeService } from '../../services/leave-type.service';
import { InteractionService } from '../../UIService/interaction.service';

@Component({
  selector: 'app-add-leave-type',
  templateUrl: './add-leave-type.component.html',
  styleUrls: ['./add-leave-type.component.css']
})
export class AddLeaveTypeComponent implements OnInit {
  addLeaveTypes: AddLeaveType[];
  addLeaveTypesObj = new AddLeaveType();

  constructor(private leaveType: LeaveTypeService, private interactionService: InteractionService) { }

  ngOnInit() {
    this.getClickResponse();
  }
  addLeaveType() {
    this.leaveType.addLeaveType(this.addLeaveTypesObj).subscribe(data => {
      console.log(data);
      this.interactionService.upadateMsg('success');
    });
  }

  clear() {
    this.addLeaveTypesObj.leaveType = '';
    this.addLeaveTypesObj.allocationDays = null;
  }

  getClickResponse() {
    this.interactionService.msgDataSource$.subscribe(msg => {
      this.clear();
    });
  }
}
