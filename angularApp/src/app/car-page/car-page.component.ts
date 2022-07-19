import { Component,  OnInit, Output} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';
import { Car } from '../models/car.class';
import { CarImg } from '../models/carImg.class';
import { Message, MessageUsers } from '../models/message.class';
import { User } from '../models/user.class';
import { ChangeImagesService } from '../services/changeImages.service';

import { GetAllCarsService } from '../services/getAllCars.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit {
   
  @Output()  carIdNum!: number;
  car:Car={} as Car;
  index:number=0;
    @Output() carImages:CarImg[]= [];
    isUserLogged:boolean=false;
    massageUsers:MessageUsers={} as MessageUsers;
    user:User={} as User;
    message:Message = {} as Message;
loggedUser:any;
  constructor(
    private activetedRoute:ActivatedRoute,
     private getAllCarsService:GetAllCarsService,
    private messageService:MessageService,
     private getCarImgService:ChangeImagesService
     ) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe((params)=>{
      console.log("params",params);
    if(params["id"]){
      this.getCarPage(+params["id"]);
     
    }
    })
    
    this.haveLoggedUser()
   
  }
  buyCar(){
    this.user = JSON.parse(this.loggedUser);
    if(this.user.id == this.car.user_id) return;
    this.message.fromUserId=this.user.id;
    this.message.toUserId=this.car.user_id;
    this.message.messageTime=moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    this.message.message=`I like your car and want to buy it`;
this.messageService.sendMessage(this.message).subscribe(response=>{
console.log('Response buy car',response);

})
  }
  
  haveLoggedUser(){
      this.loggedUser= localStorage.getItem('LoggedUser');
      if(this.loggedUser) this.isUserLogged = true;
      else{
        this.isUserLogged=false;
      }
    }


  getCarPage(carId: number){
    console.log("carId",carId);
    this.carIdNum=carId;
    this.getAllCarsService.getOneCar(carId).subscribe((response:any)=>{
   console.log('get one car response',response);
  
   this.car=response && response.length>0?response[0]:{};
   console.log(this.car);
   this.getCarImgs(carId)
  
   
    });}

getCarImgs(carId:number){
this.getCarImgService.getCarImg(carId).subscribe((response:any)=>{
  console.log('Slike od Auta',response);
 this.carImages=response;
})
}

}
