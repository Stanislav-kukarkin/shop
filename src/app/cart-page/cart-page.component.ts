import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../shared/order.service';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cartProducts = []
  totalPrice = 0
  added = ''

  form :FormGroup;
  submitted = false

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
   this.cartProducts = this.productService.cartProducts
   for (let i = 0; i < this.productService.cartProducts.length; i++) {
     this.totalPrice += +this.cartProducts[i].price

   }

   this.form = new FormGroup({
    name: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    payment: new FormControl('cash'),

  })}

  Submit(){
    if(this.form.invalid){
      return
    }
    this.submitted = true
    const order = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      payment: this.form.value.payment,
      orders: this.cartProducts,
      price: this.totalPrice,
      date: new Date()
    }
    console.log(this.form)
    this.orderService.create(order).subscribe( res => {
      this.form.reset()
      this.added = "Заказ Совершён"
      this.submitted = false

    })
  }

  delete(product): void{
    this.cartProducts.splice(this.cartProducts.indexOf(product), 1)
    this.totalPrice = 0;
    for (let i = 0; i < product.length; i++) {
      this.totalPrice += parseInt(product[i].price)
    }
  }


}


