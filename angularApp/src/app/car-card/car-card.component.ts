import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Car } from '../models/car.class';
import { GetAllCarsService } from '../services/getAllCars.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit,OnDestroy {
cars:Car[]=[];
car:Car={} as Car;
carsSubscription:Subscription|undefined;
  constructor(
    private getAllCarsService:GetAllCarsService,
    private searchService:SearchService,
    private router:Router) { }


    ngOnDestroy(): void {
      this.carsSubscription?.unsubscribe();
      this.searchService.resetValues();
     }
   
     ngOnInit(): void {
       this.carsSubscription=this.searchService.cars.subscribe((cars:Car[])=>{
   this.cars=cars;
   console.log('Auta',cars);
   
       });

       this.searchService.SearchCars();
     }
     
 
    goToCarPage(i:number){
      const car = this.cars[i];
      this.router.navigateByUrl(`car/page/${i}`);
      console.log(car);
      
    }

}
