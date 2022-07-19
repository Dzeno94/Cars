import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car.class';
import { GetAllCarsService } from '../services/getAllCars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars:Car[]=[];
  car:Car={} as Car;
  constructor(private getAllCarsService:GetAllCarsService,) { }

  ngOnInit(): void {
    
  }

}
