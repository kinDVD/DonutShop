import { Injectable } from '@angular/core';
import { Result } from '../models/donut';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Result [] = [];

  addDonut(d: Result){
    this.cart.push(d);
  }
  resetCart(){
      this.cart = [];
   }

}
