import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category.class';
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Car } from '../models/car.class';
import { User } from '../models/user.class';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  loggedUser:any;
  user:User={} as User;
  displayLoggedContent:boolean=false;
  categorys:Category[]=[];
  carsSubscription:Subscription|undefined;
  cars:Car[]=[];
  car:Car={} as Car;

  constructor(
    public categoriesService:CategoriesService,
    private searchService:SearchService,
    private router:Router) { }

  ngOnInit(): void {
    this.getCategories()
    this.displayLoggedCont()
  }

  displayLoggedCont(){
    this.loggedUser= localStorage.getItem('LoggedUser');
    this.user = JSON.parse(this.loggedUser)
     if(this.user){
      this.displayLoggedContent=true;
    }
   }

  getCategories=()=>{
    this.categoriesService.getCategories().subscribe((response:any)=>{
     console.log("getCategories",response);
   this.categorys=response;
   });
     };
   async  searchCategory(id:number){
      this.searchService.updateFilter({categoryId:id});
      await this.searchService.SearchCars();
    }

}
