import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }


  getAllProducts() {
    return this.http.get<any[]>('https://fakestoreapi.com/products')
  }
}
