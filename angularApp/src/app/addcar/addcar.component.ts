import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car.class';
import { AddCarService } from '../services/addCar.service';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category.class';
import { User } from '../models/user.class';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.scss']
})
export class AddcarComponent implements OnInit {
  car: Car = {} as Car;
  loggedUser:any;
  user:User={} as User;
  textInputErr:boolean=false;
  yearError:boolean=false;
  priceError:boolean=false;
  milageError:boolean=false;
 
  categorys:Category[]=[];
  constructor(
    private addCarService:AddCarService,
    public categoriesService:CategoriesService,
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {
    this.getCategories()
  }


  getCategories=()=>{
 this.categoriesService.getCategories().subscribe((response:any)=>{
  console.log("getCategories",response);
this.categorys=response;
});
  };


  addCar(evt:any){
    evt.preventDefault();
    if(this.car.name.length < 2){
      this.textInputErr=true;
      return;
        }
      if(this.car.mark.length < 2){
          this.textInputErr=true;
          return;
            }
     if(this.car.model.length < 1){
         this.textInputErr=true;
         return;
              }
        if(this.car.fuel.length < 2){
             this.textInputErr=true;
             return;
            }
            if(this.car.description.length < 2){
              this.textInputErr=true;
              return;
             }
             if(this.car.year < 1900){
              this.yearError=true;
              return;
             }
             if(this.car.milage < 0){
              this.milageError=true;
              return;
             }
             if(this.car.price < 100){
              this.priceError=true;
              return;
             }

    this.loggedUser= localStorage.getItem('LoggedUser');
    this.user = JSON.parse(this.loggedUser);
    this.car.user_id=this.user.id;
    console.log("Publish car",this.car
    );
    this.addCarService.addCar(this.car).subscribe((response)=>{
      this.toastr.success('Your car is successfully published')
   console.log(response);
   
    });
    
  }
}
