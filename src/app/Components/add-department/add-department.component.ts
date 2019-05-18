import { Component, OnInit } from '@angular/core';
import { Department } from '../../Models/department';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from '../../services/department.service';
import { InteractionService } from '../../UIService/interaction.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  addDepartment: Department[];
  addTypeDepartmentObj = new Department();
  constructor(private department: DepartmentService, private interactionService: InteractionService) { }

  private addLeaveUrl = 'http://localhost:8080/hrm_system/department';
  ngOnInit() {
    this.getClickResponse();
  }

  addDepart() {
    this.department.addDepartment(this.addTypeDepartmentObj).subscribe(data => {
      console.log(data);
      this.interactionService.upadateMsg('success');
      this.clear();
    });
  }

  clear() {
    this.addTypeDepartmentObj.departmentName = '';
  }

  getClickResponse() {
    this.interactionService.msgDataSource$.subscribe(msg => {
      this.clear();
    });
  }
}
