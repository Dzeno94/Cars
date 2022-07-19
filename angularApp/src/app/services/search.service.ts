import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Car } from '../models/car.class';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  cars:Subject<Car[]>=new Subject<Car[]>();
  filter:BehaviorSubject<ICarsFilter>=new BehaviorSubject<ICarsFilter>({});

  constructor(private httpClient:HttpClient) { 
}

updateFilter(newFilter:ICarsFilter){
  const oldFilter=this.filter.getValue();
  this.filter.next({...oldFilter,...newFilter});
}

resetValues(){
  this.cars.next([]);
   this.filter.next({});
}

async SearchCars(){
  const filter=this.filter.getValue();
  let queryString="";
  if(filter){
    if(filter.carName){
      if(!queryString){
        queryString="?carName="+filter.carName;
      }else{
        queryString+="&carName="+filter.carName;
      }
    }

    if(filter.categoryId){
      if(!queryString){
        queryString="?categoryId="+filter.categoryId;
      }else{
        queryString+="&categoryId="+filter.categoryId;
      }
    }
  }

  const api = environment.serverUrl +'/search'+queryString;
  const carsResp= await this.httpClient.get(api).toPromise() as Car[];
  this.cars.next(carsResp??[]);

}

}

export interface ICarsFilter{
  carName?:string;
  categoryId?:number;
}