import { Component, OnInit } from '@angular/core';
import { User, UserImg } from '../models/user.class';
import { ChangeImagesService } from '../services/changeImages.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  loggedUser:any;
  user:User={} as User;
  change:boolean=false;
  userImgUrl:UserImg={} as UserImg;
  profileImgUrl:string='';
  constructor(private changeImgService:ChangeImagesService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.loggedUser= localStorage.getItem('LoggedUser');
    this.user = JSON.parse(this.loggedUser)
    console.log(this.user);
    
  }
  displayChangeImg(){
this.change=true;
  }
  saveImgUrl(){
    this.userImgUrl.userId=this.user.id;
    this.userImgUrl.imgUrl=this. profileImgUrl;
this.changeImgService.changeImg(this.userImgUrl).subscribe(response=>{
const newUser = {...this.user,image:response}
localStorage.setItem('LoggedUser',JSON.stringify(newUser))
this.toastr.success('Profile image is changed')
  
})



    this.change=false;
  }
  

}
