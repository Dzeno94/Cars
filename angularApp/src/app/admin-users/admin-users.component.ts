import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.class';
import { BanUserService } from '../services/banUser.service';
import { GetAllUsersService } from '../services/getAllUsers.service';
import { UserComponentComponent } from '../user-component/user-component.component';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  user:User={} as User;
  users:any;
  constructor(
    private getAllUsers:GetAllUsersService,
    private banUserService:BanUserService
    ) { }

  ngOnInit(): void {
    this.getUsers(this.user)

  }
  banUser(userId:number){
    this.user.id=userId;
    this.user.status='BANED'
    this.banUserService.banUser(this.user).subscribe(response=>{
      console.log('Banovao si korisnika sa id:',this.user);
      
    })
    this.getUsers(this.users)
  }

  getUsers(user:User){
    this.getAllUsers.getUsers(user).subscribe((response)=>{
console.log('Get All users',response);
this.users=response;
console.log(this.users);


    })
  }
}
