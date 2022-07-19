import { Component, OnInit } from '@angular/core';



import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  carName:string="";
 
 
  constructor(private searchService:SearchService) { }
  

  ngOnInit(): void {

  }
 async searchCars(){
    this.searchService.updateFilter({carName:this.carName});
    await this.searchService.SearchCars();
     };

}
