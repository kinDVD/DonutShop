import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailedDonut } from '../models/donut';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

    getDonut():Observable <DetailedDonut>{
      return this.http.get<DetailedDonut>("https://grandcircusco.github.io/demo-apis/donuts.json")
    }
}
