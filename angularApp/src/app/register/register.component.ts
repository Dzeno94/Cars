import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.class';
import { RegistarService } from '../services/registar.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 user: User = {} as User;
  textInputErr:boolean=false;
  passwordError:boolean=false;
  constructor(
    private router:Router,
     private registerService: RegistarService,
     private toastr:ToastrService
     
     ) { }

  ngOnInit(): void {
  }
  registerUser(evt:any){
    evt.preventDefault();
    if(this.user.firstName.length < 2){
  this.textInputErr=true;
  return;
    }
    if(this.user.password.length < 6){
      this.passwordError=true;
      return;
    }
    this.registerService.registerUser(this.user).subscribe((response)=>{
   console.log(response);
   this.toastr.success('You crated your profile')
   this.router.navigateByUrl("user/login");
    });
    
  }
 
}


