import { Component } from '@angular/core';
import { DetailedDonut, Result } from '../../models/donut';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  detailedDonut: DetailedDonut = {} as DetailedDonut;
  plainDonut: Result = {} as Result;
  constructor(private CartService: CartService, private donutService: DonutService){}
  
  getCart():Result[] {
    return this.CartService.cart;
  }

  buy(){
    this.CartService.resetCart();
  }

getTotal(): number{
  let total:number=0;
  this.CartService.cart.forEach(d=>total+=1);
  return total;
}


}
