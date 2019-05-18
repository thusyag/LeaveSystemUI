import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../../services/leave-type.service';
import { ViewLeaveType } from '../../Models/view-leave-type.model';
import { leave } from '@angular/core/src/profile/wtf_impl';
import { InteractionService } from '../../UIService/interaction.service';

@Component({
  selector: 'app-view-leave-type',
  templateUrl: './view-leave-type.component.html',
  styleUrls: ['./view-leave-type.component.css']
})
export class ViewLeaveTypeComponent implements OnInit {
  leaveTypes: ViewLeaveType[];
  leaveTypeObj = new ViewLeaveType();

  constructor(private leaveTypeService: LeaveTypeService, private interactionService: InteractionService) { }

  ngOnInit() {
    this.viewLeaveType();
    this.observeChange();
  }
  viewLeaveType() {
    return this.leaveTypeService.getLeaveType().subscribe(data => {
      this.leaveTypes = data;
      console.log(data);
    });
  }

  deleteLeaveTypeById(leaveType) {
    this.leaveTypeObj = leaveType;
    console.log(this.leaveTypeObj);
  }

  getLeaveTypeById(leaveType) {
    this.interactionService.sendLeaveType(leaveType);
    console.log(leaveType);
  }

  observeChange() {
    this.interactionService.msgDataSource$.subscribe(data => {
      console.log(data);
      this.viewLeaveType();
    });
  }

  deleteLeaveType() {
    return this.leaveTypeService.deleteLeaveType(this.leaveTypeObj).subscribe(data => {
      console.log(this.leaveTypeObj);
      this.viewLeaveType();
    });
  }

  addLeaveTypeClick() {
    this.interactionService.upadateMsg("clicked");
  }

}
