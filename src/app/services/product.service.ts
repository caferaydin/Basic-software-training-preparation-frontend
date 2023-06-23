import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://127.0.0.1:7117/api/";


  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "Products/getAll";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  
  getAllByCategoryId(id:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "Products/getAllByCategory?Id="+id;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  
}
