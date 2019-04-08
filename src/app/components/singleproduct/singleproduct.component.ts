import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from "../../product";
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.product = this.productService.find(this.route.snapshot.params.id);
    if (!this.product) {
          this.router.navigate(["404"]);
        }
  }

  addToCart(id) {
   this.cartService.add(id);
  }

  addToWishlist(id){
    console.log("wishlist",id);
  }

}
