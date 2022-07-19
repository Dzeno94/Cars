import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car.class';
import { AddCarService } from '../services/addCar.service';
import { GetAllCarsService } from '../services/getAllCars.service';


@Component({
  selector: 'app-admin-cars',
  templateUrl: './admin-cars.component.html',
  styleUrls: ['./admin-cars.component.scss']
})
export class AdminCarsComponent implements OnInit {
  cars:Car[]=[] ;
  car:Car={} as Car;
  constructor
  (private getAllCarsService:GetAllCarsService,
    private deleteCar:AddCarService,
    ) { }

  ngOnInit(): void {
    this.getCars()
  }

  deleteOneCar(carId:number){
    this.deleteCar.deleteCar(carId).subscribe(response=>{
  console.log('Car is deleted');
  
    })
    this.getCars();
    }
 getCars(){
this.getAllCarsService.getCars(this.car).subscribe((response:any)=>{
  console.log(response);
  this.cars=response;
  
})
 }

}
