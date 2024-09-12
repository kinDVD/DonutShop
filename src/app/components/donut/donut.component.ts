import { Component } from '@angular/core';
import { DonutModel } from '../../models/donut';
import { DonutService } from '../../services/donut.service';
import {RouterLink } from '@angular/router';

@Component({
  selector: 'app-donut',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.css'
})
export class DonutComponent {
  donutResult:DonutModel = {} as DonutModel;
  constructor(private DonutService: DonutService){}
  
  ngOnInit(){
 
    this.DonutService.getDonut().subscribe((response: DonutModel) => {
      console.log(response);
      this.donutResult=response;
    })
  }
  addToCart(d: DonutModel){
    this.DonutService.addDonut(d);
  }
}
