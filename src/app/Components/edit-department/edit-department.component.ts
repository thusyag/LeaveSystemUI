import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/UIService/interaction.service';
import { Department } from 'src/app/Models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  departmentObj = new Department();

  constructor(private interactionService: InteractionService, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.interactionService.dataSourceDeparment.subscribe(data => {
      // console.log(data);
      this.departmentObj = Object.assign({}, data);
    });
  }

  updateDepartment() {
    return this.departmentService.updateDepartment(this.departmentObj).subscribe(data => {
      console.log(data);
      this.interactionService.upadateMsg(' success ');
    });
    console.log(this.departmentObj);
  }

}
