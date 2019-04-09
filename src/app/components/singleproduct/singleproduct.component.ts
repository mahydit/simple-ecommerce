import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from "../../product";
import { CartService } from 'src/app/services/cart.service';
import { StreamService } from 'src/app/services/stream.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private productService: ProductService, 
    private cartService: CartService,
    private streamService: StreamService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.product = this.productService.find(this.route.snapshot.params.id);
    if (!this.product) {
      this.router.navigate(["404"]);
    }
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
