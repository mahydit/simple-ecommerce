import { Component, OnInit } from '@angular/core';
import { StreamService } from 'src/app/services/stream.service';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount: any;
  show : boolean = false;
  authenticated: any;

  constructor(
    private streamService: StreamService, 
    private auth: AuthService,
    private cartService: CartService,
    private router: Router
  ){
    this.streamService.getCartCount().subscribe(res => this.cartCount = res);
    this.streamService.getAuthenticated().subscribe(res => this.authenticated = res);
    this.authenticated = (this.authenticated =="true");
  }

  ngOnInit() {
    if(this.cartCount>0){
      this.show = true;
    }
  }

  logout(){
    this.streamService.setAuthenticated("false");
    this.authenticated = false;
    localStorage.removeItem("cart");
    localStorage.removeItem("wishlist");
    this.streamService.setCartCount(this.cartService.calculateTotalItems().toString());
    this.router.navigate(['']); 
  }

}
