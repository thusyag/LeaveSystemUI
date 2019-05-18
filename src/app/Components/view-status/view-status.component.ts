import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';
import { Status } from 'src/app/Models/status.model';
import { InteractionService } from 'src/app/UIService/interaction.service';

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent implements OnInit {
  statuses: Status[];
  statusObj = new Status();
  constructor(private statusService: StatusService, private interactionService: InteractionService) { }

  ngOnInit() {
    this.viewStatus();
    this.interactionService.msgDataSource$.subscribe(msg => {
      console.log('Update ' + msg);
      this.viewStatus();
    });
  }
  viewStatus() {
    return this.statusService.getAllStatus().subscribe(data => {
      this.statuses = data;
      console.log(data);
    });
  }
  getStatusById(status) {
    this.statusObj = status;
    console.log(status);
    this.interactionService.sentStatus(status);
  }
  getStatusById1(status) {
    this.interactionService.sentStatus(status);
    console.log(status);
  }
  observeChange() {
    this.interactionService.msgDataSource$.subscribe(data => {
      console.log(data);
      this.viewStatus();
    });
  }
  deleteStatus() {
    return this.statusService.deleteStatus(this.statusObj).subscribe(data => {
      console.log(this.statusObj);
      this.viewStatus();
    });
  }

  addStatusClick() {
    this.interactionService.upadateMsg("click");
  }

}
