import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods, sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FOOD_BY_ID_URL,
  FOODS_BY_SEARCH_URL,
  FOODS_BY_TAG_URL,
  FOODS_URL,
} from '../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }
  getAllFoodBySearchedItem(searchTerm: string) {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
    // return this.getAll().filter(food=>console.log(food.name.toLowerCase()));
  }
  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_BY_TAG_URL);
  }
  getAllFoodByTags(tag: string): Observable<Food[]> {
    return tag === 'All'
      ? this.getAll()
      : this.http.get<Food[]>(FOODS_BY_TAG_URL+tag)
  }
  getFoodById(foodId: string): Observable<Food> {
    return this.http.get<Food>(FOOD_BY_ID_URL+foodId)
  }
}
