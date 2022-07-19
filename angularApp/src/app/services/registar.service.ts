import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class RegistarService {

  constructor(private httpClient:HttpClient) { }


  registerUser(user:User){
    const api = environment.serverUrl +'/user/register';
    
   return this.httpClient.post<String>(api,user);
  }
}
