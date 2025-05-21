import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from '../../partials/tags/tags.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [NgFor, SearchComponent,TagsComponent],

})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private foodService: FoodService,activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        this.foods=this.foodService.getAllFoodBySearchedItem(params.searchTerm)
      else if(params.tag)
        this.foods=this.foodService.getAllFoodByTags(params.tag);
      else
      this.foods = foodService.getAll();

    })
  }
stars=[1,2,3,4,5];
  ngOnInit(): void {}
}
