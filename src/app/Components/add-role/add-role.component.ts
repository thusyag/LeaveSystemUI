import { Component, OnInit } from '@angular/core';
import { Role } from '../../Models/role.model';
import { InteractionService } from '../../UIService/interaction.service';
import {RoleService } from '../../services/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  adRole: Role[];
  addRoleObj = new Role();
  constructor(private roleService: RoleService, private interactionService: InteractionService) { }

  ngOnInit() {
    this.getClickResponse();
  }

  addRole() {
    this.roleService.adddRole(this.addRoleObj).subscribe(data => {
      console.log(data);
      this.interactionService.upadateMsg('success');
    });
  }

  clear() {
    this.addRoleObj.roleName = '';
  }

  getClickResponse() {
    this.interactionService.msgDataSource$.subscribe(msg => {
      this.clear();
    });
  }
}
