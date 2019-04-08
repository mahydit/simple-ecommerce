import { Component, OnInit } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
import { ProductService } from 'src/app/services/product.service';
import { Product } from "../../product";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  products: Product[];

  //private http: HttpClient,
  constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.http.get("../../../assets/products.json").subscribe(data => {
    //   this.products = data["arrayOfProducts"];
    // });
    this.products = this.productService.findAll();
  }

  addToCart(id) {
    console.log("cart",id);
    let productsInCart = [];
    if (localStorage.getItem('productsInCart')) {
      productsInCart = JSON.parse(localStorage.getItem('productsInCart'));
      if (productsInCart.length) {

      } else {
  
      }
    }
    
    // localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
  }

  addToWishlist(id){
    console.log("wishlist",id);
  }

}
