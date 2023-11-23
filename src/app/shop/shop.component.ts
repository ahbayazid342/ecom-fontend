import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/models/Product';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/type';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: IProduct[] = [];
  brands: IBrand[] = [];
  types: IType[] = [];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts() {
    this.shopService.getProducts().subscribe((response: any) => {
      this.products = response;
    }, err => console.log(err))
  }

  getBrands () {
    this.shopService.getBrands().subscribe((response:any) => {
      this.brands = response;
    }, err => console.log(err))
  }

  getTypes () {
    this.shopService.getTypes().subscribe((response:any) => {
      this.types = response;
    }, err => console.log(err))
  }

}
