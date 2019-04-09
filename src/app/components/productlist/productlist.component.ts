import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from "../../product";
import { CartService } from 'src/app/services/cart.service';
import { StreamService } from 'src/app/services/stream.service';

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
    private streamService: StreamService
    ) {}

  ngOnInit() {
    this.products = this.productService.findAll();
  }

  addToCart(id) {
    this.cartService.add(id);
    this.streamService.setCartCount(this.cartService.calculateTotalItems().toString());
  }

  addToWishlist(id){
    console.log("wishlist",id);
  }

}
