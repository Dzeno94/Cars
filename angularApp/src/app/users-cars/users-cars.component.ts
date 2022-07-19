import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car.class';
import { CarImg } from '../models/carImg.class';
import { User } from '../models/user.class';
import { AddCarService } from '../services/addCar.service';
import { ChangeImagesService } from '../services/changeImages.service';
import { GetAllCarsService } from '../services/getAllCars.service';

@Component({
  selector: 'app-users-cars',
  templateUrl: './users-cars.component.html',
  styleUrls: ['./users-cars.component.scss']
})
export class UsersCarsComponent implements OnInit {
  cars:Car[]=[] ;
  loggedUser:any;
  user:User={} as User;
  change:boolean=false;
  carImgUrl:string="";
  carImg:CarImg= {} as CarImg;

  constructor(
    private getAllCars:GetAllCarsService,
    private deleteCar:AddCarService,
    private addCarImg:ChangeImagesService) { }

  ngOnInit(): void {
  this.fetchUserCars()
    
    
  }
  displayChangeImg(){
    this.change=true;
      }

fetchUserCars() {
  this.loggedUser= localStorage.getItem('LoggedUser');
    this.user = JSON.parse(this.loggedUser);
    
  this.getAllCars.getUsersCars(this.user.id).subscribe((response :any)=>{
    console.log('All users cars',response);
    this.cars=response;
    
    
  })
}
deleteUserCar(carId:number){
  this.deleteCar.deleteCar(carId).subscribe(response=>{
console.log('Car is deleted');

  })
  }
  saveCarImgUrl(carId:number){
    this.carImg.image=this.carImgUrl;
    this.carImg.id=carId;
this.addCarImg.addCarImg(this.carImg).subscribe(response=>{

})
this.change=false;
  }

}
