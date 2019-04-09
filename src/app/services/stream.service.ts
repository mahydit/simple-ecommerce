import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './cart.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  private authenticated: BehaviorSubject<string> = new BehaviorSubject('');
  private cartCount: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private cartService: CartService, private auth: AuthService) {
    this.cartCount.next(this.cartService.calculateTotalItems().toString());
    this.authenticated.next(this.auth.getIsAuthenticated().toString());
  }

  setCartCount(val?: string): void {
    this.cartCount.next(val);
  }

  getCartCount(){
    return this.cartCount.asObservable();
  }

  setAuthenticated(val?: string): void {
    this.authenticated.next(val);
  }

  getAuthenticated(){
    return this.authenticated.asObservable();
  }
}
