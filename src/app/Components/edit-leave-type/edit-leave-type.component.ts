import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../UIService/interaction.service';
import { ViewLeaveType } from '../../Models/view-leave-type.model';
import { LeaveTypeService } from '../../services/leave-type.service';

@Component({
  selector: 'app-edit-leave-type',
  templateUrl: './edit-leave-type.component.html',
  styleUrls: ['./edit-leave-type.component.css']
})
export class EditLeaveTypeComponent implements OnInit {

  leaveTypObj = new ViewLeaveType();
  constructor(private interactionService: InteractionService, private leavetypeservice: LeaveTypeService) { }

  ngOnInit() {
    // this.interactionService.leaveTypeDataSource$.subscribe(data => {
    //   console.log(data);
    //   this.leaveTypObj = Object.assign({}, data);
    this.getRecord();
  }
  getRecord() {
    this.interactionService.leaveTypeDataSource$.subscribe(data => {
      this.leaveTypObj = data;
      console.log(data);
      this.leaveTypObj = Object.assign({}, data);
    });
  }

  updateLeaveType() {
    return this.leavetypeservice.updateLeaveType(this.leaveTypObj).subscribe(data => {
      console.log(data);
      this.interactionService.upadateMsg(' success ');
    });
  }

}
