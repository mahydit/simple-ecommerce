import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: []
})
export class WishlistComponent implements OnInit {
  private products: Product[] = [];

  constructor(
    private wishlistService: WishlistService
  ) {}

  ngOnInit() {
    this.products = this.wishlistService.loadWishlist();
  }

  removeFromWishlist(id: string):void{
    this.wishlistService.remove(id);
    this.products = this.wishlistService.loadWishlist();
  }

}
