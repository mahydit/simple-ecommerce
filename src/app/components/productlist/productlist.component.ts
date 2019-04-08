import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from "../../product";
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService, private cartSerivce: CartService) {}

  ngOnInit() {
    this.products = this.productService.findAll();
  }

  addToCart(id) {
    this.cartSerivce.add(id);
  }

  addToWishlist(id){
    console.log("wishlist",id);
  }

}
