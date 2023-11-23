import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../shared/models/Product';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/type';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = 'http://localhost:5136/api/';

  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get<IProduct>(this.baseUrl + 'Products');
  }

  getBrands() {
    return this.http.get<IBrand> (this.baseUrl + 'Products/Brands');
  }

  getTypes()  {
    return this.http.get<IType> (this.baseUrl + 'Products/Types');
  }
}
