import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CarImg } from '../models/carImg.class';
import { UserImg } from '../models/user.class';


@Injectable({
  providedIn: 'root'
})
export class ChangeImagesService {

  constructor(private httpClient:HttpClient) { }


  changeImg(userImg:UserImg){
    const api = environment.serverUrl +'/user/changeImg';
    
   return this.httpClient.put(api,userImg);
  }
 addCarImg(carImg:CarImg){
    const api = environment.serverUrl +'/car/addCarImg';
    return this.httpClient.post(api,carImg);
    
  }
  getCarImg(carId:number){
    const api = environment.serverUrl +'/car/getImg?carId=' + carId;
    return this.httpClient.get(api);
  }
}
