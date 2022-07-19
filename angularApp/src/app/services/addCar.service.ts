import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car.class';

@Injectable({
  providedIn: 'root'
})
export class AddCarService {

  constructor(private httpClient:HttpClient) { 
}
addCar(car:Car){
  const api = environment.serverUrl +'/car/add';
  
 return this.httpClient.post<Car>(api,car);
}

deleteCar(carId:number){
  const api = environment.serverUrl +'/car/delete?carId=' + carId;
  return this.httpClient.delete(api);
}
}