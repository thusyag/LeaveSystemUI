import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/user';
import { InteractionService } from 'src/app/UIService/interaction.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private interactionService: InteractionService) { }

  ngOnInit() {
    this.getAllUsers();
    this.interactionService.msgDataSource$.subscribe(msg => {
      console.log('Update', msg);
      this.getAllUsers();
    });
  }

  getAllUsers() {
    return this.userService.getAllUser().subscribe(data => {
      this.users = data;
    });
  }

  getUserById(user) {
    this.interactionService.sendUser(user);
    console.log(user);
  }

}
