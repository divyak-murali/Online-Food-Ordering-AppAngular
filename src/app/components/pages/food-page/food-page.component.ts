import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  imports: [CommonModule],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
food!:Food;
constructor(activatedRoute:ActivatedRoute,foodService:FoodService,private cartService:CartService,
  private router:Router
){
activatedRoute.params.subscribe((params)=>{
  if(params.id)
    this.food=foodService.getFoodById(params.id);
})
}
stars=[1,2,3,4,5];
addToCart(){
this.cartService.addToCart(this.food);
this.router.navigateByUrl('/cart-page');
}
}
