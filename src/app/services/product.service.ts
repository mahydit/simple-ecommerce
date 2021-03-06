import { Injectable } from '@angular/core';
import { Product } from "../product";
import ProductsFile from "../../assets/products.json";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[];

  constructor() { 
    this.products = ProductsFile['arrayOfProducts'];
  }

  findAll(): Product[] {
    return this.products;
  }

  find(id: string): Product {
      return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }
}
