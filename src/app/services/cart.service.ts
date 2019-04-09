import { Injectable } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Item } from "../item";


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Item[] = [];

  constructor(
    private productService: ProductService
  ) {}

  loadCart(): Item[] {
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      this.items = cart;
    }
    return this.items;
  }

  calculateTotalPrice(): number {
    let totalPrice: number = 0;
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      cart.map(function (item: Item) {
        totalPrice += item.product.price * item.quantity;
      });
    }
    return totalPrice;
  }

  calculateTotalItems(): number {
    let totalItems: number = 0;
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      cart.map(function (item: Item) {
        totalItems += item.quantity;
      });
    }
    return totalItems;
  }

  remove(id: string): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    cart.map(function (item: Item) {
      if (item.product.id == id) {
        if (item.quantity <= 1) {
          cart.splice(item, 1);
        } else {
          item.quantity -= 1;
        }
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  add(id: string): void {
    let cart: any = JSON.parse(localStorage.getItem('cart')) || [];
    if (id) {
      var item: Item = {
        product: this.productService.find(id),
        quantity: 1
      };
      if (!cart || !cart.length) {
        cart.push(item);
      } else {
        let found: boolean = false;
        cart.map(function (item: Item) {
          if (item.product.id == id) {
            found = true;
            item.quantity += 1;
          }
        });
        if (!found) {
          cart.push(item);
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

}
