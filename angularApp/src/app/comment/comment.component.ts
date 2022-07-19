
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';


import { Comment } from '../models/comment.class';
import { User } from '../models/user.class';
import { CommentService } from '../services/Comment.service';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comment:Comment={}as Comment;
  comments:Comment[]=[];
  commentText:string="";
  user:User={} as User;
   loggedUser :any;
   @Input()  carid!: number;
  constructor(private commentService:CommentService) { }

 
  ngOnInit(): void {
    this.fetchComments(this.carid)
    console.log('fetch kom za',this.carid);
    
    console.log('KOMENTARI',this.comments);
    
  }
  postComment(){
    this.loggedUser=localStorage.getItem('LoggedUser')
    this.user = JSON.parse(this.loggedUser);    
 this.comment.comment=this.commentText;
 this.comment.commentTime=moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
 this.comment.carId=this.carid;
 this.comment.userId=this.user.id;
 console.log('carid u komentu je',this.comment);
 
 
 this.commentService.saveComment(this.comment).subscribe((response)=>{
  console.log(response);
 
})


 this.commentText='';
 
 
  }


  fetchComments(carId:number){
    this.commentService.getComments(carId).subscribe((response:any)=>{
  console.log('Fetch comments',response);
  this.comments=response;
    })
      }

}
