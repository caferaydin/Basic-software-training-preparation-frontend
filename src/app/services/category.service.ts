import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/Category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "https://127.0.0.1:7117/api/"

  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>> {
    let newPath = this.apiUrl + "Categories/getAll";
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }
  getById(id:number) {
    let newPath = this.apiUrl + "Categories/getById/"+ id;
    return this.httpClient.get<ListResponseModel<Category>>(newPath);

  }
}
