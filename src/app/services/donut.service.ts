import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailedDonut, DonutModel } from '../models/donut';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
 
  constructor(private http:HttpClient) { }

  cart:DonutModel[] = [];

  getDonut():Observable <DonutModel>{
    return this.http.get<DonutModel>("https://grandcircusco.github.io/demo-apis/donuts.json")
  }

  getDonutDetails(which: number) : Observable<DetailedDonut> {
    return this.http.get<DetailedDonut>(`https://grandcircusco.github.io/demo-apis/donuts/${which}.json`);
  }

  addDonut(d:DonutModel){
    this.cart.push(d);
  }

  resetCart(){
    this.cart = [];
  }
}
