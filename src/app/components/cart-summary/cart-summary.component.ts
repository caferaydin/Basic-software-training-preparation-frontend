import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart/cartItem';
import { Product } from 'src/app/models/product/product';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
 
  cartItems : CartItem[];
  
  constructor(
    private cartService : CartService,
    private toastrService : ToastrService
  ) {
  }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }
  removeFromCart(product : Product){
    this.cartService.removeFromCart(product);
    this.toastrService.error("Ürün Silindi");
  }
}
