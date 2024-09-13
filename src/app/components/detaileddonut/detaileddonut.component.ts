import { Component } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DetailedDonut, DonutModel, Result} from '../../models/donut';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-detaileddonut',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detaileddonut.component.html',
  styleUrl: './detaileddonut.component.css'
})
export class DetaileddonutComponent {

  donutResult: DetailedDonut = {} as DetailedDonut;
  results: Result = {} as Result;

  constructor(private donutService: DonutService, private activatedRoute: ActivatedRoute, private CartService: CartService){}

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((params)=>{
      let id:number = Number(params.get("id"));

      this.donutService.getDonutDetails(id).subscribe((response: DetailedDonut) => {
        this.donutResult = response;
      });
    })
    
    this.donutService.getDonut().subscribe((response: DonutModel) => {
      response.results.forEach(donut => {
        if(donut.name === this.donutResult.name){
          this.results = donut;
        }
      })
    });

  }
  addToCart(results: Result){
    this.CartService.addDonut(results);
  }

}


