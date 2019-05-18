import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/Models/status.model';
import { StatusService } from 'src/app/services/status.service';
import { InteractionService } from 'src/app/UIService/interaction.service';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.css']
})
export class AddStatusComponent implements OnInit {
  addStatusObj = new Status();
  status: "";
  constructor(private statusService: StatusService, private interactionService: InteractionService) { }

  ngOnInit() {
    this.getClickResponse();
  }


  addStatus() {
    this.statusService.createStatus(this.addStatusObj).subscribe(data => {
      console.log(data);
      // this.viewLeaveType();
      this.interactionService.upadateMsg('success');
    });
  }

  clear() {
    this.addStatusObj.status = '';
  }

  getClickResponse() {
    this.interactionService.msgDataSource$.subscribe(msg => {
      this.clear();
    });
  }

}
