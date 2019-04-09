import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from "../../product";
import { CartService } from 'src/app/services/cart.service';
import { StreamService } from 'src/app/services/stream.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService, 
    private cartService: CartService,
    private streamService: StreamService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.products = this.productService.findAll();
  }

  addToCart(id) {
    if(this.auth.getIsAuthenticated()){
      this.cartService.add(id);
      this.streamService.setCartCount(this.cartService.calculateTotalItems().toString());
    }
    else{
      this.router.navigate(['login']);   
    }
  }

  addToWishlist(id){
    if(this.auth.getIsAuthenticated()){
      console.log("wishlist",id);
    }
    else{
      this.router.navigate(['login']);   
    }
  }

}
