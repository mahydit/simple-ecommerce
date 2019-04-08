import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { HttpClient } from "@angular/common/http";
import { ProductService } from 'src/app/services/product.service';
import { Product } from "../../product";


@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {
  product: Product;

  //,private http: HttpClient
  constructor(private route: ActivatedRoute,private router : Router,private productService: ProductService) {}

  ngOnInit() {
    // this.http.get("../../../assets/products.json").subscribe(data => {
    //   let products = data["arrayOfProducts"];
    //   products.forEach((product: object) => {
    //     if (product['id'] == this.route.snapshot.params.id) {
    //       this.product = product;
    //     }
    //   });
    //   if (!this.product) {
    //     this.router.navigate(["404"]);
    //   }
    // });
    this.product = this.productService.find(this.route.snapshot.params.id);
    // console.log(this.product);
    if (!this.product) {
          this.router.navigate(["404"]);
        }
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
