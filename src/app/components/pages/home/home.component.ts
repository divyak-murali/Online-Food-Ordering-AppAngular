import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from '../../partials/tags/tags.component';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone:true,
  imports: [NgFor, SearchComponent, TagsComponent, NotFoundComponent],

})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private foodService: FoodService,activatedRoute:ActivatedRoute) {
    let foodObservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        foodObservable=this.foodService.getAllFoodBySearchedItem(params.searchTerm)
      else if(params.tag)
        foodObservable=this.foodService.getAllFoodByTags(params.tag);
      else
      foodObservable = foodService.getAll();
    foodObservable.subscribe((serverFood)=>{
      this.foods=serverFood
    })

    })
  }
stars=[1,2,3,4,5];
  ngOnInit(): void {}
}
