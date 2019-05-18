import { InteractionService } from './../../UIService/interaction.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/user';
import { RoleService } from 'src/app/services/role.service';
import { DepartmentService } from 'src/app/services/department.service';
import { Role } from 'src/app/Models/role.model';
import { Department } from 'src/app/Models/department';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  departmentHasError = true;
  userObj = new User();

  roles: Role[];
  departments: Department[];

  msg = 'fail';

  constructor(private userService: UserService,
    private roleService: RoleService,
    private departmentService: DepartmentService,
    private interactionService: InteractionService) { }

  addUserForm = new FormGroup({
    userName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3),
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])),
    firstName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])),
    lastName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])),
    roleId: new FormControl(''),
    departmentId: new FormControl(''),
    joinDate: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3)
    ])),
  });

  ngOnInit() {
    this.getRoles();
    this.getDepartments();
    this.clearFields();
  }
  // validateDepartment(value){
  //   if (value == 'default'){
  //     this.departmentHasError=true;
  //   }else{
  //     this.departmentHasError=false;
  //   }
  // }

  onSubmit() {

    const joinDate = new Date(this.addUserForm.value.joinDate);
    const currentDate = new Date();


    const sPeriod = (currentDate.getDate() - joinDate.getDate()) + 1;
    // var days = leaveDays / (1000 * 60 * 60 * 24) + 1;

    console.log(sPeriod);
    this.userObj.servicePeriod = sPeriod;

    this.userObj.userName = this.addUserForm.value.userName;
    this.userObj.email = this.addUserForm.value.email;
    this.userObj.password = this.addUserForm.value.password;
    this.userObj.firstName = this.addUserForm.value.firstName;
    this.userObj.lastName = this.addUserForm.value.lastName;
    this.userObj.roleId = this.addUserForm.value.roleId;
    this.userObj.departmentId = this.addUserForm.value.departmentId;
    this.userObj.joinDate = new Date(this.addUserForm.value.joinDate);

    console.log(this.userObj);

    this.userService.createUser(this.userObj).subscribe(data => {
      console.log('new user create successfully');
      this.msg = 'success';
      this.interactionService.upadateMsg('success');
      this.clearFields();
    });

    if (this.msg === 'fail') {
      this.interactionService.upadateMsg('fail');
    }

  }

  getRoles() {
    this.roleService.getAllRoles().subscribe(data => {
      this.roles = data;
    });
  }

  getDepartments() {
    this.departmentService.getDepartment().subscribe(data => {
      this.departments = data;
    });
  }

  clearFields() {
    this.addUserForm.patchValue({ userName: "" });
    this.addUserForm.patchValue({ email: "" });
    this.addUserForm.patchValue({ password: "" });
    this.addUserForm.patchValue({ firstName: "" });
    this.addUserForm.patchValue({ lastName: "" });
    this.addUserForm.patchValue({ roleId: "Select Role" });
    this.addUserForm.patchValue({ departmentId: "Select Department" });
    this.addUserForm.patchValue({ joinDate: "" });
  }

}
