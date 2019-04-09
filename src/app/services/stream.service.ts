import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  private name: BehaviorSubject<string> = new BehaviorSubject('');
  private cartCount: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private cartService: CartService) {
    this.cartCount.next(this.cartService.calculateTotalItems().toString());
  }

  setCartCount(val?: string): void {
    this.cartCount.next(val);
  }

  getCartCount(){
    return this.cartCount.asObservable();
  }

}
