import { Injectable } from '@angular/core';
import { Product } from '../product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private products: Product[] = [];
  
  constructor(
    private productService: ProductService
  ) {}

  loadWishlist(): Product[] {
    this.products = [];
    let wishlist = JSON.parse(localStorage.getItem('wishlist'));
    if (wishlist) {
      this.products = wishlist;
    }
    return this.products;
  }

  remove(id: string): void {
    let wishlist: any = JSON.parse(localStorage.getItem('wishlist'));
    wishlist.map(function (product: Product) {
      if (product.id == id) {
          wishlist.splice(product, 1);
      }
    });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }

  add(id: string): void {
    let wishlist: any = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (id) {
      var product: Product = this.productService.find(id);
      if (!wishlist || !wishlist.length) {
        wishlist.push(product);
      } else {
        let found: boolean = false;
        wishlist.map(function (product: Product) {
          if (product.id == id) {
            found = true;
          }
        });
        if (!found) {
          wishlist.push(product);
        }
      }
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }
}
