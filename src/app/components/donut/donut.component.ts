import { Component } from '@angular/core';
import { DonutModel, Result } from '../../models/donut';
import { DonutService } from '../../services/donut.service';
import {RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-donut',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.css'
})
export class DonutComponent {
  donutResult:DonutModel = {} as DonutModel;
  constructor(/*Dependency Injection=>*/private DonutService: DonutService, private CartService: CartService){}
  
  ngOnInit(){
    this.DonutService.getDonut().subscribe((response: DonutModel) => {
      this.donutResult=response;
    })
  }
  addToCart(d: Result){
    this.CartService.addDonut(d);
  }
}
