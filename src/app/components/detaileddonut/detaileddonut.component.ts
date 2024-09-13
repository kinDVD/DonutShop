import { Component } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DetailedDonut, Result} from '../../models/donut';
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

  constructor(private donutService: DonutService, private activatedRoute: ActivatedRoute, private CartService: CartService){}

  ngOnIt(){
    this.activatedRoute.paramMap.subscribe((params)=>{
      let id:number = Number(params.get("id"));

      this.donutService.getDonutDetails(id).subscribe((response: DetailedDonut) => {
        this.donutResult = response;
      });
    })
  }
  addToCart(donutResult: DetailedDonut): void{
  
    if(this.donutService.donut.id = donutResult.id){
      let plainDonut: Result = this.donutService.donut;
      this.CartService.addDonut(plainDonut);
    }
  
  }



}
