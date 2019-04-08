import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Item } from "../../item";
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private items: Item[] = [];
	private totalPrice: number = 0;
	private totalItems: number = 0;

  constructor(private activatedRoute: ActivatedRoute,private productService: ProductService, private cartSerivce: CartService) { }

  ngOnInit() {
		this.items = this.cartSerivce.loadCart();
		this.totalPrice = this.cartSerivce.calculateTotalPrice();
		this.totalItems = this.cartSerivce.calculateTotalItems();   
  }

  removeFromCart(id: string): void {
    this.cartSerivce.remove(id);
		this.items = this.cartSerivce.loadCart();
		this.totalPrice = this.cartSerivce.calculateTotalPrice();
		this.totalItems = this.cartSerivce.calculateTotalItems();   
  }

}
