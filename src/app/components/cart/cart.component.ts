import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from "../../product";
import { Item } from "../../item";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private items: Item[] = [];
	private totalPrice: number = 0;
	private totalItems: number = 0;

  constructor(private activatedRoute: ActivatedRoute,private productService: ProductService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
			var id = params['id'];
			if (id) {
				var item: Item = {
					product: this.productService.find(id),
					quantity: 1
				};
				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(item);
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: Item = cart[i];
						if (item.product.id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(item);
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let item: Item = cart[index];
						item.quantity += 1;
						cart[index] = item;
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
				this.loadCart();
			} else {
				this.loadCart();
			}
		});
  }

  loadCart(): void {
    this.totalPrice = 0;
    this.totalItems = 0;
		this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(cart)
    {
      for (var i = 0; i < cart.length; i++) {
        let item = cart[i];
        this.items.push({
          product: item.product,
          quantity: item.quantity
        });
        this.totalPrice += item.product.price * item.quantity;
        this.totalItems += item.quantity;
      }
    }
  }
  
  remove(id: string): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    cart.map(function(item:Item) {
      if (item.product.id == id) {
            if(item.quantity <= 1)
            {
              cart.splice(item, 1);
            }
            else
            {
              item.quantity -= 1;
            }
        	}
    });
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
	}

}
