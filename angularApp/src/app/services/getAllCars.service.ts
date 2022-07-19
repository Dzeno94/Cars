import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car.class';

@Injectable({
  providedIn: 'root'
})
export class GetAllCarsService {
 
  constructor(private httpClient:HttpClient) { 
}
getCars(car:Car){
  const api = environment.serverUrl +'/getAllCars';
  
 return this.httpClient.get(api);
}
getOneCar(carId:number){
  const api = environment.serverUrl +'/getCarPaige?carid='+carId;
  
 return this.httpClient.get(api);
}
getUsersCars(userId:number){
  const api = environment.serverUrl +'/getUsersCars?userId='+userId;
  
 return this.httpClient.get(api);
}




}