import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../Models/department';
import { InteractionService } from 'src/app/UIService/interaction.service';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {

  departments: Department[];
  departmentObj = new Department();

  constructor(private departmentService: DepartmentService, private interactionService: InteractionService) { }

  ngOnInit() {
    this.viewDepartment();
    this.interactionService.msgDataSource$.subscribe(msg => {
      console.log('Update ' + msg);
      this.viewDepartment();
    });
  }

  viewDepartment() {
    return this.departmentService.getDepartment().subscribe(data => {
      this.departments = data;
      console.log(data);
    });
  }

  getDepartmentById(department) {
    // this.departmentObj = department;
    console.log(department);
    this.interactionService.sendDepartment(department);
  }

  deleteDepartmentById(department) {
    // this.departmentObj = department;
    this.departmentObj = department;
    console.log(this.departmentObj);
  }

  createDepartment() {
    return this.departmentService.addDepartment(this.departmentObj).subscribe(data => {
      console.log(this.departmentObj);
      this.viewDepartment();
    });
  }

  deleteDepartment() {
    return this.departmentService.deleteDepartment(this.departmentObj).subscribe(data => {
      console.log(this.departmentObj);
      this.viewDepartment();
    });
  }

  addDepartmentClick() {
    this.interactionService.upadateMsg('clicked');
  }
}
