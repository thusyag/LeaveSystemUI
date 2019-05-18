import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { InteractionService } from '../../UIService/interaction.service';
import { Role } from '../../Models/role.model';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {
editRoleObj = new Role();
  constructor(private roleService: RoleService, private interactionService: InteractionService) { }

  ngOnInit() {
    this.getRoleRecord();
  }
  getRoleRecord() {
    this.interactionService.roleDataSource$.subscribe(data => {
      this.editRoleObj = data;
      console.log(data);
      this.editRoleObj = Object.assign({}, data);
    });
  }

  updateRole() {
    return this.roleService.editRole(this.editRoleObj).subscribe(data => {
      console.log(data);
      this.interactionService.upadateMsg(' success ');
    });
  }


}
