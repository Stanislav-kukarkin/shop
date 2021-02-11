import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FbResponse } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  create(Order){
    return this.http.post(`${environment.fbDbUrl}/Orders.json`, Order)
    .pipe(map((res: FbResponse ) => {
      return{
        ...Order,
        id: res.name,
        date: new Date(Order.date)
      }
    }))
  }

  //getAll(){
  //  return this.http.get(`${environment.fbDbUrl}/products.json`)
  //  .pipe( map(res =>{
  //    return Object.keys(res)
  //    .map( key => ({
  //      ...res[key],
  //      id: key,
  //      date: new Date(res[key].date)
  //    }))
  //  }))
  //}


  //remove(id){
  //  return this.http.delete(`${environment.fbDbUrl}/products/${id}.json`)
  //}

}
