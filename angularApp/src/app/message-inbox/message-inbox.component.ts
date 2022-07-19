import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message.class';
import { User } from '../models/user.class';
import * as moment from 'moment';
@Component({
  selector: 'app-message-inbox',
  templateUrl: './message-inbox.component.html',
  styleUrls: ['./message-inbox.component.scss']
})
export class MessageInboxComponent implements OnInit {
  messages:Message[]=[];
  loggedUser:any;
  user:User={} as User;
  message:Message = {} as Message;
  replyTxt:string='';
  replyToogle:boolean=false;


  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
    this.getMessages()
  }
  replyToogleBtn(){
    this.replyToogle=true;
  }
  
  getMessages(){
    this.loggedUser=localStorage.getItem('LoggedUser')
    this.user = JSON.parse(this.loggedUser); 
    this.messageService.getMessage(this.user.id).subscribe((response:any)=>{
      
      this.messages=response;
      console.log('Poruke',this.messages);
    })
  }
  deleteMsg(messageId:number){
this.messageService.deleteMsg(messageId).subscribe(response=>{
  console.log('Obrisao si poruku',response);
  
})
this.getMessages()
  }
  replyMsg(fromUserId:number,toUserId:number){
    this.message.fromUserId=toUserId;
    this.message.toUserId=fromUserId;
    this.message.message=this.replyTxt;
 this.message.messageTime=moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
 this.messageService.sendMessage(this.message).subscribe(response=>{
  console.log('You replyed on message',response);
  
 })
 this.replyToogle=false;
  }
}
