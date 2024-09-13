import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailedDonut, DonutModel, Result} from '../models/donut';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
 
  constructor(private http:HttpClient) { }

  getDonut():Observable <DonutModel>{
    return this.http.get<DonutModel>("https://grandcircusco.github.io/demo-apis/donuts.json")
  }

  getDonutDetails(id: number) : Observable<DetailedDonut> {
    return this.http.get<DetailedDonut>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`);
  }

  cart: Result[] = [];
  donut: Result = {} as Result;


}
