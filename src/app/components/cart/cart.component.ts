import { Component, OnInit } from '@angular/core';
import { Item } from "../../item";
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { StreamService } from 'src/app/services/stream.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private items: Item[] = [];
	private totalPrice: number = 0;
	private totalItems: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private streamService: StreamService
    ) { }

  ngOnInit() {
		this.items = this.cartService.loadCart();
		this.totalPrice = this.cartService.calculateTotalPrice();
		this.totalItems = this.cartService.calculateTotalItems();   
  }

  removeFromCart(id: string): void {
    this.cartService.remove(id);
		this.items = this.cartService.loadCart();
		this.totalPrice = this.cartService.calculateTotalPrice();
    this.totalItems = this.cartService.calculateTotalItems();
    this.streamService.setCartCount( this.totalItems.toString());
  }

}
