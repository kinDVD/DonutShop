import { Component } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { ActivatedRoute } from '@angular/router';
import { DetailedDonut } from '../../models/donut';

@Component({
  selector: 'app-detaileddonut',
  standalone: true,
  imports: [],
  templateUrl: './detaileddonut.component.html',
  styleUrl: './detaileddonut.component.css'
})
export class DetaileddonutComponent {

  donutResult: DetailedDonut = {} as DetailedDonut;

  constructor(private donutService: DonutService, private activatedRoute: ActivatedRoute){}

  ngOnIt(){
    this.activatedRoute.paramMap.subscribe((params)=>{

      let id:number = Number(params.get("id"));

      this.donutService.getDonutDetails(id).subscribe((response: DetailedDonut) => {
        this.donutResult = response;
      });
    })
  }
}
