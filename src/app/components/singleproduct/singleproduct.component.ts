import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {
  product: object;

  constructor(private route: ActivatedRoute,private http: HttpClient,private router : Router) {}

  ngOnInit() {
    this.http.get("../../../assets/products.json").subscribe(data => {
      let products = data["arrayOfProducts"];
      products.forEach((product: object) => {
        if (product['id'] == this.route.snapshot.params.id) {
          this.product = product;
        }
      });
      if (!this.product) {
        this.router.navigate(["404"]);
      }
    });
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
