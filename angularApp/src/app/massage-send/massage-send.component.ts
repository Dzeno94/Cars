import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Message } from '../models/message.class';
import { User } from '../models/user.class';
import { GetAllUsersService } from '../services/getAllUsers.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-massage-send',
  templateUrl: './massage-send.component.html',
  styleUrls: ['./massage-send.component.scss']
})
export class MassageSendComponent implements OnInit {
message:Message = {} as Message;
msgText:string=''
toUserText:string='';
loggedUser:any;
user:User={} as User;
toUser:User={} as User;

  constructor(
    private messageService:MessageService,
    private getAllUsers:GetAllUsersService
    ) { }

  ngOnInit(): void {
    
  }
  getToUserId(){
    this.getAllUsers.getUsers(this.toUser).subscribe((response:any)=>{
console.log('Svi useri',response);
for (let toUserr of response){
  if(toUserr.username ===this.toUserText){
    
    this.message.toUserId=toUserr.id;
    console.log(toUserr);
  }
}
    })
  }
  sendMsg(){
    this.loggedUser=localStorage.getItem('LoggedUser')
    this.user = JSON.parse(this.loggedUser); 
     this.getToUserId();
     console.log('Message',this.message);
     
    this.message.messageTime=moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    this.message.message=this.msgText;
    this.message.fromUserId=this.user.id;
    

this.messageService.sendMessage(this.message).subscribe(response=>{
console.log('Poslano sa fronta msg',response);

})
    
  }


}
