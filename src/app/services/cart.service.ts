import { Injectable } from '@angular/core';
import { Product } from '../models/product/product';
import { CartItem } from '../models/cart/cartItem';
import { CartItems } from '../models/cart/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product : Product){
   let item = CartItems.find(c=> c.product.id === product.id);
    if(item){
      item.quantity+=1
    }else{
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(product:Product){
    let item = CartItems.find(c=> c.product.id === product.id);
    item != null ? CartItems.splice(CartItems.indexOf(item), 1) : alert("bir hata oluştu");
    
  }

  list():CartItem[]{
    return CartItems;
  }
}
