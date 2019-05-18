import { Component, OnInit } from '@angular/core';
import { Role } from '../../Models/role.model';
import { RoleService } from '../../services/role.service';
import { InteractionService } from '../../UIService/interaction.service';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {
  roles: Role[];
  roleObj = new Role();
  errorMsg: any;
  constructor(private roleService: RoleService, private interactionService: InteractionService) {
  }

  // on time update thats why we use OnInit
  ngOnInit() {
    this.viewRole();
    this.observeChange();
    this.interactionService.msgDataSource$.subscribe(msg => {
      console.log('Update ' + msg);
      this.viewRole();
    });
  }

  viewRole() {
    this.roleService.getAllRoles().subscribe(data => {
      this.roles = data;
      console.log(data);
    });
  }

  getCode(status) {
    // this.errorMsg = status;
    console.log(status);
    if (status === 500) {
      this.errorMsg = 'delete-error';
    }
  }
  deleteRoleById(role) {
    return this.roleService.deleteRole(this.roleObj).subscribe(data => {
      console.log(this.roleObj);
      this.viewRole();
    });
  }

  getRoleById(role) {
    // console.log("get Role");
    // this.roleObj = role;
    console.log(role);
    this.interactionService.sendRole(role);
  }

  deleteRole(role) {
    this.roleObj = role;
    console.log(this.roleObj);
  }

  observeChange() {
    this.interactionService.msgDataSource$.subscribe(data => {
      console.log(data);
      this.viewRole();
    });
  }

  addRoleClick() {
    this.interactionService.upadateMsg("click");
  }
}
