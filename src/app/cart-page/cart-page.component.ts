import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cartProducts = []
  totalPrice = 0

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
   this.cartProducts = this.productService.cartProducts
   for (let i = 0; i < this.productService.cartProducts.length; i++) {
     this.totalPrice += +this.cartProducts[i].price

   }
  }

}
