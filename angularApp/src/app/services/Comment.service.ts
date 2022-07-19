import { HttpClient } from '@angular/common/http';
import   {Comment} from '../models/comment.class';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }


  saveComment(comment:Comment){
    const api = environment.serverUrl +'/comment/add';
    
   return this.httpClient.post(api,comment);
  }
  getComments(carId:number){
    const api = environment.serverUrl +'/comment/get?carId='+carId;
    
   return this.httpClient.get(api);
}
}