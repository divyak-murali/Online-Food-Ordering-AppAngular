import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';
import { TitleComponent } from "../../partials/title/title.component";
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
  selector: 'app-cart-page',
  imports: [TitleComponent, CommonModule, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent  implements OnInit {
cart!:Cart;
constructor(private cartService:CartService){
this.cartService.getCartObservable().subscribe(cart=>{
  this.cart=cart;
})
}
removeFromCart(cartItem:CartItem){
this.cartService.removeFromCart(cartItem.food.id);
}
changeQuantity(cartItem:CartItem,quantityString:string){
const quantity=parseInt(quantityString);
this.cartService.changeQuantity(cartItem.food.id,quantity);
}
cartItem!:CartItem;
ngOnInit(): void {}

}
