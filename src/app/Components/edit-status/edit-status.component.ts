import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/Models/status.model';
import { InteractionService } from 'src/app/UIService/interaction.service';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-edit-status',
  templateUrl: './edit-status.component.html',
  styleUrls: ['./edit-status.component.css']
})
export class EditStatusComponent implements OnInit {
  statusObj = new Status();
  constructor(private interactionService: InteractionService,private statusService:StatusService) { }

  ngOnInit() {    
    this.getRecord()
  }
  getRecord() {
    this.interactionService.statusDataSource$.subscribe(data => {
      this.statusObj = data;
      console.log(data);
      this.statusObj = Object.assign({}, data);
    });
  }
  updateSatatus() {
    return this.statusService.updateStatus(this.statusObj).subscribe(data => {
      console.log(data);
      this.interactionService.upadateMsg(' success ');
    });

  }

}
