import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;

  constructor() {
    localStorage.removeItem("cart");
    localStorage.removeItem("wishlist");
  }

  setIsAuthenticated(state: boolean): void{
    this.isAuthenticated = state;
  }

  getIsAuthenticated(): boolean{
    return this.isAuthenticated;
  }
}
